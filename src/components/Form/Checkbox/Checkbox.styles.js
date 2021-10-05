import {styled} from '@config/stitches';

export const Button = styled('button', {
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
    transition: 'opacity 75ms ease',
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