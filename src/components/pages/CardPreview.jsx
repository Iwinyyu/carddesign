import { Fragment, useEffect, useRef, useState } from 'react'
import { GenerateCard } from '../card/GenerateCard';
import { useGlobalState } from '../../globalStates/GlobalStateContext';
import { Dialog, Transition } from '@headlessui/react'
import phoneImgBlack from '../../dist/images/Phone-Black.webp';
import { useDarkMode } from '../../globalStates/DarkModeContext';
import { Link } from 'react-router-dom';
import CellularIcon from '../Icons/CellularIcon';
import WifiIcon from '../Icons/WifiIcon';
import BatteryIcon from '../Icons/BatteryIcon';
import DownloadIcon from '../Icons/DownloadIcon';
import CrossIcon from '../Icons/CrossIcon';
import DotsIcon from '../Icons/DotsIcon';

const CardPreview = () => {

  const { color, logo, backgroundImage, logoSize, visaBrand, appIcon, resetStates, isLoading } = useGlobalState();
  const { darkMode } = useDarkMode();
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [customerState, setCustomerState] = useState('');
  const [agreementChecked, setAgreementChecked] = useState(false);
  const cancelButtonRef = useRef(null)

  const handleDownloadForm = () => {
    setOpen(true)
  };
  const handleCancel = () => {
    setOpen(false)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      GenerateCard(
        color,
        logo,
        logoSize,
        backgroundImage,
        visaBrand,
      );
    } catch (error) {
      console.error('Error adding document: ', error);
    } finally {
    }
  };


  
  const isFormFilled = name && email && companyName && customerState && agreementChecked;

  useEffect(() => {
    document.title = 'Swipe | Card Preview'
  }, []);
  return (
    <>
      <div className={`card-preview flex justify-center items-center flex-col ${darkMode ? 'dark-mode' : ''} `} >
        <div className='flex flex-col items-center justify-center'>
          <div className='mt-6 text-center'>
            <h1 className='color-white-imp'>Congratulations, your <br className='md:hidden' /> card is ready!</h1>
            <p className='my-4 md:my-3 mb-6 md:mb-5 text-base color-whitesmoke-imp'>Download your card art now, or <br className='md:hidden' /> <Link onClick={resetStates} to='/card_design' className='color8 font-medium'>design another card.</Link></p>
          </div>
          <button
            className={`primary-button  cursor-pointer ${darkMode ? '' : 'bg-white'}`}
            onClick={handleDownloadForm}
          >
            <DownloadIcon darkMode={darkMode} />
            Download
          </button>
        </div>
        <div className='card-wrapper flex flex-col relative items-center overflow-hidden mt-4 md:mt-8'>
          <div className={`card-inner shadow-2xl mt-6 ${darkMode ? 'gray' : 'color6'} `}>
            <div className="device-status-bar w-full h-14 px-4 md:px-8 flex justify-between items-center mt-4">
              <h1 className='font-medium text-base'>9:41</h1>
              <div className='flex'>
                <div className='camera me-4 md:me-6'></div>
                <div className='flex gap-2 items-center'>
                  <CellularIcon darkMode={darkMode} />
                  <WifiIcon darkMode={darkMode} />
                  <BatteryIcon darkMode={darkMode} />
                </div>
              </div>
            </div>
            <div className={`topbar flex justify-between px-4 mt-2 items-center ${darkMode ? 'dark-mode' : ''}`}>
              <h1 className='text-base font-medium leading-8'>
                Done
              </h1>
              <div className=''>
                <DotsIcon darkMode={darkMode} />
              </div>
            </div>
          </div>
          <img src={phoneImgBlack} alt="" className='absolute top-0 -z-0' />
          <div className='preview-phone flex flex-col justify-center items-center absolute mr-2 -ml-0.5'>
            <div
              className="card relative rounded-xl ml-2.5"
              style={{
                backgroundColor: color,
                backgroundImage: `url(${backgroundImage})`,
              }}
            >
              {logo ? (
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
              <div className='p-4 absolute bottom-0 left-0 text-white text-base'>
                •••• 9010
              </div>
              <div className='p-5 absolute bottom-0 right-0 flex flex-col justify-items-end items-end'>
                <img src={visaBrand} alt="Visa Brand" width={100} />
              </div>
            </div>
            <div className="bottom-sheet flex items-center justify-center">
              <div className="flex gap-3 justify-center md:gap-6">
                <div className="icon-box border bg-gray-500 flex justify-center items-center">
                  {appIcon ? (
                    <img
                      src={appIcon}
                      alt="appIcon"
                      style={{
                        width: "35px",
                      }}
                    />
                  ) : (
                    ''
                  )}
                </div>
                <div>
                  <div className='flex justify-between'>
                    <h1 className='text-sm md:text-base font-medium'>From [Your app name]</h1>
                    <CrossIcon />
                  </div>
                  <p className='text-xs md:text-sm'>“[Card name]” is ready for digital wallets.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Transition.Root show={open} as={Fragment} className="form">
        <Dialog as="div" className="relative z-10 form " initialFocus={cancelButtonRef} onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0  bg-black bg-opacity-40 transition-opacity " />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto ">
            <div className="flex min-h-screen items-end justify-center  p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                className=""
              >
                <Dialog.Panel className="relative  p-5 trans overflow-hidden rounded-3xl bg-white text-left shadow-xl transition-all sm:my-8" style={{ width: "312px" }}>
                  <div>
                    <h1 className=' text-2xl text-left font-normal mb-5'>Download card art</h1>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                      <div>
                        <label htmlFor="text" className="block text-sm font-normal leading-6 text-gray-600">
                          Full Name
                        </label>
                        <div className="mt-1">
                          <input
                            id="text"
                            name="text"
                            type="text"
                            autoComplete="text"
                            className="block w-full h-12 rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 focus:ring-1 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                            value={name}
                            onChange={(e) => setName(e.target.value)}

                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-normal leading-6 text-gray-600">
                          Work email address
                        </label>
                        <div className="mt-1">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            className="block w-full h-12 rounded-lg border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-400 focus:ring-1 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="text" className="block text-sm font-normal leading-6 text-gray-600">
                          Company name
                        </label>
                        <div className="mt-1">
                          <input
                            id="text"
                            name="text"
                            type="text"
                            autoComplete="text"
                            className="block w-full h-12 rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 focus:ring-1 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="text" className="block text-sm font-normal leading-6 text-gray-600">
                          Are you an existing Swipe customer?
                        </label>
                        <div className='segmented-button mt-2 flex justify-items-center items-center'>

                          <span
                            onClick={() => {
                              setCustomerState('Yes');
                            }}
                            className={`btn border cursor-pointer w-40 text-sm font-medium gap-2 flex items-center justify-center py-2.5 rounded-3xl rounded-r-none px-3 ${customerState === 'Yes' && 'selected'}`}
                          >
                            Yes
                          </span>
                          <span
                            onClick={() => {
                              setCustomerState('No');
                            }}
                            className={`btn border w-40 cursor-pointer text-sm font-medium gap-2 flex items-center justify-center py-2.5 rounded-3xl rounded-l-none px-3 ${customerState === 'No' && 'selected'}`}
                          >
                            No
                          </span>
                        </div>
                      </div>
                      <div className="flex mb-4">
                        <input id="default-checkbox"
                          type="checkbox"
                          checked={agreementChecked}
                          onChange={(e) => setAgreementChecked(e.target.checked)}
                          className="w-4 h-4 mt-1 text-teal-600 rounded-sm cursor-pointer bg-gray-100 border-gray-300 focus:ring-0" />
                        <label htmlFor="default-checkbox" className="block text-sm ms-3 font-normal leading-6 text-gray-600">
                          I agree to Swipe’s <span className='color9 font-medium'>Terms of Services</span> and <span className='color9 font-medium'>Privacy Policy</span>
                        </label>
                      </div>
                      <div className='flex justify-end items-center gap-6'>
                        <div
                          className='text-sm font-medium py-2 px-3 cursor-pointer'
                          onClick={handleCancel}
                        >
                          Cancel
                        </div>
                        <button
                          type="submit"
                          disabled={!isFormFilled} // Disable the button if the form is not filled
                          className={`primary-button ${!isFormFilled ? 'primary-button-disabled cursor-not-allowed' : ''}`}
                        >
                          {isLoading ?
                            'Downloading'
                            :
                            'Download'
                          }
                        </button>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default CardPreview;
