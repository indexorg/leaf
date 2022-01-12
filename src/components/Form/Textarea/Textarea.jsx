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
    onBlur = undefined,
    onChange = undefined,
    onFocus = undefined,
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
        onClick={() => setFocus(true)}>

            {label && 
                <Text
                as="label"
                dir={dir}
                size="label"
                weight="medium"
                css={{
                    color: invalid ? '$red400' : '$black900',
                    cursor: 'pointer',
                }}>
                    {label}
                </Text>
            }
            
            <Element
            ref={ref}
            dir={dir}
            hasError={invalid}
            onFocus={() => {
                setFocus(true)

                onFocus && onFocus()
            }}
            onBlur={() => {
                setFocus(false)

                onBlur && onBlur(value)
            }}
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