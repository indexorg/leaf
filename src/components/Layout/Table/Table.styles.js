import { styled } from '@config/stitches'

export const Element = styled('div', {

})

export const HeaderRow = styled('div', {
    display: 'grid',
})

export const HeaderColumn = styled('div', {
    alignItems: 'center',
    backgroundColor: '$black300',
    display: 'flex',
    height: '$10',
    margin: 0,
    padding: '0 $3',
    position: 'relative',
    textTransform: 'capitalize',
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
    }
})

export const Row = styled('div', {
    display: 'grid',
})

export const RowColumn = styled('div', {
    alignItems: 'center',
    borderBottom: '1px solid $black300',
    display: 'flex',
    height: '$10',
    margin: 0,
    padding: '0 $3',
    position: 'relative',
    textTransform: 'capitalize',
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
    }
})