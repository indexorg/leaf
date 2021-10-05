import React, {useEffect, useState, useRef} from 'react'
import _debounce from 'lodash/debounce'

import Text from '@components/Text'

import { 
    Wrapper,
    Element
} from './Input.styles.js'

const Input = ({
    css = {},
    dir = 'ltr',
    onChange = undefined,
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
        dir={dir}
        focused={focus}
        invalid={invalid}
        onClick={() => setFocus(true)}>

            {label && 
                <Text
                as="label"
                dir={dir}
                size="label"
                weight="medium"
                css={{
                    color: invalid ? '$warning400' : '$black900',
                    cursor: 'pointer',
                }}>
                    {label}
                </Text>
            }
            
            <Element
            ref={ref}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onChange={e => {
                onChange && onChange(e.target.value)
            }}
            dir={dir}
            placeholder={placeholder}
            type={type}
            value={value} />
        </Wrapper>
    )
}

export default Input