import React, {useEffect, useRef, useState} from 'react'
import {useFloating, shift, offset} from '@floating-ui/react-dom'

// Components
import Button from '@components/Form/Button/Button'
import {Format} from '@components/FormattedTo'

// Styles
import {
    PopoverElement,
    PopoverPanel,
} from './Popover.styles.js'

const PopoverWrapper = ({ 
    button = null,
    buttonVariant = 'normal',
    buttonSize = 'normal',
    css = {},
    origin = 'top-start',
    children = null,
}) => {
    const [visible, setVisible] = useState()
    const popoverRef = useRef()

    const {
        x, 
        y, 
        reference, 
        floating,
    } = useFloating({
        placement: origin,
        middleware: [shift(), offset(12)],
    })

    useEffect(() => {
        document.addEventListener('click', checkClickInside)

        return () => {
            document.removeEventListener('click', checkClickInside)
        }
    }, [])

    const checkClickInside = e => {
        if(popoverRef && !popoverRef.current.contains(e.target)) {
            setVisible(false)
        }
    }

    return (
        <PopoverElement
        css={css}
        ref={popoverRef}>
            <Button
            ref={reference}
            onClick={() => setVisible(!visible)}
            size={buttonSize}
            variant={buttonVariant}>
                {button}
            </Button> 

            <PopoverPanel
            ref={floating}
            css={{
                transformOrigin: Format.Map(origin, {
                    'top': '50% 100%',
                    'top-start': '0% 100%',
                    'top-end': '100% 100%',
                    'bottom': '50% 0',
                    'bottom-start': '0 0',
                    'bottom-end': '100% 0',
                }),
                top: y ?? '',
          left: x ?? '',
            }}
            visible={visible}>
                {children}
            </PopoverPanel>
        </PopoverElement>
    )
}

export default PopoverWrapper