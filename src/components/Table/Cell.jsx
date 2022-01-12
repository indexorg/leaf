import React from 'react'

// Styles
import {
    CellContents,
} from './Table.styles.js'

export const Cell = ({ 
    children 
}) => (
    <CellContents>
        {children}
    </CellContents>
)