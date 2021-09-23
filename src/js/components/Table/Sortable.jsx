import React from 'react'
import _get from 'lodash/get'
import classNames from 'classnames'

import Color from '../Color'
import Icon from '../Icon'
import Table from '../Table'

const getArrow = allowSorting => {
	if(allowSorting) {
		return(
			<div className="blt-table__sort-arrow">
				<Icon.ArrowDetailedSmall color={Color('Primary').fill()} />
			</div>
		)
	}

	return null
}

const getLabel = label => {
	if(label) {
		if(typeof label == 'function') {
			return label()
		}
		
		return(
			<span>{label}</span>
		)
	}

	return null
}

const SortableTable = ({
	className = [],
	columns = [],
	disabled = false,
	items = [],
	itemPadding = true,
	onSort = undefined, 
	orderby = [],
	order = ['desc'],
	render = undefined,
	style,
}) => {
	return(
		<Table
		className={className.concat(["blt-table-with-sorting"])}
		columns={
			columns.map(c => {
				const isSortable = !disabled && _get(c, 'allowSorting', true)
				return ({
					...c,
					className: classNames({
						...c.className,
						'isSorted': orderby[0] == c.id,
						'allowSorting': isSortable,
						'isDesc': order[0] == 'desc'
					}),
					onClick: () => {
						(onSort && isSortable) && onSort(c)
					},
					label: <React.Fragment>
								{getLabel(_get(c, 'label', false))}

								{getArrow(_get(c, 'allowSorting', true))}
							</React.Fragment>
				})
			})
		}
		items={items}
		itemPadding={itemPadding}
		render={render}
		showHeader={true}
		style={style} />
	)
}

export default SortableTable