import React, {useState} from 'react'
import classNames from 'classnames'
import update from 'immutability-helper'
import _get from 'lodash/get'

import {DndProvider, useDrag, useDrop} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'

import Color from '../Color'
import Icon from '../Icon'
import Table from '../Table'
import Item from '../Table/Item'

const DragHandle = ({
	id,
	handleDragging,
	moveItem,
	findItem,
}) => {
	const originalIndex = findItem(id).index

	const [{ isDragging }, drag] = useDrag({
	    item: { 
	    	type: 'blt-draghandle', 
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
	    accept: 'blt-draghandle',
	    canDrop: () => false,
	    hover({ id: draggedId }) {
	      	if (draggedId !== id) {
	        	const { index: overIndex } = findItem(id)
	        
	        	moveItem(draggedId, overIndex)
	      	}
	    },
	 })

	

  	const opacity = isDragging ? 0 : 1

	return(
		<span
			className={classNames(
				"blt-table__cell--draghandle"
			)}
			onMouseDown={() => {
				handleDragging(true)
			}}
			ref={(node) => drag(drop(node))}
			style={{
				opacity,
			}}
		>
			<Icon.DragHandle />
		</span>
	);
}

const ArrangeableTable = ({
	allowReset,
	columns,
	items,
	itemPadding,
	onChange,
	onReset,
	render,
	showHeader,
	style,
}) => {
	const [isDragging, setIsDragging] = useState(false)

    const moveItem = (id, atIndex) => {
		const { item, index } = findItem(id)
		
	    onChange(
	      	update(items, {
	        	$splice: [
	          		[index, 1],
	          		[atIndex, 0, item],
	        	],
	      	}),
	    )
	  }

    const findItem = (id) => {
	    const item = items.filter(i => `${i.id}` === id)[0]
	    return {
	      	item,
	      	index: items.indexOf(item),
	    }
	}

    const [, drop] = useDrop({ accept: 'blt-draghandle' })

	const columnsWithDragHandle = [{
		id: 'blt-draghandle',
		label: allowReset ? <Icon.Undo color={Color('Primary').fill()} /> : null,
		component: ({value, row}) => {
			return(
				<DragHandle 
					id={row.id}
					moveItem={moveItem}
					findItem={findItem}
					handleDragging={dragging => {
						setIsDragging(dragging ? row.id : false)
					}}
				/>
			)
		},
		onClick: () => {
			onReset()
		},
		width: '50px'
	}].concat(columns)

	return(
		<Table
		columns={columnsWithDragHandle}
		ref={drop}
		items={items}
		itemPadding={itemPadding}
		render={(items, gridTracks) => {
			return items.map(item => (
				<div
				className={`
					duration-200

					${isDragging === item.id ? 'bg-black-800 bg-opacity-50' : 'bg-transparent'}
				`}
				key={item.id}>
					<ul 
					className={classNames("blt-table__item", [item.classNames])}
					style={{
						gridTemplateColumns: gridTracks,
					}}>
						{
							columnsWithDragHandle.map(column => 
								<li
									key={column.id} 
									className={
										classNames(
											"blt-table__cell", 
											[
												`blt-table__column--${column.id}`, 
												`blt-table__column--align-${_get(column, 'align', 'left')}`
											],
											{
												"important" : column.style == 'important'
											}
										)
									}
								>
									<Item 
									component={_get(column, 'component', false)}
									item={item}
									onClick={_get(column, 'onClick', undefined)}
									value={item[column.id]} />
								</li>
							)
						}
					</ul>
				</div>
			))
		}}
		showHeader={showHeader}
		style={style} />
	)
}

const component = ({
	allowReset = true,
	className = [],
	columns = [],
	items = [],
	itemPadding = true,
	onChange = undefined, 
	onReset = undefined,
	render = undefined,
	showHeader = true,
	style,
}) => {
	return(
		<DndProvider backend={HTML5Backend}>
			<ArrangeableTable 
			allowReset={allowReset}
			columns={columns}
			items={items}
			itemPadding={itemPadding}
			onChange={onChange}
			onReset={onReset}
			render={render}
			showHeader={showHeader}
			style={style} />
		</DndProvider>
	)
}

export default component