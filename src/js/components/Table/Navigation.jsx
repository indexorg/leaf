import React from 'react'

import Color from '../Color'
import Icon from '../Icon'
import Button from '../Layout/Button'
import Table from '../Table'

const NavigationTable = ({
	columns = [],
	items = [],
	onSelect = undefined,
}) => {
	return(
		<Table
		className={["blt-table-with-navigation"]}
		columns={
			columns.concat([
				{
					align: 'trailing',
					id: 'arrow',
					component: ({row}) => {
						return(
							<Button
							background={false}
							padding={false}
							icon={<Icon.ArrowRight color={Color('Primary').fill()} />}
							iconPosition="trailing"
							handleClick={() => {
								onSelect(row.id)
							}}>
								Customize
							</Button>
						)
					},
					width: '1fr'
				}
			])
		}
		items={items}
		itemPadding={false}
		showHeader={false} />
	)
}

export default NavigationTable