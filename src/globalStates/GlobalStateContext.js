import React, { createContext, useContext, useState, useEffect} from 'react';
import visaBusinessWhite from '../dist/logo/visaBusinessWhite.svg'

const GlobalStateContext = createContext();

export const useGlobalState = () => {
  return useContext(GlobalStateContext);
};

export const GlobalStateProvider = ({ children }) => {
  const [color, setColor] = useState('#270057');
  const [logo, setLogo] = useState('');
  const [appIcon, setAppIcon] = useState(null);
  const [driveAppIcon, setDriveAppIcon] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [logoSize, setLogoSize] = useState(34);
  const [textColor, setTextColor] = useState('white');
  const [visaBrand, setVisaBrand] = useState(visaBusinessWhite);
  const [logoSpinner, setLogoSpinner] = useState(false);
  const [appIconSpinner, setAppIconSpinner] = useState(false);
  const [backgroundImageSpinner, setBackgroundImageSpinner] = useState(false);
  const [backgroundImageURL, setBackgroundImageURL] = useState(null);
  const [backgroundImageName, setBackgroundImageName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [step, setStep] = useState(() => {
    const savedStep = localStorage.getItem('step');
    return savedStep ? parseInt(savedStep, 10) : 1;
  });


  useEffect(() => {
    localStorage.setItem('step', step.toString());
  }, [step]);


  const resetStates = () => {
    setLogo('');
    setAppIcon( );
    setBackgroundImage(null);
    setLogoSize('medium');
    setVisaBrand(visaBusinessWhite);
    setStep(1);
    setLogoSize(34);
    setColor('#270057');
  };

  return (
    <GlobalStateContext.Provider
      value={{
        color,
        setColor,
        logo,
        setLogo,
        appIcon,
        setAppIcon,
        backgroundImage,
        setBackgroundImage,
        logoSize,
        setLogoSize,
        visaBrand,
        setVisaBrand,
        step,
        setStep,
        textColor,
        setTextColor,
        resetStates,
        logoSpinner,
        setLogoSpinner,
        appIconSpinner,
        setAppIconSpinner,
        backgroundImageSpinner,
        setBackgroundImageSpinner,
        backgroundImageURL,
        setBackgroundImageURL,
        backgroundImageName,
        setBackgroundImageName,
        isLoading,
        setIsLoading,
        driveAppIcon,
        setDriveAppIcon
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};
