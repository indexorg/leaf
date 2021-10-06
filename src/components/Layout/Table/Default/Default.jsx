import React from 'react'
import {TableContext} from '@utils/contexts/table.context.js'
import {getTrack} from '@utils/transformations/table.transformation.js'

import {RenderTable} from '@components/Layout/Table/Table'

const Table = ({
    children,
	css = {},
	columns = [],
	source = [],
    track = null,
}) => {
	return(
        <TableContext.Provider
        value={{
            columns,
            source,
            track: getTrack(track, columns)
        }}>
            <RenderTable
            css={css}>
                {children}
            </RenderTable>
        </TableContext.Provider>
	)
}

export default Table