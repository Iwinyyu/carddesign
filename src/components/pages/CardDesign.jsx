import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../../globalStates/DarkModeContext";
import { useGlobalState } from "../../globalStates/GlobalStateContext";
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon,} from '@heroicons/react/24/outline';
import ProductTypeSelector from "../sidebar/leftSidebar/ProductTypeSelector";
import BackgroundSelector from "../sidebar/leftSidebar/BackgroundSelector";
import ElementsSelector from "../sidebar/leftSidebar/ElementsSelector";
import ProductHint from "../sidebar/rightSidebar/ProductHint";
import DesignHint from "../sidebar/rightSidebar/DesignHint";
import ElementsHint from "../sidebar/rightSidebar/ElementsHint";
import PreviousButton from "../buttons/PreviousButton";
import NextButton from "../buttons/NextButton";
import Card from "../card/Card";


const CardDesign = () => {
  const { step, setStep } = useGlobalState();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigate = useNavigate();

  const { darkMode } = useDarkMode();

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  useEffect(() => {
    document.title = "Swipe | Card Design";
  }, []);

  return (
    <>
      <div className={`design-card ${darkMode ? "dark-mode" : ""}`}>
        <div className="flex lg:hidden justify-end">
          <button
            type="button"
            className="inline-flex me-4 items-center justify-center rounded-md mt-2 p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="lg:grid grid-cols-3">
          <div className="hidden lg:block col-span-1">
            <div
              className={`sidebar m-4 rounded-2xl p-5 ${darkMode ? "dark-mode" : ""
                }`}
            >
              {step === 1 && <ProductTypeSelector />}
              {step === 2 && <BackgroundSelector />}
              {step === 3 && <ElementsSelector />}
            </div>
          </div>
          <div className="col-span-1 flex justify-center">
            <Card />
          </div>
          <div className="hidden lg:block col-span-1">
            <div className="w-80 float-end m-4">
              {step === 1 && <ProductHint />}
              {step === 2 && <DesignHint />}
              {step === 3 && <ElementsHint />}
              {step !== 1 && <PreviousButton handleClick={handlePrevious} />}
              <NextButton handleClick={handleNext} />
              {step === 3 && <button
                className='next-button fixed right-5 bottom-5'
                onClick={() => {
                  navigate('/card_preview')
                  setStep(4)
                }}
              >
                Next
              </button>
              }
            </div>
          </div>
        </div>
      </div>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 left-0 z-10 w-80  bg-white py-3 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-end ">
            <button
              type="button"
              className="  rounded-md py-3 -mt-2 me-2 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flex flex-col" style={{ height: "82%" }}>
            <div className="overflow-y-scroll flex-grow px-6 py-4 border-b border-t">
              <div>
                {step === 1 && <ProductTypeSelector />}
                {step === 2 && <BackgroundSelector />}
                {step === 3 && <ElementsSelector />}
              </div>
            </div>
          </div>
          <div className="bg-black flex justify-end items-center">
            {step !== 1 && <PreviousButton handleClick={handlePrevious} />}
            <NextButton handleClick={handleNext} />
            {step === 3 && (
              <button
                className="next-button absolute right-4 bottom-3"
                onClick={() => {
                  navigate("/card_preview");
                  setStep(4);
                }}
              >
                Next
              </button>
            )}
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
};

export default CardDesign;
