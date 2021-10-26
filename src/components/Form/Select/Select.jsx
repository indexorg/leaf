import React, {useEffect, useState, useRef} from 'react'

// Components
import Icon from '@components/Icon'
import {Text} from '@components/Layout'

import {
    Wrapper,
	SelectWrapper,
    Element,
    IconWrapper
} from './Select.styles.js'

const Select = ({
	children,
    dir = 'ltr',
	name,
	invalid = false,
	label = false,
    sublabel = false,
	onChange = undefined,
	value = '',
	css = {},
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

			<SelectWrapper>
				<Element
				ref={ref}
				name={name}
				onFocus={() => setFocus(true)}
				onBlur={() => setFocus(false)}
				onChange={e => {
					onChange && onChange(e.target.value)
				}}
				value={value}>
					{children}
				</Element>

				<IconWrapper>
					<Icon.ArrowDown color="#23282D" />
				</IconWrapper>
			</SelectWrapper>

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

export default Select