import React from 'react';

const PreviousButton = ({ handleClick }) => {
    return (
        <>
        <button className='previous-button hidden lg:block fixed right-32 bottom-5' onClick={handleClick}>Back</button>
        <button className='previous-button lg:hidden absolute left-28 bottom-3' onClick={handleClick}>Back</button>
        </>
    );
}

export default PreviousButton;
