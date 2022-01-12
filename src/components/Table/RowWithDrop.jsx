import React from 'react'
import { useDrop } from 'react-dnd'

// Contexts
import { TableConstants } from '@utils/contexts/table.context.js'

// Styles
import { Row } from './Table.styles.js'

export const RowWithDrop = ({
    children,
    css,
    dragging,
    id,
    findItem,
    moveItem,
}) => {
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
        <Row
        css={css}
        dragging={dragging}
        ref={drop}>
            {children}
        </Row>
    )
}