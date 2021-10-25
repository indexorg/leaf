import React, {useEffect, useState, useRef} from 'react'
import _debounce from 'lodash/debounce'

import {Text} from '@components/Layout'

import { 
    Wrapper,
    Element
} from './Textarea.styles.js'

const Textarea = ({
    css = {},
    dir = 'ltr',
    invalid = false,
    label = false,
    placeholder = '',
    resizeable = false,
    onChange = undefined,
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
            dir={dir}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onChange={e => {
                onChange && onChange(e.target.value)
            }}
            placeholder={placeholder}
            resizeable={resizeable}
            value={value}></Element>
        </Wrapper>
    )
}

export default Textarea