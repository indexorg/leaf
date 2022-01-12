import React, {useState} from 'react'
import update from 'immutability-helper'
import _get from 'lodash/get'
import {getTrack} from '@utils/transformations/table.transformation.js'
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'

// Components
import { DragHandle } from './DragHandle'
import { Render } from './Render'

// Contexts
import {
    TableConstants,
    TableContext
} from '@utils/contexts/table.context.js'

// Styles
import {
    DeleteButton,
} from './Table.styles.js'


export const Provider = ({
    children,
	css = {},
	columns = [],
    onDelete = undefined,
    onOrder = undefined,
    source = [],
    track = null,
}) => {
    const [isDragging, setIsDragging] = useState(false)

    const moveItem = (id, atIndex) => {
		const { 
            row, 
            index 
        } = findItem(id)
		
	    onOrder(
	      	update(source, {
	        	$splice: [
	          		[index, 1],
	          		[atIndex, 0, row],
	        	],
	      	}).map(item => item.id),
	    )
	}

    const findItem = (id) => {
	    const row = source.filter(i => i.id === id)[0]
        
	    return {
	      	row,
	      	index: source.indexOf(row),
	    }
	}

    let mapped_columns = columns
    let mapped_track = track

    if(onDelete !== undefined) {
        mapped_columns = mapped_columns.concat([{
            id: TableConstants.DELETE_COLUMN_ID
        }])
        
        if(mapped_track !== null) {
            mapped_track = mapped_track.concat(['20px'])
        }
    }
    
    if(onOrder !== undefined) {
        mapped_columns = [{
            id:  TableConstants.REORDER_COLUMN_ID,
        }].concat(mapped_columns)

        if(mapped_track !== null) {
            mapped_track = ['50px'].concat(mapped_track)
        }
    }

	return(
        <TableContext.Provider
        value={{
            columns: mapped_columns,
            source: source.map(item => {
                return {
                    id: item.id,
                    values: mapped_columns.map(c => {
                        if(c.id === TableConstants.DELETE_COLUMN_ID) {
                            return(
                                <DeleteButton
                                onClick={() => onDelete(item.id)}>
                                    <svg 
                                    width="10" 
                                    height="10"
                                    viewBox="0 0 10 10">
                                        <path 
                                        fillRule="evenodd" 
                                        clipRule="evenodd" 
                                        d="M0.46967 0.46967C0.762563 0.176777 1.23744 0.176777 1.53033 0.46967L5 3.93934L8.46967 0.46967C8.76256 0.176777 9.23744 0.176777 9.53033 0.46967C9.82322 0.762563 9.82322 1.23744 9.53033 1.53033L6.06066 5L9.53033 8.46967C9.82322 8.76256 9.82322 9.23744 9.53033 9.53033C9.23744 9.82322 8.76256 9.82322 8.46967 9.53033L5 6.06066L1.53033 9.53033C1.23744 9.82322 0.762563 9.82322 0.46967 9.53033C0.176777 9.23744 0.176777 8.76256 0.46967 8.46967L3.93934 5L0.46967 1.53033C0.176777 1.23744 0.176777 0.762563 0.46967 0.46967Z" 
                                        fill="#EB5757" />
                                    </svg>
                                </DeleteButton>
                            )
                        }

                        if(c.id === TableConstants.REORDER_COLUMN_ID) {
                            return(
                                <DragHandle 
                                id={item.id}
                                moveItem={moveItem}
                                findItem={findItem}
                                handleDragging={dragging => {
                                    setIsDragging(dragging ? item.id : false)
                                }} />
                            )
                        }

                        return _get(item, c.id, '')
                    })
                }
            }),
            findItem,
            moveItem,
            track: getTrack(mapped_track, mapped_columns),
            dragging: isDragging,
        }}>
            <DndProvider 
            backend={HTML5Backend}>
                <Render
                css={css}>
                    {children}
                </Render>
            </DndProvider>
        </TableContext.Provider>
	)
}