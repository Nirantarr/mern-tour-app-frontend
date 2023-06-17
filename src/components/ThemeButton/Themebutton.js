import React, { useState } from 'react';
import './themebutton.css';
const ToggleButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    
    <label className={`toggle-button ${isDarkMode ? 'dark' : 'light'}`}>
      <input type="checkbox" checked={isDarkMode} onChange={handleToggle} />
      <span className="slider round"></span>
    </label>
  );
};

export default ToggleButton;
