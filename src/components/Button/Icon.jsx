import React from 'react'

const IconButton = ({
    as = 'button',
    icon,
    disabled = false,
    onClick = undefined,
    variant = 'normal',
    size = 'normal',
    title = '',
}) => {
    let color = ''

    let bounds = `
        h-8
        w-8

        md:h-9
        md:w-9
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

    if(variant == 'warning' || variant == 'destructive') {
        color = `
            border
            border-warning

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
            h-6
            w-6

            md:h-8
            md:h-8
        `
    } 
    
    if(size === 'tiny') {
        bounds = `
            h-4
            w-4

            md:h-5
            md:h-5
        `
    }
    

    return(
        React.createElement(
            as,
            {
                className: `
                    capitalize
                    flex
                    items-center
                    justify-center
                    rounded-full
                    transition-all

                    ${bounds}
                    ${color}

                    active:opacity-70
                    focus:outline-none
                    focus-visible:ring-1

                    lg:hover:opacity-70
                `,
                'disabled': disabled,
                'onClick': onClick,
                'title': title,
            },
            icon
        )
    )
}

export default IconButton