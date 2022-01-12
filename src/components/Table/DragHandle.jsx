import React from 'react'
import _get from 'lodash/get'
import {useDrag, useDrop} from 'react-dnd'

// Contexts
import {
    TableConstants,
} from '@utils/contexts/table.context.js'

// Styles
import {
    RankColumnHandle
} from './Table.styles.js'

export const DragHandle = ({
	id,
	handleDragging,
	moveItem,
	findItem,
}) => {
	const originalIndex = findItem(id).index

	const [{ isDragging }, drag] = useDrag({
        type: TableConstants.REORDER_COLUMN_ID, 
	    item: { 
	    	id, 
	    	originalIndex 
	    },
	    collect: (monitor) => ({
	      	isDragging: monitor.isDragging(),
	    }),
	    end: (dropResult, monitor) => {
	      	const { 
	      		id: droppedId, 
	      		originalIndex 
	      	} = monitor.getItem()
	      
	      	const didDrop = monitor.didDrop()
	      
	      	if(!didDrop) {
	        	moveItem(droppedId, originalIndex)
	      	} else {
				handleDragging(false)
			}
	    },
	})

	const [, drop] = useDrop({
	    accept: TableConstants.REORDER_COLUMN_ID,
	    hover({ id: draggedId }) {
            if (draggedId !== id) {
	        	const { index: overIndex } = findItem(id)
	        
	        	moveItem(draggedId, overIndex)
	      	}
	    },
	})

	return(
		<RankColumnHandle
        onMouseDown={() => {
            handleDragging(true)
        }}
        onMouseUp={() => {
            handleDragging(false)
        }}
        dragging={isDragging}
        ref={(node) => drag(drop(node))}>
			<svg 
            width="8" 
            height="13" 
            viewBox="0 0 8 13">
                <path 
                fillRule="evenodd" 
                clipRule="evenodd" 
                d="M1.5 3C2.32843 3 3 2.32843 3 1.5C3 0.671573 2.32843 0 1.5 0C0.671573 0 0 0.671573 0 1.5C0 2.32843 0.671573 3 1.5 3ZM1.5 8C2.32843 8 3 7.32843 3 6.5C3 5.67157 2.32843 5 1.5 5C0.671573 5 0 5.67157 0 6.5C0 7.32843 0.671573 8 1.5 8ZM3 11.5C3 12.3284 2.32843 13 1.5 13C0.671573 13 0 12.3284 0 11.5C0 10.6716 0.671573 10 1.5 10C2.32843 10 3 10.6716 3 11.5ZM6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8ZM8 1.5C8 2.32843 7.32843 3 6.5 3C5.67157 3 5 2.32843 5 1.5C5 0.671573 5.67157 0 6.5 0C7.32843 0 8 0.671573 8 1.5ZM6.5 13C7.32843 13 8 12.3284 8 11.5C8 10.6716 7.32843 10 6.5 10C5.67157 10 5 10.6716 5 11.5C5 12.3284 5.67157 13 6.5 13Z" 
                fill="#6F7F86" />
            </svg>
		</RankColumnHandle>
	);
}