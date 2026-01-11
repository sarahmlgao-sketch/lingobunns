from pyfirmata import Arduino, SERVO, util
from time import sleep
import sounddevice as sd
import numpy as np
import threading

# set port and pin
port = 'COM5'
pin = 9
board = Arduino(port)

# tell arduino that pin is a servo motor
board.digital[pin].mode = SERVO

# initialize servo position
board.digital[pin].write(90)

# continuous rotation servo settings
drive = 120
degrees_per_second = 120

# sets speed of audio detection and audio device
samplerate = 48000
device_index = 18  # your Stereo Mix (loopback) device
audio_detected = False
previous_audio_state = False

# servo control variables
servo_thread = None
stop_servo = False

# function that rotates servo
def rotateservo(angle):
    # clockwise or counterclockwise
    direction = 1 if angle > 0 else -1

    # calculate run value and duration
    run_val = 90 + direction * abs(drive - 90)
    duration = abs(angle) / degrees_per_second

    # rotate servo
    board.digital[pin].write(run_val)
    sleep(duration)

# function for continuous rotation
def continuous_rotation():
    global stop_servo
    while not stop_servo:
        rotateservo(90)
        rotateservo(-90)
    # Return to neutral when stopped
    board.digital[pin].write(90)

# function that checks for audio
def audio_callback(indata, frames, time, status):
    global audio_detected, previous_audio_state, servo_thread, stop_servo
    
    if status:
        print(status)
    
    # Calculate volume level (RMS - Root Mean Square)
    volume = np.sqrt(np.mean(indata**2))
    
    # Set threshold - adjust this based on your needs
    threshold = 0.001  # Experiment with values like 0.001 to 0.1
    
    audio_detected = volume > threshold
    
    # Start rotation when audio starts
    if audio_detected and not previous_audio_state:
        print("Audio started! Starting continuous rotation...")
        stop_servo = False
        servo_thread = threading.Thread(target=continuous_rotation, daemon=True)
        servo_thread.start()
    
    # Stop rotation when audio stops
    elif not audio_detected and previous_audio_state:
        print("Audio stopped! Stopping rotation...")
        stop_servo = True
        # Don't wait for thread to finish - just signal it to stop
    
    previous_audio_state = audio_detected
    
    # Print status (optional - comment out if too much output)
    # print(f"Audio detected: {audio_detected} | Volume: {volume:.4f}")

# start continuous monitoring
print("Monitoring audio... Press Ctrl+C to stop")
try:
    with sd.InputStream(device=device_index, 
                        channels=2, 
                        samplerate=samplerate, 
                        callback=audio_callback):
        sd.sleep(100000)  # Keep running
except KeyboardInterrupt:
    print("\nStopping...")
    stop_servo = True
    if servo_thread and servo_thread.is_alive():
        servo_thread.join(timeout=3)
    board.digital[pin].write(90)  # Return to neutral position
    print("Stopped monitoring")