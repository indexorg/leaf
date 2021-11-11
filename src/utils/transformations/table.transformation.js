
import {
    TableConstants,
} from '@utils/contexts/table.context.js'

export const getTrack = (track, columns) => {
    if(track) {
        if(track.length === columns.length) {
            return track.join(' ')
        }
    }
    
    return columns.map(c => {
        if(c.id === TableConstants.DELETE_COLUMN_ID) {
            return '40px'
        }

        if(c.id === TableConstants.REORDER_COLUMN_ID) {
            return '50px'
        }

        return '1fr'
    }).join(' ')
}