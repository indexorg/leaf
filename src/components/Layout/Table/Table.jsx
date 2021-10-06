import React from 'react'
import _get from 'lodash/get'

// Contexts
import {TableContext} from '@utils/contexts/table.context.js'

// Components
import Text from '@components/Text' 

// Styles
import {
    Element,
    HeaderColumn,
    HeaderRow,
    Row,
    RowColumn,
} from './Table.styles.js'

export const TableHeader = () => (
    <TableContext.Consumer>
        {
            ({
                columns, 
                track
            }) => (
                <HeaderRow
                css={{
                    gridTemplateColumns: track
                }}>
                    {
                        columns.map(column => 
                            <HeaderColumn 
                            key={column.id}
                            onClick={e => {
                                'onClick' in column && column.onClick()
                            }}
                            align={_get(column, 'align', 'leading')}>
                                <Text
                                size="label">
                                    {column.name}
                                </Text>
                            </HeaderColumn>
                        )
                    }
                </HeaderRow>
            )
        }
    </TableContext.Consumer>
)

export const TableRow = ({ row }) => (
    <TableContext.Consumer>
        {
            ({
                columns, 
                track
            }) => (
                <Row
                css={{
                    gridTemplateColumns: track
                }}>
                    {columns.map(column => 
                        <RowColumn
                        align={_get(column, 'align', 'leading')}>
                            <Text
                            size="body">
                                {row[column.id]}
                            </Text>
                        </RowColumn>
                    )}
                </Row>
            )
        }
    </TableContext.Consumer>
)

export const RenderTable = React.forwardRef(
    ({
        children, 
        css = {}, 
    }, ref) => (
    <TableContext.Consumer>
        {
            ({
                source,
            }) => (
                <Element
                ref={ref}
                css={css}>
                    {
                        children(source)
                    }
                </Element>
            )
        }
    </TableContext.Consumer>
))