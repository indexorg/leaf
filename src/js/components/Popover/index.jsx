import React from "react"
import { Popover as HeadlessPopover, Transition } from "@headlessui/react"

import {Format} from '../FormattedTo'

const Popover = ({ 
    button = null,
    origin = 'top-left',
    children = null,
}) => {
    return (
        <HeadlessPopover 
        className="relative">
            {({ open }) => {
                return (
                    <>
                        <HeadlessPopover.Button
                        className="
                            appearance-none
                            transition-none

                            focus:outline-none
                            focus-visible:opacity-50
                        ">
                            {button}
                        </HeadlessPopover.Button>

                        <Transition
                        show={open}
                        as="div"
                        className={`
                            top-full
                            relative
                            z-100

                            ${
                                Format.Map(origin, {
                                    'center': 'origin-center',
                                    'left': 'origin-left',
                                    'right': 'origin-right',
                                    'bottom': 'origin-bottom',
                                    'top': 'origin-top',
                                    'bottom-left': 'origin-bottom-left',
                                    'top-left': 'origin-top-left',
                                    'bottom-right': 'origin-bottom-right',
                                    'top-right': 'origin-top-right',
                                })
                            }
                        `}
                        enter="transform transition ease-out-quint duration-300"
                        enterFrom="opacity-0 translate-y-1 scale-75"
                        enterTo="opacity-100 translate-y-0 scale-100"
                        leave="transform transition ease-in-quint duration-150"
                        leaveFrom="opacity-100 translate-y-0 scale-100"
                        leaveTo="opacity-0 translate-y-1 scale-75">
                            <HeadlessPopover.Panel
                            static
                            className="
                                absolute 
                                bg-white
                                p-4
                                right-0
                                top-2
                                rounded-lg
                                shadow-md
                            ">
                                {children}
                            </HeadlessPopover.Panel>
                        </Transition>
                    </>
                )
            }}
        </HeadlessPopover>
    )
}

export default Popover
