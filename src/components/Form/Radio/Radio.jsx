import React, {useRef} from "react"

import {Text} from '@components/Layout'

import { 
    Button,
    Ring,
    State,
    Input,
    Label,
} from './Radio.styles.js'

const Radio = ({
    color = "#000",
    checked = false,
    dir = 'ltr',
    label = false,
    name = '',
    onClick = undefined,
    selectedColor = '#000',
    size = 12,
    value = '',
}) => {
    const ref = useRef()

    return(
        <Label
        dir={dir}>
            <Button
            onClick={() => {
                if(onClick !== undefined && ref.current) {
                    ref.current.click()
                }
            }}
            css={{
                height: size + "px",
                width: size + "px",
            }}>
                <Ring
                color={selectedColor}>
                    <State
                    checked={checked} />
                </Ring>

                <Input 
                ref={ref}
                type="radio"
                onChange={e => {
                    onClick && onClick(e.target.value)
                }}
                name={name} 
                value={value}
                checked={checked} />
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
}

export default Radio