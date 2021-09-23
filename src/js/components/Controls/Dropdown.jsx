import React, {useState} from 'react'

import Icon from '../Icon'

const Dropdown = ({
	options,
	onChange = undefined,
	selected = null,
}) => {
	return(
		<div 
		className="
			blt-control__dropdown 

			bg-black-800
			rounded-lg
			text-black
			px-3
			relative
		">
			<select 
			className="
				appearance-none
				!bg-none
				!bg-transparent
				border-none
				font-medium
				rounded-none
				shadow-none
				h-6
				m-0
				min-w-0
				!p-0
				!pr-3.5
				relative
				text-md
				w-auto
				z-1
			"
			onChange={e => {
				onChange([e.target.value])
			}}
			value={selected}>

				{
					options.map(option => (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>

					))
				}
			</select>

			<div
			className="
				absolute
				right-3
				top-1/2
				transform
				-translate-y-1/2
				z-1
			">
				<Icon.ArrowDown color="#23282D" />
			</div>
		</div>
	)
}

export default Dropdown