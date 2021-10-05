import {styled} from '@config/stitches';

export const Label = styled('label', {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'inline-flex',
    gap: '$2',
    transition: 'colors .1s ease',
})

export const Button = styled('span', {
    appearance: 'none',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    alignItems: 'center',
    margin: 0,
    padding: 0,
    position: 'relative',
    transform: 'translate3d(0,0,0)'
});

export const Ring = styled('span', {
    border: '1.5px solid $black900',
    borderRadius: '$full',
    transition: 'opacity 125ms ease',
    position: 'absolute',
    inset: -1,
    
    variants: {
        checked: {
            true: {
                opacity: 1,
            },
            false: {
                opacity: 0,
            }
        }
    }
});

export const State = styled('span', {
    backgroundColor: '$black900',
    borderRadius: '$full',
    position: 'absolute',
    transition: 'opacity 125ms ease',
    inset: 2,
    
    variants: {
        checked: {
            true: {
                opacity: 1,
            },
            false: {
                opacity: 0,
            }
        }
    }
})

export const Input = styled('input', {
    appearance: 'none',
    background: 'transparent',
    border: 'none',
    height: '$full',
    left: 0,
    margin: 0,
    padding: 0,
    position: 'absolute',
    top: 0,
    width: '$full',
})