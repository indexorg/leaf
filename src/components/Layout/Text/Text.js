import { 
    styled
} from '@config/stitches';

/*
    Accepts:
    as (span)
    size (body)
    weight (null)
    leading (null)
    tracking (null)
    css object with stitch values
    syntheticEvent
*/
const Text = styled('span', {
    display: 'block',
    fontFamily: '$body',
    variants: {
        size: {
            title: {
                fontSize: '$text900',
                fontWeight: 700,
                letterSpacing: '$snug', 
                lineHeight: '$none',
            },
            heading: {
                fontSize: '$text800',
                fontWeight: 700,
                letterSpacing: '$snug', 
                lineHeight: '$tight',
            },
            subheading: {
                fontSize: '$text700',
                fontWeight: 500,
                lineHeight: '$tight',
            },
            body: {
                fontSize: '$text500',
                fontWeight: 400,
                lineHeight: '$snug',
            },
            label: {
                fontSize: '$text300',
                fontWeight: 500
            },
            footnote: {
                fontSize: '$text200',
                fontWeight: 500
            },
        },
        weight: {
            black: {
                fontWeight: 900,
            },
            bold: {
                fontWeight: 700,
            },
            semibold: {
                fontWeight: 600,
            },
            medium: {
                fontWeight: 500,
            },
            regular: {
                fontWeight: 400,
            },
            light: {
                fontWeight: 300,
            },
        },
        leading: {
            none: {
                lineHeight: '$none', 
            },
            tight: {
                lineHeight: '$tight', 
            },
            snug: {
                lineHeight: '$snug', 
            },
            normal: {
                lineHeight: '$normal', 
            },
            loose: {
                lineHeight: '$loose', 
            },
            looser: {
                lineHeight: '$looser', 
            },
        },
        tracking: {
            none: {
                letterSpacing: '$none', 
            },
            tight: {
                letterSpacing: '$tight', 
            },
            snug: {
                letterSpacing: '$snug', 
            },
            loose: {
                letterSpacing: '$loose', 
            },
            wide: {
                letterSpacing: '$wide', 
            },
            wider: {
                letterSpacing: '$wider', 
            },
        }
    }
})

export default Text