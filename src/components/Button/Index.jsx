import React from 'react'

const Button = ({
    children,
    disabled = false,
    onClick = undefined,
    variant = 'normal',
    size = 'normal',
    title = '',
}) => {
    let color = ''

    let bounds = `
        h-9
        rounded-lg
        p-2.5
        px-3

        md:h-10
        md:px-6
    `

    if(variant == 'normal') {
        color = `
            border
            bg-transparent
            border-black
            text-black

            focus-visible:bg-black
            focus-visible:bg-opacity-10
        `
    }

    if(variant == 'primary') {
        color = `
            bg-primary
            border
            border-primary
            text-white

            focus-visible:ring-primary
            focus-visible:ring-offset-1
        `
    }

    if(variant == 'warning') {
        color = `
            border
            border-warning
            text-warning

            focus-visible:bg-warning
            focus-visible:bg-opacity-10
        `
    }

    if(variant == 'simple') {
        color = `
            bg-transparent
            border-none
            text-black
            focus-visible:ring-black-600
        `
    }

    if(size === 'small') {
        bounds = `
            rounded-lg
            py-1.5
            px-2.5
        `
    } 
    
    if(size === 'tiny') {
        bounds = `
            rounded-lg
            py-0.5
            px-1.5
        `
    }
    

    return(
        <button
        className={`
            capitalize
            flex
            items-center
            justify-center
            font-medium
            text-md
            transition-all
            ${bounds}
            ${color}

            active:opacity-70
            focus:outline-none
            focus-visible:ring-1

            lg:hover:opacity-70
        `}
        disabled={disabled}
        onClick={onClick}
        title={title}>
            {children}
        </button>
    )
}

export default Button