import { useState, useEffect } from 'react';
import ToggleSwitch from '../components/ToggleSwitch';
import Card from '../components/Card';
import { saveToStorage, loadFromStorage } from '../utils/storage';
import bunBunConfused from '../assets/images/settings/BunBun - Confused.png';

function Settings() {
  const [settings, setSettings] = useState({
    volume: 75,
    quietHoursEnabled: false,
    quietHoursStart: '21:00',
    quietHoursEnd: '08:00',
    storyTimeEnabled: false,
    storyTimeStart: '20:00',
    storyTimeEnd: '21:00',
    schedules: [],
    languages: {
      English: true,
      'Chinese (Mandarin)': true,
      French: false,
      Spanish: false,
      Hindi: false,
    },
  });

  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  // Load settings from storage
  useEffect(() => {
    const saved = loadFromStorage('settings', null);
    if (saved) {
      setSettings(saved);
    }
  }, []);

  // Save settings to storage
  useEffect(() => {
    saveToStorage('settings', settings);
  }, [settings]);

  // Load ElevenLabs script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
    script.async = true;
    script.type = 'text/javascript';
    
    script.onload = () => {
      setIsScriptLoaded(true);
    };
    
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // Apply volume to ElevenLabs audio when it changes
  useEffect(() => {
    if (isScriptLoaded) {
      const timer = setTimeout(() => {
        // Find the audio element created by ElevenLabs widget
        const audioElements = document.querySelectorAll('audio');
        audioElements.forEach(audio => {
          audio.volume = settings.volume / 100; // Convert 0-100 to 0-1
        });
        
        // Also try to access through iframe if widget uses one
        const iframes = document.querySelectorAll('iframe');
        iframes.forEach(iframe => {
          try {
            const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
            if (iframeDoc) {
              const iframeAudio = iframeDoc.querySelectorAll('audio');
              iframeAudio.forEach(audio => {
                audio.volume = settings.volume / 100;
              });
            }
          } catch (e) {
            // Cross-origin iframe, can't access
            console.log('Cannot access iframe audio (cross-origin)');
          }
        });
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [settings.volume, isScriptLoaded]);

  const handleVolumeChange = (e) => {
    setSettings(prev => ({ ...prev, volume: parseInt(e.target.value) }));
  };

  const handleToggle = (key) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleTimeChange = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const handleLanguageToggle = (lang) => {
    setSettings(prev => ({
      ...prev,
      languages: {
        ...prev.languages,
        [lang]: !prev.languages[lang],
      },
    }));
  };

  const handleAddSchedule = () => {
    setSettings(prev => ({
      ...prev,
      schedules: [
        ...prev.schedules,
        { start: '20:00', end: '21:00', enabled: true },
      ],
    }));
  };

  const languages = ['English', 'Chinese (Mandarin)', 'French', 'Spanish', 'Hindi'];

  return (
    <div className="page settings-page">
      <div className="settings-header">
        <h1 className="page-title">Settings</h1>
        <div className="settings-header-right">
          <img src={bunBunConfused} alt="BunBun confused" className="settings-bunny" />
        </div>
      </div>

      <div className="settings-section">
          <elevenlabs-convai agent-id="agent_9701kend535gef289czv0j7bjh9c" />
      </div>

      <div className="settings-section">
        <h2 className="section-title">Volume</h2>
        <div className="slider-group">
          <div className="slider-label">
            <span>Volume</span>
            <span>{settings.volume}%</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={settings.volume}
            onChange={handleVolumeChange}
            className="slider"
          />
        </div>
      </div>

      <div className="settings-section">
        <h2 className="section-title">Quiet Hours</h2>
        <Card>
          <ToggleSwitch
            id="quiet-hours"
            label="Quiet Hours"
            checked={settings.quietHoursEnabled}
            onChange={(checked) => handleToggle('quietHoursEnabled')}
          />
          {settings.quietHoursEnabled && (
            <div className="time-inputs">
              <input
                type="time"
                value={settings.quietHoursStart}
                onChange={(e) => handleTimeChange('quietHoursStart', e.target.value)}
              />
              <span>to</span>
              <input
                type="time"
                value={settings.quietHoursEnd}
                onChange={(e) => handleTimeChange('quietHoursEnd', e.target.value)}
              />
            </div>
          )}
        </Card>
      </div>

      <div className="settings-section">
        <h2 className="section-title">Story Time Scheduling</h2>
        <Card>
          <ToggleSwitch
            id="story-time"
            label="Story Time"
            checked={settings.storyTimeEnabled}
            onChange={(checked) => handleToggle('storyTimeEnabled')}
          />
          {settings.storyTimeEnabled && (
            <>
              <div className="time-inputs">
                <input
                  type="time"
                  value={settings.storyTimeStart}
                  onChange={(e) => handleTimeChange('storyTimeStart', e.target.value)}
                />
                <span>to</span>
                <input
                  type="time"
                  value={settings.storyTimeEnd}
                  onChange={(e) => handleTimeChange('storyTimeEnd', e.target.value)}
                />
              </div>
              <button className="btn" onClick={handleAddSchedule} style={{ marginTop: '16px' }}>
                Add Schedule
              </button>
              {settings.schedules.map((schedule, index) => (
                <div key={index} className="schedule-item">
                  <div className="time-inputs">
                    <input
                      type="time"
                      value={schedule.start}
                      onChange={(e) => {
                        const newSchedules = [...settings.schedules];
                        newSchedules[index].start = e.target.value;
                        setSettings(prev => ({ ...prev, schedules: newSchedules }));
                      }}
                    />
                    <span>to</span>
                    <input
                      type="time"
                      value={schedule.end}
                      onChange={(e) => {
                        const newSchedules = [...settings.schedules];
                        newSchedules[index].end = e.target.value;
                        setSettings(prev => ({ ...prev, schedules: newSchedules }));
                      }}
                    />
                  </div>
                </div>
              ))}
            </>
          )}
        </Card>
      </div>

      <div className="settings-section">
        <h2 className="section-title">Languages</h2>
        <Card>
          <div className="languages-list">
            {languages.map(lang => (
              <ToggleSwitch
                key={lang}
                id={`lang-${lang}`}
                label={lang}
                checked={settings.languages[lang] || false}
                onChange={() => handleLanguageToggle(lang)}
              />
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Settings;