import React, {useEffect, useState, useRef} from 'react'

// Components
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
    disabled = false,
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
                    color: invalid ? '$red400' : '$black900',
                    cursor: 'pointer',
                }}>
                    {label}
                </Text>
            }

			<SelectWrapper>
				<Element
				ref={ref}
				name={name}
                disabled={disabled}
                isDisabled={disabled}
				onFocus={() => setFocus(true)}
				onBlur={() => setFocus(false)}
				onChange={e => {
					onChange && onChange(e.target.value)
				}}
				value={value}>
					{children}
				</Element>

				<IconWrapper>
                    <svg 
                    width="14" 
                    height="8" 
                    viewBox="0 0 14 8" 
                    fill="none">
                        <path 
                        fillRule="evenodd" 
                        clipRule="evenodd" 
                        d="M0.646484 1.35359L1.35359 0.646484L7.00004 6.29293L12.6465 0.646484L13.3536 1.35359L7.00004 7.70714L0.646484 1.35359Z" />
                    </svg>
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