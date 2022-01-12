import React from 'react'

// Components
import { RowWithDrop } from './RowWithDrop'

// Contexts
import { TableContext } from '@utils/contexts/table.context.js'


export const Row = ({ 
    children,
    id,
}) => (
    <TableContext.Consumer>
        {
            ({
                dragging,
                findItem,
                moveItem,
                track,
            }) => (
                <RowWithDrop
                id={id}
                findItem={findItem}
                moveItem={moveItem}
                dragging={id === dragging}
                css={{
                    gridTemplateColumns: track
                }}>
                    {children}
                </RowWithDrop>
            )
        }
    </TableContext.Consumer>
)