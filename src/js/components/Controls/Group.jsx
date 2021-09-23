import React from 'react'

const Group = ({
	children,
}) => {
	const returnChildren = children => {
		if(children.length) {
			return children.map((child, index) => (
				<div
				className="py-1" 
				key={index}>
					{child}
				</div>
			))
		} else {
			return(
				<div
				className="py-1">
					{children}
				</div>
			)
		}
	}

	return(
		<div 
		className="
			h-full
			flex
			flex-col
			w-full
		">
			{returnChildren(children)}
		</div>
	)
}

export default Group