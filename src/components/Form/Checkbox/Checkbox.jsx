import React from "react"

import {
    Checkmark,
    Square
} from "@components/Icon"

import {Text} from '@components/Layout'

import { 
    Button,
    CheckboxState,
    Input,
    Label,
} from './Checkbox.styles.js'


const Checkbox = ({
    color = "#000",
    checked = false,
    dir = 'ltr',
    label = false,
    name = '',
    onClick = undefined,
    selectedColor = '#000',
    size = 12,
    value = '',
}) => (
    <Label
    dir={dir}>
        <Button
        onClick={() => {
            onClick && onClick(!checked)
        }}
        css={{
            height: size + "px",
            width: size + "px",
        }}>
            <CheckboxState
            visible={checked}>
                <Checkmark 
                color={selectedColor} 
                size={size} />
            </CheckboxState>
            
            <CheckboxState
            visible={!checked}>
                <Square 
                color={color} 
                size={size} />
            </CheckboxState>

            <CheckboxState
            visible={true}>
                <Input 
                type="checkbox"
                onChange={() => {
                    onClick && onClick(!checked)
                }}
                name={name} 
                value={value}
                checked={checked} />
            </CheckboxState>
        </Button>
        
        {label && 
            <Text
            dir={dir}
            size="label"
            weight="regular"
            css={{
                cursor: 'pointer',
            }}>
                {label}
            </Text>
        }
    </Label>
)

export default Checkbox
