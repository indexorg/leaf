import React, {useState} from 'react'

// // Components
import {Text} from '@components/Layout'

// Styles
import {
    Element,
    Content
} from './Tooltip.styles.js'

const Tooltip = ({
    css = {},
    value,
}) => {
    const [visible, setVisible] = useState(false)

    return(
        <Element
        css={css}>
            <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}>
                <path 
                fillRule="evenodd" 
                clipRule="evenodd" 
                d="M14 7C14 10.866 10.866 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7ZM7 12.5C10.0376 12.5 12.5 10.0376 12.5 7C12.5 3.96243 10.0376 1.5 7 1.5C3.96243 1.5 1.5 3.96243 1.5 7C1.5 10.0376 3.96243 12.5 7 12.5ZM7 6C7.41421 6 7.75 6.33579 7.75 6.75V9.25C7.75 9.66421 7.41421 10 7 10C6.58579 10 6.25 9.66421 6.25 9.25V6.75C6.25 6.33579 6.58579 6 7 6ZM7.75 4.75C7.75 4.33579 7.41421 4 7 4C6.58579 4 6.25 4.33579 6.25 4.75C6.25 5.16421 6.58579 5.5 7 5.5C7.41421 5.5 7.75 5.16421 7.75 4.75Z" 
                fill="#2271B1" />
            </svg>

            <Content
            visible={visible}>
                <Text
                size="footnote"
                leading="snug"
                weight="regular">
                    {value}
                </Text>
            </Content>
        </Element>
    )
}

export default Tooltip