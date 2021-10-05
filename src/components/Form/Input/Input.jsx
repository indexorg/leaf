import React, {useEffect, useState, useRef} from 'react'
import _debounce from 'lodash/debounce'

import Text from '@components/Text'

import { 
    Wrapper,
    Element
} from './Input.styles.js'

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
    const ref = useRef()

    useEffect(() => {
        if(focus) {
            ref.current.focus()
        }
    }, [focus])
    
    return(
        <Wrapper
        css={css}
        invalid={invalid}
        focused={focus}
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
            
            <Element
            ref={ref}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onChange={value => {
                handleChange && handleChange(value)
            }}
            placeholder={placeholder}
            type={type}
            value={value} />
        </Wrapper>
    )
}

export default Input