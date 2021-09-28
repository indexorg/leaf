import React, {useEffect, useState, useRef} from 'react'
import _debounce from 'lodash/debounce'

import { 
    styled
} from '../../config/stitches';


import Text from '../Text'

const InputWrapper = styled('div', {
    alignItems: 'center',
    backgroundColor: "$white",
    borderRadius: '$md',
    border: '2px solid $black300',
    cursor: 'text',
    display: 'inline-flex',
    paddingX: '$3',
    paddingY: '$1.5',
    transition: 'colors .1s ease',
    variants: {
        invalid: {
            true: {
                backgroundColorRGBA: '#d63638|.1',
                // backgroundColor: ColorWithOpacity('$warning400', .1),
                color: '$warning400',
                border: '2px solid $warning400',
            }
        }
    }
})

const InputElement = styled('input', {
    backgroundColor: 'transparent',
    border: 'none',
    boxShadow: 'none',
    borderRadius: 'none',
    cursor: 'text',
    color: '$black900',
    height: '$9',
    margin: 0,
    padding: 0,

    '&:focus': {
        outline: 'none',
    }
})

const Input = ({
    css = {},
    handleChange = undefined,
    invalid = false,
    label = false,
    placeholder,
    type = 'text',
    value = ''
}) => {

    const [focus, setFocus] = useState(false)

    const inputRef = useRef()

    useEffect(() => {
        if(focus) {
            inputRef.current.focus()
        }
    }, [focus])
    
    return(
        <InputWrapper
        css={css}
        invalid={invalid}
        onClick={() => setFocus(true)}>

            {label && 
                <Text
                as="label"
                size="label"
                weight="medium"
                css={{
                    color: invalid ? '$warning400' : '$black900',
                    cursor: 'pointer',
                    paddingRight: '$2',
                }}>
                    {label}
                </Text>
            }
            
            <InputElement
            ref={inputRef}
            onBlur={() => setFocus(false)}
            onChange={value => {
                handleChange && handleChange(value)
            }}
            placeholder={placeholder}
            type={type}
            value={value} />
        </InputWrapper>
    )
}

export default Input