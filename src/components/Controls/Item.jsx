import React from 'react'

const Item = ({
	label,
	control,
	onChange,
	value,
}) => {
	return(
		<div
		className="
			flex
			items-center
		">
			<label
			className="
				font-medium
				leading-snug
				mr-auto
				text-black
				text-md
			">
				{label}
			</label>
			
			{ 
				control &&

				<div>
					{
						React.createElement(
							control, 
							{
								onChange,
								value,
							}
						)
					}
				</div>
			}
		</div>
	)
}

export default Item