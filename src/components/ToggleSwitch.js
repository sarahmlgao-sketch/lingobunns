function ToggleSwitch({ checked, onChange, label, id }) {
  return (
    <div className="toggle-switch">
      <label htmlFor={id} className="toggle-label">
        <span>{label}</span>
        <div className="toggle-wrapper">
          <input
            type="checkbox"
            id={id}
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            className="toggle-input"
          />
          <span className="toggle-slider"></span>
        </div>
      </label>
    </div>
  );
}

export default ToggleSwitch;
