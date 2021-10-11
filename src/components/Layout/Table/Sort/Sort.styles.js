import { styled } from '@config/stitches'

import {
    HeaderColumn,
} from '@components/Layout/Table/Table.styles.js'

export const SortHeaderColumn = styled(HeaderColumn, {
    variants: {
        sortable: {
            true: {
                cursor: 'pointer'
            }
        }
    }
})

export const SortIcon = styled('div', {
    opacity: 0,
    margin: '0 0 0 auto',
    transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
    transform: 'rotate(180deg)',
    visibility: 'hidden',

    variants: {
        visible: {
            true: {
                opacity: 1,
                visibility: 'visible'
            }
        },
        direction: {
            desc: {
                transform: 'rotate(0deg)'
            }
        }
    }
})