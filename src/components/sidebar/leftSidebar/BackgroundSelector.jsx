import { useState } from 'react';
import { useGlobalState } from '../../../globalStates/GlobalStateContext';
import loadingIcon from '../../../dist/icons/spinner.svg';
import UploadIcon from '../../Icons/UploadIcon';
import { useDarkMode } from '../../../globalStates/DarkModeContext';

const BackgroundSelector = () => {
  const [imageName, setImageName] = useState("");

  const {
    backgroundImage,
    setBackgroundImage,
    color,
    setColor,
    backgroundImageSpinner,
    setBackgroundImageSpinner
  } = useGlobalState();

  const { darkMode } = useDarkMode();


  const handleBackgroundImageChange = (image) => {
    setBackgroundImage(image);
    setColor(null);
  };

  const handleImageChange = (e) => {
    setBackgroundImageSpinner(true)
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      handleBackgroundImageChange(reader.result); // Pass the selected image to parent component
      setBackgroundImageSpinner(false)

    };

    if (file) {
      reader.readAsDataURL(file);
      setImageName(file.name); 
    }
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
    setBackgroundImage(null)
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      handleBackgroundImageChange(reader.result); // Pass the selected image to parent component
    };

    if (file) {
      reader.readAsDataURL(file);
      setImageName(file.name); 
    }
  };

  return (
    <div>
      <h3 className='font-normal text-xl leading-8'>Background</h3>
      <div className='mt-6'>
        <h6 className='text-sm font-medium my-3'>{imageName ? imageName : "Upload background image"}</h6>
        <label htmlFor="dragDropBackgroundImageInput" className='text-sm font-normal leading-5 cursor-pointer' onDragOver={handleDragOver} onDrop={handleDrop}>
          <div className={`upload-drop flex flex-col gap-2 justify-center items-center h-32 rounded-lg`}
          >
            {backgroundImageSpinner ? (
              <div >
                <img className='animate-spin' src={loadingIcon} alt="" width={24} />
              </div>
            ) : (
              backgroundImage ? (
                <div className='w-full flex ms-4 justify-start'>
                  <img
                    src={backgroundImage}
                    alt=""
                    className='w-36 h-24 rounded-lg'
                  />
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center gap-2">
                 <UploadIcon darkMode={darkMode}/>
                  <p className='text-xs font-normal leading-5'>
                    Drag and drop files here
                  </p>
                </div>
              )
            )}
            <input id="dragDropBackgroundImageInput"
              type='file'
              accept=".png,.svg, .jpeg, .jpg"
              onChange={(e) => handleImageChange(e)}
              className="hidden"
            />
          </div >
        </label>
        <p className='text-sm font-normal leading-5 mt-2'>PNG files only, up to 3MB. Recommended size/aspect ratio: 1,536 x 969 pixels.</p>
      </div>
      <div className='mt-6'>
        <h6 className=' text-sm font-medium mb-3'>Select background color</h6>
        <div className="rounded-2xl border bg-black overflow-hidden h-36">
          <div className='-ml-5 h-60 -mt-5' style={{width:"330px"}}>
          <input
            type="color"
            id="colorPicker"
            value={color}
            onChange={handleColorChange}
            className='w-full h-full cursor-pointer'
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundSelector;
