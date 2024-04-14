import React from 'react'
import { useDarkMode } from '../../../globalStates/DarkModeContext';
import { Link } from 'react-router-dom';

export const ElementsHint = () => {
  const { darkMode } = useDarkMode();

  return (
    <div className={`tooltip py-3 px-4 ${darkMode ? 'dark-mode' : ''} `}>
      <h3 className='textColor text-xs font-medium leading-5 mb-2'>💡 Design tip</h3>
      <p className='textColor text-sm font-normal leading-5'>
      Add your logo (Card Issuer logo) to the card. You can also select the logo size.
      </p>
      <p className='textColor text-sm font-normal leading-5 my-5'>
      Add your app icon, used for notifications in digital wallet apps.
            </p>
      <p className='textColor text-sm font-normal leading-5'>
        <span className=' font-medium'>Note:</span>
        check the color contrast between the card background, Visa Brand Mark, and Text color. <Link className={` ${darkMode ? 'color8' : 'color9'} `}>Read more</Link>
      </p>
    </div>
  )
}

export default ElementsHint;


