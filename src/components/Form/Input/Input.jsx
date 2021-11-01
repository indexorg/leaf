import React, {useEffect, useState, useRef} from 'react'
import _debounce from 'lodash/debounce'

import {Text} from '@components/Layout'
import {Tooltip} from '@components/Elements'

import { 
    Wrapper,
    Element
} from './Input.styles.js'

const Input = (props) => {
    const {
        css = {},
        dir = 'ltr',
        description = false,
        
        onBlur = undefined,
        onChange = undefined,
        onFocus = undefined,
        invalid = false,
        label = false,
        sublabel = false,
        ...otherProps
    } = props
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
                    color: invalid ? '$warning400' : '$black900',
                    cursor: 'pointer',
                }}>
                    {label}
                </Text>
            }

            {description &&
                <Tooltip
                css={{
                    position: 'absolute',
                    right: '0',
                    top: '$2',
                    zIndex: 2,
                    // transform: 'translateY(-50%)'
                }}
                value={description}/>
            }
            
            <Element
            {...otherProps}
            ref={ref}
            dir={dir}
            hasError={invalid}
            onFocus={() => {
                setFocus(true)

                onFocus && onFocus()
            }}
            onBlur={e => {
                setFocus(false)

                onBlur && onBlur(e.target.value)
            }}
            onChange={e => {
                onChange && onChange(e.target.value)
            }} /> 

            {sublabel && 
                <Text
                as="span"
                dir={dir}
                size="footnote"
                weight="medium"
                css={{
                    opacity: .7,
                    marginTop: '-$1'
                }}>
                    {sublabel}
                </Text>
            }
        </Wrapper>
    )
}

export default Input