import React from 'react';
import { useGlobalState } from '../../../globalStates/GlobalStateContext';
import visaPlatinumWhite from '../../../dist/logo/visaPlatinumWhite.svg';
import visaBusinessWhite from '../../../dist/logo/visaBusinessWhite.svg';

const ProductTypeSelector = () => {
  const { visaBrand, setVisaBrand } = useGlobalState();

  const handleProduct = (brand) => {
    setVisaBrand(brand);
  };

  return (
    <div>
      <h3 className='font-normal text-xl leading-8'>Product</h3>
      <div className='mt-6'>
        <p>Are you issuing cards to business or retail clients?</p>
        <>
          <div className="flex mb-5 mt-5 gap-2">
            <input
              id="default-radio-1"
              onClick={() => {
                handleProduct(visaBusinessWhite);
              }}
              type="radio"
              defaultChecked={visaBrand === visaBusinessWhite}
              name="default-radio"
              className="w-4 h-4 mt-1 text-teal-600 cursor-pointer bg-gray-100 border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-radio-1"
              className="ms-2"
            >
              <span className='title1 text-base'>Business (Platinum Business)</span> <br />
              <span className='text-sm text-gray-500 title2'>
                Use this product identifier if you are using commercial BIN
              </span>
            </label>
          </div>
          <div className="flex gap-2">
            <input
              id="default-radio-2"
              onClick={() => {
                handleProduct(visaPlatinumWhite);
              }}
              type="radio"
              defaultChecked={visaBrand === visaPlatinumWhite}
              name="default-radio"
              className="w-4 h-4 mt-1 text-teal-600 cursor-pointer bg-gray-100 border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-radio-2"
              className="ms-2 text-base text-gray-900"
            >
              <span className='title1 text-base'>Retail (Platinum)</span> <br />
              <span className='text-sm text-gray-500 title2'>
                Use this product identifier if you are using retail BIN
              </span>
            </label>
          </div>
        </>
      </div>
    </div>
  );
};

export default ProductTypeSelector;
