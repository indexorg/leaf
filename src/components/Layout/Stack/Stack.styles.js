import { styled } from '@config/stitches';

export const Element = styled('div', {
    display: 'flex',
    variants: {
        direction: {
            horizontal: {
                flexDirection: 'row',
            },
            vertical: {
                flexDirection: 'column',
            }
        },
        align: {}
    },
    compoundVariants: [
        {
            direction: 'horizontal',
            align: 'center',
            css: {
                justifyContent: 'center'
            }
        },
        {
            direction: 'vertical',
            align: 'center',
            css: {
                alignItems: 'center'
            }
        },
        {
            direction: 'vertical',
            align: 'leading',
            css: {
                alignItems: 'flex-start'
            }
        },
        {
            direction: 'vertical',
            align: 'trailing',
            css: {
                alignItems: 'flex-end'
            }
        }
    ],
    defaultVariants: {
        align: 'center'
    }
})