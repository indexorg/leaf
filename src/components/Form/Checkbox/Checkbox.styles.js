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
    display: 'grid',
    alignItems: 'center',
    margin: 0,
    padding: 0,
    position: 'relative',
    transform: 'translate3d(0,0,0)'
});

export const CheckboxState = styled('div', {
    transition: 'opacity 125ms ease',
    gridArea: '1/1/1/1',
    variants: {
        visible: {
            true: {
                opacity: 1,
            },
            false: {
                opacity: 0,
            }
        }
    }
});

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