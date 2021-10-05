import React from 'react'

const More = ({
	color = 'black',
	title = false
}) => (
    <svg 
        className="blt-icon"
        fill="none"
        height="6" 
        width="26" 
        viewBox="0 0 26 6" 
    >
        {title && <title>{title}</title>}

        <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M6 3C6 4.65686 4.65686 6 3 6C1.34314 6 0 4.65686 0 3C0 1.34314 1.34314 0 3 0C4.65686 0 6 1.34314 6 3ZM16 3C16 4.65686 14.6569 6 13 6C11.3431 6 10 4.65686 10 3C10 1.34314 11.3431 0 13 0C14.6569 0 16 1.34314 16 3ZM23 6C24.6569 6 26 4.65686 26 3C26 1.34314 24.6569 0 23 0C21.3431 0 20 1.34314 20 3C20 4.65686 21.3431 6 23 6Z" 
            fill={color}
        />
    </svg>
)

export default More
