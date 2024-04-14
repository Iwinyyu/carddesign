import React from 'react'

const DotsIcon = ({darkMode}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
        >
            <path
                d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM12 20.25C10.3683 20.25 8.77326 19.7661 7.41655 18.8596C6.05984 17.9531 5.00242 16.6646 4.378 15.1571C3.75358 13.6496 3.5902 11.9908 3.90853 10.3905C4.22685 8.79016 5.01259 7.32015 6.16637 6.16637C7.32016 5.01259 8.79017 4.22685 10.3905 3.90852C11.9909 3.59019 13.6497 3.75357 15.1571 4.37799C16.6646 5.00242 17.9531 6.05984 18.8596 7.41655C19.7661 8.77325 20.25 10.3683 20.25 12C20.2475 14.1873 19.3775 16.2843 17.8309 17.8309C16.2843 19.3775 14.1873 20.2475 12 20.25ZM13.125 12C13.125 12.2225 13.059 12.44 12.9354 12.625C12.8118 12.81 12.6361 12.9542 12.4305 13.0394C12.225 13.1245 11.9988 13.1468 11.7805 13.1034C11.5623 13.06 11.3618 12.9528 11.2045 12.7955C11.0472 12.6382 10.94 12.4377 10.8966 12.2195C10.8532 12.0012 10.8755 11.775 10.9606 11.5695C11.0458 11.3639 11.19 11.1882 11.375 11.0646C11.56 10.941 11.7775 10.875 12 10.875C12.2984 10.875 12.5845 10.9935 12.7955 11.2045C13.0065 11.4155 13.125 11.7016 13.125 12ZM17.25 12C17.25 12.2225 17.184 12.44 17.0604 12.625C16.9368 12.81 16.7611 12.9542 16.5555 13.0394C16.35 13.1245 16.1238 13.1468 15.9055 13.1034C15.6873 13.06 15.4868 12.9528 15.3295 12.7955C15.1722 12.6382 15.065 12.4377 15.0216 12.2195C14.9782 12.0012 15.0005 11.775 15.0856 11.5695C15.1708 11.3639 15.315 11.1882 15.5 11.0646C15.685 10.941 15.9025 10.875 16.125 10.875C16.4234 10.875 16.7095 10.9935 16.9205 11.2045C17.1315 11.4155 17.25 11.7016 17.25 12ZM9 12C9 12.2225 8.93402 12.44 8.81041 12.625C8.68679 12.81 8.51109 12.9542 8.30552 13.0394C8.09996 13.1245 7.87376 13.1468 7.65553 13.1034C7.4373 13.06 7.23684 12.9528 7.07951 12.7955C6.92217 12.6382 6.81503 12.4377 6.77162 12.2195C6.72821 12.0012 6.75049 11.775 6.83564 11.5695C6.92079 11.3639 7.06498 11.1882 7.24999 11.0646C7.43499 10.941 7.6525 10.875 7.875 10.875C8.17337 10.875 8.45952 10.9935 8.6705 11.2045C8.88148 11.4155 9 11.7016 9 12Z"
                fill={ darkMode ? '#C4C7C6' : '#191C1C' }
            />
        </svg>

    )
}

export default DotsIcon