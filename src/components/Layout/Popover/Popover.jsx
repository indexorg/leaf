import React, {useEffect, useRef, useState} from 'react'
import {useFloating, flip, shift, offset, getScrollParents} from '@floating-ui/react-dom'

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
    origin = 'bottom-start',
    children = null,
}) => {
    const [visible, setVisible] = useState()
    const popoverRef = useRef()

    const {
        x, 
        y, 
        reference, 
        floating,
        update,
        refs,
        placement,
    } = useFloating({
        placement: origin,
        middleware: [flip(), shift(), offset(12)],
    })
    useEffect(() => {
        document.addEventListener('click', checkClickInside)

        return () => {
            document.removeEventListener('click', checkClickInside)
        }
    }, [])

    useEffect(() => {
        if (!refs.reference.current || !refs.floating.current) {
          return;
        }
        const parents = [
          ...getScrollParents(refs.reference.current),
          ...getScrollParents(refs.floating.current),
        ];
        parents.forEach((parent) => {
          parent.addEventListener('scroll', update);
          parent.addEventListener('resize', update);
        });
        return () => {
          parents.forEach((parent) => {
            parent.removeEventListener('scroll', update);
            parent.removeEventListener('resize', update);
          });
        };
      }, [refs.reference, refs.floating, update])

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
                transformOrigin: Format.Map(placement, {
                    'top': '50% 100%',
                    'top-start': '0% 100%',
                    'top-end': '100% 100%',
                    'bottom': '50% 0%',
                    'bottom-start': '0% 0%',
                    'bottom-end': '100% 0%',
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