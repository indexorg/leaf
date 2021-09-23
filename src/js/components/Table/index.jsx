import React from 'react'
import classNames from 'classnames'
import _get from 'lodash/get'

import Item from './Item'

const Table = React.forwardRef(({
	className = [],
	columns = [],
	items = [],
	itemPadding = true,
	render = undefined,
	showHeader = true,
	style = {},
}, ref) => {
	const gridTracks = columns.map(c => _get(c, 'width', '1fr')).join(' ')

	let mappedItems = items.map(item => (
							<ul 
							key={item.id}
							className={classNames("blt-table__item", [item.classNames])}
							style={{
								gridTemplateColumns: gridTracks
							}}>
								{
									columns.map(column => 
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
										}>
											<Item 
											component={_get(column, 'component', false)}
											item={item}
											key={item.id}
											onClick={_get(column, 'onClick', undefined)}
											value={item[column.id]} />
										</li>
									)
								}
							</ul>
						))

	if(render) {
		mappedItems = render(items, gridTracks, columns)
	}

	return(
		<div 
		className={classNames("blt-table", className, {
			"noPadding": !itemPadding
		})}
		style={style}
		ref={ref}>
			{
				showHeader &&
				
				<ul 
					className="blt-table__header"
					style={{
						gridTemplateColumns: gridTracks
					}}
				>
					{
						columns.map(c => 
							<li 
								key={c.id}
								className={classNames(
									[
										`blt-table__column-header--${c.id}`,
										`blt-table__column--align-${_get(c, 'align', 'left')}`
									],
									_get(c, 'className', '')

								)}
								onClick={() => {
									c.onClick && c.onClick()
								}}
							>
								{
									(typeof c.label == 'string') &&
									
									<span>{c.label}</span>
								}

								{
									(typeof c.label == 'object') &&
									
									c.label
								}
							</li>
						)
					}
				</ul>
			}

			{mappedItems}
		</div>
	)
})

export default Table