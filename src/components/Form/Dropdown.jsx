import React from "react"

import Color from "../Color"
import Icon from "../Icon"

import { Popover, Transition } from "@headlessui/react"

const Dropdown = ({
	children,
	handleReset = undefined,
	label = null,
	placeholder,
}) => {
	return (
		<div
			className={`
			h-9
			relative
			w-full
		`}>
			<Popover className='relative'>
				{({ open }) => {
					return (
						<>
							<div className='relative'>
								<Popover.Button
									className={`
										bg-black-800 
										bg-opacity-50
										font-medium
										h-9
										px-3
										rounded-lg
										text-black
										text-left
										text-md
										${label ? "text-opacity-100" : "text-opacity-50"}
										w-full

										focus:outline-none
									`}>
									{label ? label : placeholder}
								</Popover.Button>

								{handleReset && !label && (
									<div
										className='
                                        absolute
                                        cursor-pointer
                                        flex
                                        h-full
                                        items-center
                                        pr-3
                                        right-0
                                        top-0
                                        w-7
                                    '>
										<svg
											width='15'
											height='8'
											viewBox='0 0 15 8'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												fillRule='evenodd'
												clipRule='evenodd'
												d='M0.96967 0.342229C1.26256 0.0493353 1.73744 0.0493353 2.03033 0.342229L7.5 5.8119L12.9697 0.342229C13.2626 0.0493353 13.7374 0.0493353 14.0303 0.342229C14.3232 0.635122 14.3232 1.11 14.0303 1.40289L7.5 7.93322L0.96967 1.40289C0.676777 1.11 0.676777 0.635122 0.96967 0.342229Z'
												className='fill-current'
											/>
										</svg>
									</div>
								)}

								{handleReset && label && (
									<div
										className='
										absolute
										cursor-pointer
										flex
										h-full
										items-center
										pr-3
										right-0
										top-0
										w-7
									'
										onClick={handleReset}>
										<Icon.Undo
											color={Color("Primary").fill()}
										/>
									</div>
								)}
							</div>

							<Transition
								show={open}
								as='div'
								className='
									absolute
									origin-top-center
									top-0
									w-full
									z-100
								'
								enter='transform transition ease-out-quint duration-300'
								enterFrom='opacity-0 translate-y-1 scale-75'
								enterTo='opacity-100 translate-y-0 scale-100'
								leave='transform transition ease-in-quint duration-150'
								leaveFrom='opacity-100 translate-y-0 scale-100'
								leaveTo='opacity-0 translate-y-1 scale-75'>
								<Popover.Panel
									static
									className='
										absolute 
										bg-white
										p-4.5
										rounded-lg
										shadow-lg
										w-full
									'>
									{children}
								</Popover.Panel>
							</Transition>
						</>
					)
				}}
			</Popover>
		</div>
	)
}

export default Dropdown
