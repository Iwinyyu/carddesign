import React, { useState, useEffect, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react'
import { useGlobalState } from '../../globalStates/GlobalStateContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDarkMode } from '../../globalStates/DarkModeContext';
import ToggleModeButton from '../buttons/ToggleModeButton';
import CubeIcon from '../Icons/CubeIcon';
import ImageIcon from '../Icons/ImageIcon';
import EyeIcon from '../Icons/EyeIcon';
import InfoIcon from '../Icons/InfoIcon';
import ElementsIcon from '../Icons/ElementsIcon';


export default function Topbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { darkMode, toggleDarkMode } = useDarkMode();
    const {
        step,
        setStep
    } = useGlobalState();

    const isCardPreviewPage = location.pathname === '/card_preview';
    const isHomePage = location.pathname === '/';
    const isCardDesignPage = location.pathname === '/card_design';
    const isSigninPage = location.pathname === '/login';


    useEffect(() => {
        function handleClickOutside(event) {
            if (!event.target.closest('.info-btn')) {
                setIsOpen(false);
            }
        }

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const productSelectStep = () => {
        if (window.location.pathname === '/card_preview') {
            navigate('/card_design');
            setStep(1);
        } else {
            setStep(1);
        }
    }

    const backgroundSelectStep = () => {
        if (window.location.pathname === '/card_preview') {
            navigate('/card_design');
            setStep(2);
        } else {
            setStep(2);
        }
    }
    const elementsSelectStep = () => {
        if (window.location.pathname === '/card_preview') {
            navigate('/card_design');
            setStep(3);
        } else {
            setStep(3);
        }
    }
    const previewSelectStep = () => {
        navigate('/card_preview');
        setStep(4);
    }

    const resetStates = () => {
        setStep(1);
    };

    return (
        <header className={` ${isSigninPage ? 'hidden' : ''}`}>
            <nav
                className={`mx-auto flex items-center justify-between px-4 py-6 lg:px-8 Navbar 
                ${darkMode ? 'dark-mode' : ''}       
                ${isCardPreviewPage ? 'nav-black' : ''}
                ${darkMode && isHomePage ? 'nav-black' : ''}
                ${darkMode && isCardDesignPage ? 'nav-black-two' : ''} `}
                aria-label="Global"
            >
                <div className="brand md:flex lg:flex-1 justify-start items-center gap-6">
                    <Link to='/' onClick={resetStates}>
                        <span className={`text-sm md:text-2xl cursor-pointer font-medium ${location.pathname === '/card_preview' ? 'imp' : ''} `}>
                            Swipe
                        </span>
                    </Link>
                </div>
                <div className={`segmented-button hidden lg:flex justify-items-center items-center ${darkMode ? 'dark-mode' : ''} ${location.pathname === '/' || location.pathname === '/dashboard' ? 'lg:hidden' : ''}`}>
                    <div onClick={productSelectStep} className={`border cursor-pointer w-40 text-sm gap-2 flex items-center justify-center h-12 rounded-3xl rounded-r-none px-3 ${step === 1 && location.pathname === '/card_design' ? 'active-step' : ''} `}>
                        <CubeIcon darkMode={darkMode} step={step} />
                        <span className={`font-medium  ${darkMode && step > 0
                            ? 'active-dark' :
                            step === 1 ?
                                'active-white' :
                                step > 1 ?
                                    'text-black' :
                                    darkMode ?
                                        'inactive-dark' :
                                        'inactive-white'} `} >
                            Product
                        </span>
                    </div>
                    <div onClick={backgroundSelectStep} className={` border cursor-pointer w-40 text-sm gap-2 flex items-center justify-center h-12 border-l-0 border-r-0 px-3 ${step === 2 ? 'active-step' : ''} `}>
                        <ImageIcon darkMode={darkMode} step={step} />
                        <span className={`font-medium  ${darkMode && step > 1
                            ? 'active-dark' :
                            step === 2 ?
                                'active-white' :
                                step > 2 ?
                                    'text-black' :
                                    darkMode ?
                                        'inactive-dark' :
                                        'inactive-white'} `} >
                            Background
                        </span>
                    </div>
                    <div onClick={elementsSelectStep} className={` border cursor-pointer w-40 text-sm  gap-2 flex items-center justify-center h-12 px-3 border-r-0 ${step === 3 ? 'active-step' : ''}`}>
                        <ElementsIcon step={step} darkMode={darkMode} />
                        <span className={`font-medium  ${darkMode && step > 2
                            ? 'active-dark' :
                            step === 3 ?
                                'active-white' :
                                step > 3 ?
                                    'text-black' :
                                    darkMode ?
                                        'inactive-dark' :
                                        'inactive-white'} `} >
                            Elements
                        </span>
                    </div>
                    <div onClick={previewSelectStep} className={` border cursor-pointer w-40 text-sm gap-2 flex items-center justify-center h-12 rounded-3xl rounded-l-none px-3 ${location.pathname === '/card_preview' ? 'active-step' : ''} `}>
                        <EyeIcon darkMode={darkMode} step={step} />

                        <span className={`font-medium  ${darkMode && step > 3
                            ? 'active-dark' :
                            step === 4 ?
                                'active-white' :
                                step > 4 ?
                                    'text-black' :
                                    darkMode ?
                                        'inactive-dark' :
                                        'inactive-white'} `} >
                            Preview
                        </span>
                    </div>
                </div>

                <div className="flex lg:flex-1 lg:justify-end items-center">
                    <ToggleModeButton darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                    <Menu as="div" className={` relative inline-block text-left ms-2 -me-2 ${location.pathname === '/dashboard' ? 'hidden' : ''} `}>
                        <div>
                            <Menu.Button
                                className={`info-btn ${isOpen ? 'info-btn-selected' : ''}`}
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <InfoIcon darkMode={darkMode} isCardPreviewPage={isCardPreviewPage} />
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <div className="absolute right-0 z-10 mt-2 origin-top-right">
                                <div className="py-1">
                                    <Menu.Item>
                                        <div className='tooltip py-3 px-4 w-80'>
                                            <h3 className='textColor text-xs font-medium leading-5 mb-2'>💡 What you’ll need</h3>
                                            <p className='text-sm mb-4'>To design your digital card art, you’ll need these assets ready:</p>
                                            <ul className='list-disc ms-4 '>
                                                <li className='text-sm textColor font-light leading-5'><span className='font-medium'>Card background color</span> – HEX or RGB background color </li>
                                                <li className='text-sm textColor font-light leading-5'><span className='font-medium'>Card background image</span> – PNG files, up to 3MB, recommended size: 1,536 x 969 pixels. </li>
                                                <li className='text-sm textColor font-light leading-5'><span className='font-medium'>Your logo</span> – PNG or SVG, up to 1MB.</li>
                                                <li className='text-sm textColor font-light leading-5'><span className='font-medium'>App icon</span> – PNG or SVG, recommended size: 100 x 100 pixels.</li>
                                            </ul>
                                        </div>
                                    </Menu.Item>
                                </div>
                            </div>
                        </Transition>
                    </Menu>
                </div>
            </nav>

        </header>
    )
}











