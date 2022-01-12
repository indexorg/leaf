import {styled} from '@config/stitches';

export const Element = styled('img', {
    objectFit: 'cover',
    display: 'block',
    height: 'auto',
    width: '100%',
    variants: {
        size: {
            icon: {
                maxWidth: '$8',
            },
            tiny: {
                maxWidth: '$12',
            },
            small: {
                maxWidth: '$16',
            },
            medium: {
                maxWidth: '$32',
            },
            large: {
                maxWidth: '$48',
            },
            xlarge: {
                maxWidth: '$96',
            }
        },
        ratio: {
            square: {
                aspectRatio: 1,
            },
            portrait: {
                aspectRatio: 3/4,
            },
            landscape: {
                aspectRatio: 16/9,
            }
        },
        fit: {
            contain: {
                objectFit: 'contain',
            }
        },
        image_style: {
            raised: {
                border: '2px solid $black000',
                boxShadow: '$card'
            },
        },
        rounded: {
            true: {
                borderRadius: '$full'
            }
        }
    }
})