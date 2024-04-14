import React, { useState } from 'react';
import { useGlobalState } from '../../../globalStates/GlobalStateContext';
import loadingIcon from '../../../dist/icons/spinner.svg';
import UploadIcon from '../../Icons/UploadIcon';
import visaPlatinumWhite from '../../../dist/logo/visaPlatinumWhite.svg'
import visaPlatinumSilver from '../../../dist/logo/visaPlatinumSilver.svg'
import visaPlatinumBlue from '../../../dist/logo/visaPlatinumBlue.svg'
import visaBusinessWhite from '../../../dist/logo/visaBusinessWhite.svg'
import visaBusinessSilver from '../../../dist/logo/visaBusinessSilver.svg'
import visaBusinessBlue from '../../../dist/logo/visaBusinessBlue.svg'
import { useDarkMode } from '../../../globalStates/DarkModeContext';

const ElementsSelector = () => {
  const [imageName, setImageName] = useState("");

  const {
    textColor,
    setTextColor,
    logo,
    setLogo,
    appIcon,
    setAppIcon,
    logoSize,
    setLogoSize,
    visaBrand,
    setVisaBrand,
    logoSpinner,
    setLogoSpinner,
    appIconSpinner,
    setAppIconSpinner,
    setDriveAppIcon
  } = useGlobalState();

  const { darkMode } = useDarkMode();

  const handleLogoChange = (file) => {
    setLogoSpinner(true);
    const reader = new FileReader();

    reader.onloadend = () => {
      setLogo(reader.result);
      setLogoSpinner(false);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    handleLogoChange(file);
    if (file) {
      setImageName(file.name);
    }
  };

  const handleSizeChange = (event) => {
    let newSize = parseInt(event.target.value);

    // Ensure the size is within the specified range
    if (newSize < 34) {
      newSize = 34;
    } else if (newSize > 64) {
      newSize = 64;
    }

    setLogoSize(newSize);
  };

  const handleAppIcon = async (eOrFile) => {
    setAppIconSpinner(true);
    const file = eOrFile.target ? eOrFile.target.files[0] : eOrFile;
    const reader = new FileReader();

    // Continue with image processing if needed
    reader.onloadend = () => {
      const image = new Image();
      image.onload = async() => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        let targetWidth = image.width;
        let targetHeight = image.height;

        // Check if image size exceeds 100x100 pixels
        if (image.width > 100 || image.height > 100) {
          const aspectRatio = image.width / image.height;
          if (aspectRatio > 1) {
            // Landscape orientation
            targetHeight = 100 / aspectRatio;
            targetWidth = 100;
          } else {
            // Portrait orientation
            targetWidth = 100 * aspectRatio;
            targetHeight = 100;
          }
        }

        canvas.width = targetWidth;
        canvas.height = targetHeight;

        context.drawImage(image, 0, 0, targetWidth, targetHeight);
        const resizedImageDataUrl = canvas.toDataURL('image/png');
        const reapAppIconName = "AppIcon" + Date.now().toString();

        // Set app icon to the resized image
        setAppIcon(resizedImageDataUrl);

        const formData = new FormData();
        formData.append("file", resizedImageDataUrl); // Adjusted to match server's expected field name
        formData.append("folderId", '13Y_Tl-pDWg1tdckSZQmwjGSMT_dwnms9'); // Adding the folder ID
        formData.append("name", reapAppIconName); // Append the random name to the form data

        try {
          const response = await fetch("http://localhost:5000/upload", {
            method: 'POST',
            body: formData
          });

          const data = await response.json();

          setDriveAppIcon(`https://drive.google.com/file/d/${data.fileUrl}`);

        } catch (error) {
          console.log("Error uploading file:", error);
          setAppIconSpinner(false);
          return;
        }
      };

      if (file) {
        image.src = URL.createObjectURL(file);
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    }
    setAppIconSpinner(false);

  };

  const handleAppIconChange = (e) => {
    const file = e.target.files[0];
    handleAppIcon(file);
  };

  const handleVisaBrandChange = (brand) => {
    setVisaBrand(brand);
  };

  const handleTextColorBlack = () => {
    setTextColor('black');
  };
  const handleTextColorWhite = () => {
    setTextColor('white');
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleLogoChange(file);
    if (file) {
      setImageName(file.name);
    }
  };

  return (
    <div className='elements'>
      <h3 className='font-normal text-xl leading-8'>Elements</h3>
      <div className='mt-6'>
        <h6 className='text-sm font-medium my-3'>{imageName ? imageName : "Upload your logo"}</h6>
        <label htmlFor="dragDropLogoInput" className='text-sm font-normal leading-5 cursor-pointer' onDragOver={handleDragOver} onDrop={handleDrop}>
          <div className={`upload-drop flex flex-col gap-2 justify-center items-center h-24 rounded-lg`}
          >
            {logoSpinner ? (
              <div >
                <img className='animate-spin' src={loadingIcon} alt="" width={24} />
              </div>
            ) : (
              logo ? (
                <div className='w-full flex ms-8 justify-start'>
                  <img
                    src={logo}
                    alt="Logo"
                    className='w-12'
                  />
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center gap-2">
                  <UploadIcon darkMode={darkMode} />
                  <p className='text-xs font-normal leading-5'>
                    Drag and drop files here
                  </p>
                </div>
              )
            )}
            <input id="dragDropLogoInput"
              type='file'
              accept=".png,.svg"
              onChange={(e) => handleImageChange(e)}
              className="hidden"
            />
          </div >
        </label>
        <p className='text-sm font-normal leading-5 mt-2'>PNG or SVG files, up to 1MB.</p>
        <div className="logo-container">
          <label htmlFor="logo-size" className="block mb-5 mt-5">
            <h6 className='text-sm font-medium'>Logo size</h6>
          </label>
          <div className="flex w-full items-center">
            <input
              id="logo-size"
              type="range"
              accept=".png,.svg"
              min="34"
              max="64"
              step="1"
              value={logoSize}
              onChange={handleSizeChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 slider"
            />
            <div className='w-1 h-1 dot absolute right-0 me-1.5 rounded-full'>
            </div>
          </div>
        </div>
      </div>
      <div className='mb-6 mt-8'>
        <h6 className='text-sm font-medium my-3'>Upload app icon</h6>
        <div className='flex gap-2 items-center'>
          <div className="dragDropAppIconInput" onDragOver={handleDragOver} onDrop={handleDrop}>
            <label
              htmlFor="dragDropAppIconInput"
              className="upload-drop flex w-20 h-20 rounded-lg cursor-pointer flex-col items-center justify-center"
            >
              {appIconSpinner ? (
                <span>
                  <img src={loadingIcon} className='animate-spin' width={24} alt="" />
                </span>
              ) :
                (appIcon ?
                  (
                    <div className='w-full flex justify-center'>
                      <img
                        src={appIcon}
                        alt="appIcon"
                        className='w-9'
                      />
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center gap-2">
                      <UploadIcon />
                    </div>
                  )
                )}
              <input
                type='file'
                id="dragDropAppIconInput"
                accept="image/*"
                onChange={handleAppIconChange}
                className="hidden"
              />
            </label>
          </div>
          <div>
            <p className='text-sm'>PNG or SVG files, up to 1MB. Recommended size: 100 x 100 pixels, 1:1 aspect ratio.</p>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <h6 className='text-sm font-medium my-3'>Visa Brand Mark color</h6>
        <div className='segmented-button flex justify-items-center items-center'>
          <button
            className={`btn border w-40 text-sm font-medium gap-2 flex items-center justify-center py-2.5 rounded-3xl rounded-r-none px-3 ${(visaBrand === visaPlatinumWhite || visaBrand === visaBusinessWhite) && 'selected'}`}
            onClick={() => {
              if (visaBrand === visaPlatinumWhite || visaBrand === visaPlatinumSilver || visaBrand === visaPlatinumBlue) {
                handleVisaBrandChange(visaPlatinumWhite);
              } else if (visaBrand === visaBusinessWhite || visaBrand === visaBusinessSilver || visaBrand === visaBusinessBlue) {
                handleVisaBrandChange(visaBusinessWhite);
              }
            }}
          >
            Light
          </button>
          <button
            className={`btn border w-40 text-sm font-medium gap-2 flex items-center justify-center py-2.5 border-l-0 border-r-0 px-3 ${(visaBrand === visaPlatinumSilver || visaBrand === visaBusinessSilver) && 'selected'} `}
            onClick={() => {
              if (visaBrand === visaPlatinumWhite || visaBrand === visaPlatinumSilver || visaBrand === visaPlatinumBlue) {
                handleVisaBrandChange(visaPlatinumSilver);
              } else if (visaBrand === visaBusinessWhite || visaBrand === visaBusinessSilver || visaBrand === visaBusinessBlue) {
                handleVisaBrandChange(visaBusinessSilver);
              }
            }}
          >
            Silver
          </button>
          <button
            className={`btn border w-40 text-sm font-medium gap-2 flex items-center justify-center py-2.5 rounded-3xl rounded-l-none px-3 ${(visaBrand === visaPlatinumBlue || visaBrand === visaBusinessBlue) && 'selected'}`}
            onClick={() => {
              if (visaBrand === visaPlatinumWhite || visaBrand === visaPlatinumSilver || visaBrand === visaPlatinumBlue) {
                handleVisaBrandChange(visaPlatinumBlue);
              } else if (visaBrand === visaBusinessWhite || visaBrand === visaBusinessSilver || visaBrand === visaBusinessBlue) {
                handleVisaBrandChange(visaBusinessBlue);
              }
            }}
          >
            Blue
          </button>
        </div>
        <h6 className='text-sm font-medium my-3 mt-5'>Text color</h6>
        <div className='segmented-button flex justify-items-center items-center'>
          <button
            className={`btn border w-40 text-sm font-medium gap-2 flex items-center justify-center py-2.5 rounded-3xl rounded-r-none px-3 ${textColor === 'white' && 'selected'}`}
            onClick={handleTextColorWhite}
          >
            White
          </button>
          <button
            className={`btn border w-40 text-sm font-medium gap-2 border-l-0 flex items-center justify-center py-2.5 rounded-3xl rounded-l-none px-3 ${textColor === 'black' && 'selected'}`}
            onClick={handleTextColorBlack}
          >
            Black
          </button>
        </div>
      </div>
    </div >
  );
};

export default ElementsSelector;
