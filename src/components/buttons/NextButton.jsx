import React from 'react';

const NextButton = ({ handleClick }) => {
    return (
        <>
        <button className='next-button hidden lg:block fixed right-5 bottom-5' onClick={handleClick}>Next</button>
        <button className='next-button lg:hidden absolute right-4 bottom-3' onClick={handleClick}>Next</button>
        </>
    );
}

export default NextButton;
