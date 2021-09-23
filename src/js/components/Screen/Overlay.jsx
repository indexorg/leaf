import React from 'react'
import PropTypes from 'prop-types'

import { Dialog, Transition } from "@headlessui/react"


const ScreenOverlay = ({
    children = null,
    handleClose,
    isVisible = false,
}) => (
    <Transition 
    show={isVisible} 
    as={React.Fragment}
    enter="transition-opacity duration-300"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave="transition-opacity duration-150"
    leaveFrom="opacity-100"
    leaveTo="opacity-0">
        <Dialog 
        open={isVisible} 
        onClose={handleClose}
        static
        className="
            bottom-0
            fixed 
            flex
            items-center
            justify-center
            left-40
            right-0
            top-8
            overflow-y-auto
            z-100 
        ">
            <Dialog.Overlay 
            className="
                fixed
                bg-black-800 
                bg-opacity-50
                inset-0
                -z-1
            " />

            {children}
        </Dialog>
    </Transition>
)

{/* <Overlay
animation={{
    duration: .5,
    ease: 'cubic-bezier(0.25, 1, 0.5, 1)'
}}
background={Color('Background').opacity(.7)}
edges={{
    top: 0,
    leading: 0,
    trailing: 0
}}
frame={{
    height: '100vh',
    width: 'fill'
}}
offset={{
    y: isVisible ? 0 : 20,
}}
opacity={isVisible ? 1 : 0}
position="absolute"
zIndex={10000}>
    {isVisible &&
        <YStack
        frame={{
            height: 'fill',
            width: 'fill'
        }}>
            {children}
        </YStack>
    }
</Overlay> */}

export default ScreenOverlay

ScreenOverlay.propTypes = {
    children: PropTypes.any,
    handleClose: PropTypes.func.isRequired,
    isVisible: PropTypes.bool.isRequired,
}