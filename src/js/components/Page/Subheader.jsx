import React from 'react'

const Subheader = ({
	title,
	actions = []
}) => {
	const actionViews = actions.map((action, index) => <React.Fragment key={index}>{action}</React.Fragment>)

	return(
		<div
		className="
			flex
			pt-3
		">
			<h3 
			className="
				font-normal
				text-black
				text-opacity-70
				text-xl
			">
				{title}
			</h3>

			{actionViews.length > 0 && 
				<div
				className="
					flex
					ml-auto
				">
					{actionViews}
				</div>
			}
		</div>
	)
}

export default Subheader