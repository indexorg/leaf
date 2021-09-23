import React from 'react'
import { Transition, Popover } from '@headlessui/react'
import ModalWrapper from '../Modal/Wrapper'

const Modal = ({ children, isVisible = false, parent = null }) => {
    // <ModalWrapper
    // isVisible={isVisible}
    // parent={parent}>
    //     <div
    //     className="
    //         bg-white
    //         p-6
    //         rounded-xl
    //         shadow-lg
    //         text-black
    //     ">
    //         {children}
    //     </div>
    // </ModalWrapper>
    return (
        <Transition
            show={isVisible}
            as="div"
            className="
            relative
            z-10
        "
            enter="transform transition-all ease-out duration-200"
            enterFrom="opacity-0 translate-y-3"
            enterTo="opacity-100 translate-y-0"
            leave="transform transition-all ease-in duration-75"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-3"
        >
            <ModalWrapper isVisible={isVisible} parent={parent}>
                <Popover.Panel
                    static
                    className="
                        bg-white
                        p-6
                        rounded-xl
                        shadow-lg
                        text-black
                    "
                >
                    {children}
                </Popover.Panel>
            </ModalWrapper>
        </Transition>
    )
}

export default Modal
