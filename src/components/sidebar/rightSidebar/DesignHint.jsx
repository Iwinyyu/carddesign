import React from 'react'
import { useDarkMode } from '../../../globalStates/DarkModeContext';

export const DesignHint = () => {
  const { darkMode } = useDarkMode();

  return (
    <div className={`tooltip py-3 px-4 ${darkMode ? 'dark-mode' : ''} `}>
      <h3 className='textColor text-xs font-medium leading-5 mb-2'>💡 Design tip</h3>
      <p className='textColor text-sm font-normal leading-5'>
        Upload your card’s background image, or select a background color.
      </p>
      <p className='textColor text-sm font-normal leading-5 my-5'>
        The background color is also used as a fallback when the background image can’t load. E.g. low cellular reception.
      </p>
      <p className='textColor text-sm font-normal leading-5'>
        <span className=' font-medium'>Note:</span> you can add your logo to the card in the next step. If you’ve included your logo in the background image, you can skip adding your logo in the next step.
      </p>
    </div>
  )
}
export default DesignHint;
