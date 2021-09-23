import React from "react"
import { 
    styled
} from '../../config/stitches';

import Icon from "../Icon"

const Button = styled('button', {
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

const CheckboxState = styled('div', {
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

const Checkbox = ({
    color = "#000",
    selectedColor = '#000',
    checked = false,
    onClick = undefined,
    size = 12,
}) => (
    <Button
    onClick={() => {
        onClick && onClick()
    }}
    css={{
        height: size + "px",
        width: size + "px",
    }}>
        <CheckboxState
        visible={checked}>
            <Icon.Checkmark 
            color={selectedColor} 
            size={size} />
        </CheckboxState>
        
        <CheckboxState
        visible={!checked}>
            <Icon.Square 
            color={color} 
            size={size} />
        </CheckboxState>
    </Button>
)

export default Checkbox
