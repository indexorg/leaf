import React from 'react'

// Contexts
import { TableContext } from '@utils/contexts/table.context.js'

// Styles
import { Element } from './Table.styles.js'

export const Render = React.forwardRef(
    ({
        children, 
        css = {},
    }, ref) => (
        <TableContext.Consumer>
            {
                ({ source }) => (
                    <Element
                    ref={ref}
                    css={css}>
                        {children(source)}
                    </Element>
                )
            }
        </TableContext.Consumer>
    )
)
