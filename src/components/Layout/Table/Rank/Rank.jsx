import React, {useState} from 'react'
import _get from 'lodash/get'
import update from 'immutability-helper'
import {DndProvider, useDrag, useDrop} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'

// Utils
import {TableContext} from '@utils/contexts/table.context.js'
import {getTrack} from '@utils/transformations/table.transformation.js'

// Components
import {RenderTable} from '@components/Layout/Table/Table'
import {DragHandle} from '@components/Icon'



// Styles
import {
    RankColumnHandle,
} from './Rank.styles.js'

const DragHandleColumn = ({
	id,
	handleDragging,
	moveItem,
	findItem,
}) => {
	const originalIndex = findItem(id).index

	const [{ isDragging }, drag] = useDrag({
        type: 'leafdraghandle', 
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
	    accept: 'leafdraghandle',
	    canDrop: () => false,
	    hover({ id: draggedId }) {
	      	if (draggedId !== id) {
	        	const { index: overIndex } = findItem(id)
	        
	        	moveItem(draggedId, overIndex)
	      	}
	    },
	})

  	// const opacity = isDragging ? 0 : 1

	return(
		<RankColumnHandle
        onMouseDown={() => {
            handleDragging(true)
        }}
        dragging={isDragging}
        ref={(node) => drag(drop(node))}>
			<DragHandle
            color="#6F7F86" />
		</RankColumnHandle>
	);
}

const RenderRankTable = ({
    children,
	css = {},
	columns = [],
    onRank = undefined,
	source = [],
    track = null,
}) => {
    const [isDragging, setIsDragging] = useState(false)

    const moveItem = (id, atIndex) => {
		const { 
            row, 
            index 
        } = findItem(id)
		
	    onRank(
	      	update(source, {
	        	$splice: [
	          		[index, 1],
	          		[atIndex, 0, row],
	        	],
	      	}),
	    )
	}

    const findItem = (id) => {
	    const row = source.filter(i => i.id === id)[0]
        
	    return {
	      	row,
	      	index: source.indexOf(row),
	    }
	}

    const [, drop] = useDrop({ accept: 'leafdraghandle' })

    const modified_columns = [{
		id: 'leafdraghandle',
		label: null,
        align: 'center'
		// onClick: onReset,
	}].concat(columns)

    const modified_track = ['50px'].concat(track)

    const modified_source = source.map(row => {
        return ({
            leafdraghandle: <DragHandleColumn 
                                id={row.id}
                                moveItem={moveItem}
                                findItem={findItem}
                                handleDragging={dragging => {
                                    setIsDragging(dragging ? row.id : false)
                                }}
                            />,
            ...row
        })
    })

	return(
        <TableContext.Provider
        value={{
            columns: modified_columns,
            dragging: isDragging,
            source: modified_source,
            track: getTrack(modified_track, modified_columns)
        }}>
            <DndProvider 
            backend={HTML5Backend}>
                <RenderTable
                ref={drop}
                css={css}>
                    {children}
                </RenderTable>
            </DndProvider>
        </TableContext.Provider>
	)
}

const RankTable = (props) => (
    <DndProvider 
    backend={HTML5Backend}>
        <RenderRankTable {...props} />
    </DndProvider>
)

export default RankTable