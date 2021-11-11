import React from 'react'

// Components
import Transition from '@components/Transition'
import {Format}  from '@components/FormattedTo'

// Styles
import {
    PopoverElement,
    PopoverPanel,
    PopoverButton,
} from './Popover.styles.js'

const PopoverWrapper = ({ 
    button = null,
    buttonVariant = 'normal',
    buttonSize = 'normal',
    css = {},
    origin = 'top-left',
    children = null,
}) => {
    return (
        <PopoverElement
        css={css}>
            {({ open }) => {
                return (
                    <>
                        <PopoverButton
                        size={buttonSize}
                        variant={buttonVariant}>
                            {button}
                        </PopoverButton>

                        <Transition
                        show={open}
                        styles={{
                            position: 'relative',
                        }}
                        enter="all .3s ease"
                        leave="all .2s ease"
                        enterFrom={{
                            opacity: 0,
                            transform: 'translateY(4px) scale(.75)',
                            top: '100%',
                            width: '100%',
                            zIndex: 100,
                            transformOrigin: Format.Map(origin, {
                                                'center': '50% 50%',
                                                'left': '0 50%',
                                                'right': '100% 50%',
                                                'bottom': '50% 100%',
                                                'top': '50% 0',
                                                'bottom-left': '0% 100%',
                                                'top-left': '0 0',
                                                'bottom-right': '100% 10%',
                                                'top-right': '100% 0',
                                            })
                        }}
                        enterTo={{
                            opacity: 1,
                            transform: 'translateY(0) scale(1)'
                        }}
                        leaveTo={{
                            opacity: 0,
                            transform: 'translateY(4px) scale(.75)'
                        }}>
                            {({
                                css,
                                show,
                            }) => 
                                <PopoverPanel
                                css={css}>
                                    {children}
                                </PopoverPanel>
                            }
                        </Transition>
                    </>
                )
            }}
        </PopoverElement>
    )
}

export default PopoverWrapper