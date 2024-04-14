import React from 'react';
import { useDarkMode } from '../../../globalStates/DarkModeContext';

const ProductHint = () => {
  const { darkMode } = useDarkMode();

  return (
    <div className={`tooltip py-3 px-4 ${darkMode ? 'dark-mode' : ''} `}>
      <h3 className='textColor text-xs font-medium leading-5 mb-2'>💡 What’s the difference between a Commercial and Retail BIN?</h3> 
      <ul className='list-disc ms-4 '> {/* Added class list-disc for default disc style */}
        <li className='textColor text-sm font-light leading-5'>If the use case is for business purchases or making payments for commercial use, choose a commercial BIN. </li>
        <li className='textColor text-sm font-light leading-5'>If it’s for individuals purchasing items or making payments, choose a Retail BIN.</li>
      </ul>
    </div>
  );
};

export default ProductHint;
