import React from 'react'
import _get from 'lodash/get'

// Utils
import {TableContext} from '@utils/contexts/table.context.js'
import {getTrack} from '@utils/transformations/table.transformation.js'

// Components
import {ArrowDetailedSmall} from '@components/Icon'
import {RenderTable} from '@components/Layout/Table/Table'
import Text from '@components/Text' 

// Styles
import {
    HeaderRow,
} from '@components/Layout/Table/Table.styles.js'

import {
    SortHeaderColumn,
    SortIcon
} from './Sort.styles.js'

export const SortTableHeader = () => (
    <TableContext.Consumer>
        {
            ({
                columns, 
                sortDirection,
                track
            }) => (
                <HeaderRow
                css={{
                    gridTemplateColumns: track
                }}>
                    {
                        columns.map(column => {
                            return(
                                <SortHeaderColumn 
                                key={column.id}
                                sortable={column.sortable}
                                onClick={() => column.onClick()}>
                                    <Text
                                    size="label">
                                        {column.name}
                                    </Text>

                                    {
                                        column.sortable &&

                                        <SortIcon
                                        direction={sortDirection}
                                        visible={column.active}>
                                            <ArrowDetailedSmall 
                                            color="#2271B1" />
                                        </SortIcon>
                                    }
                                </SortHeaderColumn>
                            )
                        })
                    }
                </HeaderRow>
            )
        }
    </TableContext.Consumer>
)

const SortTable = ({
    children,
	css = {},
	columns = [],
    direction = 'asc',
    disableSorting = false,
    onSort = undefined,
    sortBy = null,
	source = [],
    track = null,
}) => {
    const modified_columns = columns.map(column => {
        const sortable = !disableSorting && _get(column, 'sortable', true)
        
        return ({
            ...column,
            sortable,
            active: sortBy === column.id ? true : false,
            onClick: () => {
                (onSort && sortable) && onSort(column.id)
            },
        })
    })

	return(
        <TableContext.Provider
        value={{
            columns: modified_columns,
            sortDirection: direction,
            source,
            track: getTrack(track, modified_columns)
        }}>
            <RenderTable
            css={css}>
                {children}
            </RenderTable>
        </TableContext.Provider>
	)
}

export default SortTable