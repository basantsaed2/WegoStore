import React from 'react'

const DomainIcon = ({ Width = "24", Height = "24", isActive = '#fff' }) => {
    return (
        <svg width={Width} height={Height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_111_3549)">
            <path d="M28 26H18.8157C18.6666 25.5817 18.4263 25.2017 18.1123 24.8876C17.7982 24.5736 17.4183 24.3333 17 24.1841V19H24C24.5302 18.9993 25.0386 18.7884 25.4135 18.4135C25.7884 18.0386 25.9993 17.5302 26 17V4C25.9993 3.46977 25.7884 2.96145 25.4135 2.58652C25.0386 2.21159 24.5302 2.00066 24 2H8C7.46977 2.00066 6.96145 2.21159 6.58652 2.58652C6.21159 2.96145 6.00066 3.46977 6 4V17C6.00066 17.5302 6.21159 18.0386 6.58652 18.4135C6.96145 18.7884 7.46977 18.9993 8 19H15V24.1841C14.5817 24.3333 14.2018 24.5736 13.8877 24.8876C13.5737 25.2017 13.3334 25.5817 13.1843 26H4V28H13.1843C13.3881 28.5843 13.7686 29.0908 14.2731 29.4492C14.7776 29.8076 15.3812 30.0001 16 30.0001C16.6188 30.0001 17.2224 29.8076 17.7269 29.4492C18.2314 29.0908 18.6119 28.5843 18.8157 28H28V26ZM24 12H8V9H24V12ZM24 4V7H8V4H24ZM8 14H24V17H8V14ZM16 28C15.8022 28 15.6089 27.9414 15.4444 27.8315C15.28 27.7216 15.1518 27.5654 15.0761 27.3827C15.0004 27.2 14.9806 26.9989 15.0192 26.8049C15.0578 26.6109 15.153 26.4327 15.2929 26.2929C15.4327 26.153 15.6109 26.0578 15.8049 26.0192C15.9989 25.9806 16.2 26.0004 16.3827 26.0761C16.5654 26.1518 16.7216 26.28 16.8315 26.4444C16.9414 26.6089 17 26.8022 17 27C16.9998 27.2652 16.8944 27.5194 16.7069 27.7069C16.5194 27.8944 16.2652 27.9998 16 28Z" fill={isActive ? '#1A237E': '#fff'}/>
            </g>
            <defs>
            <clipPath id="clip0_111_3549">
            <rect width={Width} height={Height} fill="white"/>
            </clipPath>
            </defs>
        </svg>
    )
}

export default DomainIcon