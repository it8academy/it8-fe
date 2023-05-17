import React, { useState, useEffect } from 'react';
import './LightMode.css';
import {HiOutlineMoon} from 'react-icons/hi'
const LightMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div>
      <label className="switch">
        <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
              <span className="slider round">
                  <HiOutlineMoon/>
        </span>
      </label>
    </div>
  );
};

export default LightMode;
