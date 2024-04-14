import React from 'react';
import { useDarkMode } from '../../globalStates/DarkModeContext';
import { useGlobalState } from '../../globalStates/GlobalStateContext';
import loadingIcon from '../../dist/icons/spinner.svg';
import DotsIcon from '../Icons/DotsIcon';
import CrossIcon from '../Icons/CrossIcon';
import CellularIcon from '../Icons/CellularIcon';
import WifiIcon from '../Icons/WifiIcon';
import BatteryIcon from '../Icons/BatteryIcon';


const Card = () => {

  const { textColor, logoSize, color, logo, backgroundImage, visaBrand, appIcon, logoSpinner, appIconSpinner, backgroundImageSpinner } = useGlobalState();

  const { darkMode } = useDarkMode();

  return (
    <div className={`phone-skeleton mt-2 md:mt-10 ${darkMode ? 'dark-mode' : ''}`}>
      <div className="device-status-bar w-full px-8 flex justify-between items-center">
        <div>9:41</div>
        <div className='camera absolute' style={{ marginLeft: "90px" }}></div>
        <div className='flex gap-2'>
          <CellularIcon darkMode={darkMode} />
          <WifiIcon darkMode={darkMode} />
          <BatteryIcon darkMode={darkMode} />
        </div>
      </div>
      <div className='topbar flex justify-between items-center'>
        <div className='text-base font-medium leading-8'>
          Done
        </div>
        <div>
          <DotsIcon darkMode={darkMode} />
        </div>
      </div>
      <div
        className="relative rounded-lg overflow-hidden"
        style={{
          backgroundColor: color,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '336px',
          height: '212px'
        }}
      >
        {
          backgroundImageSpinner ? (

            <div className=' bg-black bg-opacity-40 absolute z-10 rounded-lg flex justify-center items-center'
              style={{
                width: '336px',
                height: '212px'
              }}
            >
              <img className='animate-spin' src={loadingIcon} alt="" width={44} />
            </div>

          ) : (

            <></>

          )
        }

        {logoSpinner ? (
          <div
          className='uploadlogo ms-5 mt-3'
        >
            <img className='animate-spin w-7' src={loadingIcon} alt="" />
          </div>
        ) :
          logo ? (
            <img
              src={logo}
              alt="Logo"
              style={{
                width: `${logoSize}px`,
                position: 'absolute',
                top: '20px',
                left: '20px'
              }}
            />
          ) : (
            <div
              className='uploadlogo ms-5 mt-3'
            >
              Your Logo
            </div>
          )}

        <div className='p-4 absolute bottom-0 left-0 text-base' style={{ color: textColor }}> {/* Apply text color here */}
          •••• 9010
        </div>
        <div className='p-5 absolute bottom-0 right-0 flex flex-col justify-items-end items-end'>
          <img src={visaBrand} alt="Visa Brand" style={{ width: "92px" }} />
        </div>
      </div>
      <div className={`bottom-sheet flex items-center justify-center`}>
        <div className="flex gap-3">
          <div className="icon-box flex justify-center items-center">
            {
              appIconSpinner ? (
                <img className='animate-spin' src={loadingIcon} alt="" width={24} />
              )
                :
                appIcon ? (
                  <img
                    src={appIcon}
                    alt="appIcon"
                    style={{
                      width: "35px",
                    }}
                  />
                )
                  :
                  (
                    ''
                  )
            }
          </div>
          <div>
            <div className='flex justify-between'>
              <h1 className='text-base font-medium'>From [Your app name]</h1>
              <CrossIcon />
            </div>
            <p className=' text-sm'>“[Card name]” is ready for digital wallets.</p>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Card;

