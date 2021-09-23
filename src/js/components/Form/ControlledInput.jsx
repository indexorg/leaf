import React, {useState} from 'react'
import _debounce from 'lodash/debounce'

import Color from '../Color'
import LayoutInput from '../Layout/Input'
import Text from '../Layout/Text'
import XStack from '../Layout/XStack'

const ControlledInput = (props) => {
    const {
        handleChange = undefined,
        invalid = false,
        label = false,
        multiline = false,
        placeholder,
        resizable = false,
        type,
        value = ''
    } = props

    const [focus, setFocus] = useState(false)
    
    return(
        <XStack
        animation=".1"
        background={invalid ? Color("Warning").opacity(.1) : "#fff"}
        cursor="text"
        fill={true}
        handleClick={() => {
            setFocus(true)
        }}
        padding={{
            horizontal: 12,
            vertical: 6,
        }}
        radius={8}
        stroke={{
            color: invalid ? Color("Warning").opacity(.2) : Color("Gray").fill(),
            width: 2,
        }}
        {...props}>
            {label && 
                <Text
                cursor="pointer"
                foreground={invalid ? Color("Warning").fill() : Color("Text").fill()}
                type="body"
                padding={{ trailing: 8 }}
                weight={500}>
                    {label}
                </Text>
            }

            <LayoutInput
            foreground={Color("Text").fill()}
            fill={true}
            handleBlur={() => {
                setFocus(false)
            }}
            multiline={multiline}
            onChange={value => {
                handleChange(value)
            }}
            placeholder={placeholder}
            resizable={resizable}
            triggerFocus={focus}
            type={type}
            weight={400} 
            value={value} />
        </XStack>
    )
}

export default React.memo(ControlledInput)