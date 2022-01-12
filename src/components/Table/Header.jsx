import React from 'react'
import _get from 'lodash/get'

// Contexts
import {
    TableContext
} from '@utils/contexts/table.context.js'

// Styles
import {
    HeaderColumn,
    HeaderRow,
} from './Table.styles.js'

export const Header = () => (
    <TableContext.Consumer>
        {
            ({ columns, track }) => (
                <HeaderRow
                css={{
                    gridTemplateColumns: track
                }}>
                    {
                        columns.map(column => 
                            <HeaderColumn 
                            key={column.id}
                            onClick={() => {
                                'onClick' in column && column.onClick()
                            }}
                            align={_get(column, 'align', 'leading')}>
                                {column.name}
                            </HeaderColumn>
                        )
                    }
                </HeaderRow>
            )
        }
    </TableContext.Consumer>
)