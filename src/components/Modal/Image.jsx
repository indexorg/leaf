import React, {useState} from 'react'

import ModalWrapper from '../Modal/Wrapper'

const ModalImage = ({
	isVisible = false,
	parent = null,
	value = '',
}) => {
	const [position, setPosition] = useState('top')
	
	return(
		<ModalWrapper 
		isVisible={isVisible} 
		parent={parent}
		setPosition={position => {
			setPosition(position)
		}}>
			<div 
			className="
				h-48
				w-48
				relative 
				-left-16
			">
				<div 
				className={`
					absolute
					bg-white
					h-5
					left-1/2
					rotate-45
					rounded-sm
					transform
					-translate-x-1/2
					w-5
					z-10

					${position == 'bottom' ? '-bottom-1' : '-top-1'}
				`}>
				</div>

				<img 
				className={`
					border-5
					border-white
					block
					h-full
					relative
					object-cover
					rounded-full
					shadow-lg
					w-full
					z-20
				`}
				src={value} />
			</div>
		</ModalWrapper>
	)
}


export default ModalImage