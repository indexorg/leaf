import { styled } from '@config/stitches'

export const Element = styled('div', {

})

export const HeaderRow = styled('div', {
    display: 'grid'
})

export const HeaderColumn = styled('div', {
    alignItems: 'center',
    backgroundColor: '$black200',
    color: '$black600',
    display: 'flex',
    fontSize: '$text300',
    fontWeight: 500,
    height: '$10',
    margin: 0,
    padding: '0 $4',
    position: 'relative',
    textTransform: 'capitalize',
    transition: 'all 0.15s ease-in-out',
    zIndex: 1,

    '&:first-child': {
        borderRadius: '$md 0 0 $md',
    },

    '&:last-child': {
        borderRadius: '0 $md $md 0',
    },

    '& + div': {
        paddingLeft: 0
    },

    variants: {
        align: {
            leading: {
                justifyContent: 'flex-start'
            },
            center: {
                justifyContent: 'center'
            },
            trailing: {
                justifyContent: 'flex-end'
            }
        }
    },

    '.dark &': {
        backgroundColor: '$black100',
        color: '$black800',
    },
})

export const Row = styled('div', {
    display: 'grid',
    transition: 'background-color .1s ease',

    variants: {
        dragging: {
            true: {
                backgroundColor: '$black200'
            }
        }
    }
})

export const CellContents = styled('div', {
    alignItems: 'center',
    borderBottom: '1px solid $black200',
    display: 'flex',
    minHeight: '$10',
    margin: 0,
    leading: '$tight',
    padding: '$2 $4',
    position: 'relative',
    transition: 'all 0.15s ease-in-out',
    zIndex: 1,

    variants: {
        align: {
            leading: {
                justifyContent: 'flex-start'
            },
            center: {
                justifyContent: 'center'
            },
            trailing: {
                justifyContent: 'flex-end'
            }
        }
    },

    '& + div': {
        paddingLeft: 0
    }
})

export const DeleteButton = styled('button', {
    appearance: 'none',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    transition: 'all .1s ease',

    '&:hover': {
        opacity: .5,
    }
})

export const RankColumnHandle = styled('div', {
    cursor: 'grab',
    borderRadius: '$sm',
    padding: '$1',
    transition: 'all .1s ease',
    variants: {
        dragging: {
            true: {
                cursor: 'grabbing'
            }
        }
    },

    '&:hover': {
        backgroundColor: '$black200',
    },

    '& svg': {
        display: 'block'
    }
})