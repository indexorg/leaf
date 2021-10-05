import React from "react"

import { 
    Button,
    CheckboxState
} from './Checkbox.styles.js';

import Icon from "@components/Icon"


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
