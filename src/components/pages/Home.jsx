import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalState } from '../../globalStates/GlobalStateContext';
import { useDarkMode } from '../../globalStates/DarkModeContext';
import homeCard from '../../dist/images/digital-card-light.webp';
import homeCardDark from '../../dist/images/digital-card-dark.webp';

const Home = () => {
    const { darkMode } = useDarkMode();
    const { resetStates } = useGlobalState();

    useEffect(() => {
        document.title = "Swipe | Home"
    }, []);

    return (
        <>
            <div className={`home relative px-2 ${darkMode ? 'dark-mode' : ''}`}>
                <div className='flex flex-col items-center'>
                    <div className='mt-6 text-center'>
                        <h1>Welcome to the Swipe Card Designer</h1>
                        <p className='my-5 mx-5 md:mx-0'>The easy way to create digital card art for mobile digital wallet apps <br className='hidden lg:block' /> that adheres to Visa’s guidelines.</p>
                    </div>
                    <div className='flex flex-col items-center mt-2 md:mt-0'>
                        <Link to="/card_design" onClick={resetStates}>
                            <button className={`primary-button ${darkMode ? 'dark-mode' : ''}`}>
                                Get started
                            </button>
                        </Link>
                    </div>
                    <div className='mt-5 pb-24'>
                        <img className='h-auto max-w-full' src={darkMode ? homeCardDark : homeCard} alt="" />
                    </div>
                </div>
                
            </div>
        </>
    );
};

export default Home;
