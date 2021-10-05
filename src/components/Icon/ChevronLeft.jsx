import React from 'react'
import classNames from 'classnames'

const ChevronLeft = ({
	className = [],
	size = 'small',
	color = 'black',
	title = false
}) => (
	<svg 
		className={classNames("blt-icon", className)}
		width="8" 
		height="14" 
		viewBox="0 0 8 14" 
		fill="none"
		style={{ display: 'block' }}
	>
		{title && <title>{title}</title>}
		
		<g style={{
			transform: 'rotateZ(180deg)',
			transformOrigin: '50% 50%',
		}}>
			<path fillRule="evenodd" clipRule="evenodd" d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L7.35355 6.64645C7.54882 6.84171 7.54882 7.15829 7.35355 7.35355L1.35355 13.3536C1.15829 13.5488 0.841709 13.5488 0.646447 13.3536C0.451184 13.1583 0.451184 12.8417 0.646447 12.6464L6.29289 7L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z" fill={color} />
		</g>
	</svg>
)

export default ChevronLeft