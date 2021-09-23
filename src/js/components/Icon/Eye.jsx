import React from 'react'

const Eye = ({
	className = [],
	color = 'black',
	title = false
}) => (
    <svg 
        className="blt-icon"
        fill="none"
        height="12" 
        width="17" 
        viewBox="0 0 19 13" 
    >
        {title && <title>{title}</title>}

        <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M17.6766 5.45083C18.1726 6.07204 18.1726 6.92796 17.6766 7.54917C16.2789 9.29961 13.1436 12.6259 9.49998 12.6259C5.85633 12.6259 2.72104 9.29961 1.32337 7.54917C0.827351 6.92796 0.827352 6.07204 1.32337 5.45083C2.72104 3.70039 5.85633 0.374115 9.49998 0.374115C13.1436 0.374115 16.2789 3.70039 17.6766 5.45083ZM13.741 6.5C13.741 8.84224 11.8422 10.741 9.49998 10.741C7.15774 10.741 5.25898 8.84224 5.25898 6.5C5.25898 4.15776 7.15774 2.259 9.49998 2.259C11.8422 2.259 13.741 4.15776 13.741 6.5ZM9.50001 8.85611C10.8013 8.85611 11.8561 7.80124 11.8561 6.5C11.8561 5.19875 10.8013 4.14389 9.50001 4.14389C8.19877 4.14389 7.1439 5.19875 7.1439 6.5C7.1439 7.80124 8.19877 8.85611 9.50001 8.85611Z" 
            fill={color}
        />
    </svg>
)

export default Eye
