import React from 'react';
import { useLocation } from 'react-router-dom';
import { useDarkMode } from '../../globalStates/DarkModeContext';
import MoonIcon from '../Icons/MoonIcon';
import SunIcon from '../Icons/SunIcon';

const ToggleModeButton = () => {
  const { toggleDarkMode, toggleLightMode, darkMode } = useDarkMode();
  const location = useLocation();

  const isNotCardPreviewPage = location.pathname !== '/card_preview';
  const isCardPreviewPage = location.pathname === '/card_preview';

  return (
    <div className={`toggle-mode-btn flex justify-between items-center px-1 ${darkMode && isNotCardPreviewPage
      ? 'toggle-mode-btn-dark'
      : isCardPreviewPage
        ? 'toggle-mode-btn-dark-imp'
        : ''
      }`}>

      <button className={darkMode ? '' : 'active'} onClick={toggleLightMode}>
        <SunIcon isNotCardPreviewPage={isNotCardPreviewPage} isCardPreviewPage={isCardPreviewPage} darkMode={darkMode} />
      </button>
      <button className=
        {
          darkMode && isNotCardPreviewPage
            ? 'active-dark'
            : isCardPreviewPage
              ? 'active-dark'
              : '#191C1C'
        }
        onClick={toggleDarkMode}>
        <MoonIcon isNotCardPreviewPage={isNotCardPreviewPage} isCardPreviewPage={isCardPreviewPage} darkMode={darkMode} />
      </button>
    </div>
  );
};

export default ToggleModeButton;

