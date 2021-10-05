import { createStitches } from '@stitches/react';

import ColorWithOpacity from '../components/FormattedTo/ColorWithOpacity'


const spaces = {
    0: '0',
    '0-5': '.125rem',
    1: '.25rem',
    '1-5': '.375rem',
    2: '.5rem',
    '2-5': '.675rem',
    3: '.75rem',
    '3-5': '.875rem',
    4: '1rem',
    '4-5': '1.125rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    11: '2.75rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    56: '14rem',
    64: '16rem',
    72: '18rem',
    96: '24rem'
}

export const { 
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config,
} = createStitches({
    theme: {
        colors: {
            white: '#fff',
            black: '#000',
            black900: '#23282D',
            black600: '#737578',
            black310: '#D3D7DA',
            black300: '#D9DDDF',
            black100: '#F0F1F2',
            primary400: '#2271B1',
            warning400: '#d63638',
        },
        space: spaces,
        fontSizes: {
            text900: '2rem',
            text800: '1.5rem',
            text700: '1.25rem',
            text600: '1.0625rem',
            text500: '1rem',
            text400: '0.9375rem',
            text300: '0.875rem',
            text200: '.75rem',
            text100: '.625rem',
        },
        fonts: {
            body: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif",
        },
        lineHeights: {
            none: 1,
            tight: 1.25,
            snug: 1.35,
            normal: 1.5,
            loose: 1.65,
            looser: 2
        },
        letterSpacings: {
            none: 0,
            tight: '-0.025em',
            snug: '-0.0125em',
            loose: '0.025em',
            wide: '0.05em',
            wider: '0.075em',
        },
        sizes: {
            ...spaces,
            sm: '20rem',
            md: '28rem',
            lg: '36rem',
            xl: '40rem',
            '2xl': '48rem',
            '3xl': '56rem',
            '4xl': '64rem',
            '5xl': '72rem',
            '6xl': '80rem',
            full: '100%',
        },
        borderWidths: {},
        borderStyles: {},
        radii: {
            sm: '0.25rem',
            md: '0.5rem',
            lg: '0.75rem',
            xl: '1rem',
            '2xl': '1.25rem',
            '3xl': '1.5rem',
            '4xl': '1.75rem',
            '5xl': '2rem',
        },
        shadows: {
            card: "0px 10px 32px -4px rgba(35, 40, 45, 0.1), 0px 6px 14px -6px rgba(35, 40, 45, 0.12)",
            "lg-above": "0 -8px 15px -2px rgba(0, 0, 0, 0.06), 0 -4px 6px -1px rgba(0, 0, 0, 0.03)",
            shallow: "0px 4px 4px -2px rgba(24, 39, 75, 0.08), 0px 2px 4px -2px rgba(24, 39, 75, 0.12)",
        },
        zIndices: {
            "-1": -1,
            100: 100,
            1001: 1001,
        },
        transitions: {

        },
    },
    media: {
        sm: '(min-width: 640px)',
        md: '(min-width: 768px)',
        lg: '(min-width: 1024px)',
        xl: '(min-width: 1280px)',
        '2xl': '(min-width: 1536px)',
    },
    utils: {
        fill: (value) => ({ width: '100vw', height: '100vh' }),
        marginX: (value) => ({ marginLeft: value, marginRight: value }),
        marginY: (value) => ({ marginTop: value, marginBottom: value }),
        paddingX: (value) => ({ paddingLeft: value, paddingRight: value }),
        paddingY: (value) => ({ paddingTop: value, paddingBottom: value }),
        reset: (value) => ({ margin: 0, padding: 0, boxSizing: 'border-box'}),
        backgroundColorRGBA: value => {
            const colors = value.split('|')

            console.log(colors)

            return {
                backgroundColor: ColorWithOpacity(colors[0], colors[1])
            }
        }
    },
})