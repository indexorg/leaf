import React from 'react'

import {Link, useLocation} from "react-router-dom"

// Components
import {Text} from '@components/Layout'
import {Dashicon} from '@components/Elements'

// Styles
import {
    Element,
    ElementWrapper,
    Icon
} from './ScreensItem.styles.js'

const Item = ({
    children,
    href = '#',
    icon = null,
}) => {
    const location = useLocation()

    return(
        <ElementWrapper>
            <Link
            to={href}>
                <Element
                active={location.pathname === href}>
                    {icon && <Icon>{icon}</Icon>}

                    <Text
                    size="label">
                        {children}
                    </Text>
                </Element>
            </Link>
        </ElementWrapper>
    )
}

export default Item