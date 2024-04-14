import React from 'react'

const BatteryIcon = ({darkMode}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={28}
            height={13}
            viewBox="0 0 28 13"
            fill={darkMode ? 'white' : 'black'}
        >
            <rect
                opacity="0.35"
                x={1}
                y="0.5"
                width={24}
                height={12}
                rx="3.8"
                stroke="black"
                style={{ stroke: darkMode ? 'white' : 'black', strokeOpacity: 1 }}
            />
            <path
                opacity="0.4"
                d="M26.5 4.78125V8.85672C27.3047 8.51155 27.828 7.70859 27.828 6.81899C27.828 5.92938 27.3047 5.12642 26.5 4.78125Z"
                fill={darkMode ? 'white' : 'black'}
            />
            <rect
                x="2.5"
                y={2}
                width={21}
                height={9}
                rx="2.5"
                fill={darkMode ? 'white' : 'black'}
            />
        </svg>
    )
}

export default BatteryIcon