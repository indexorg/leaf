import React from 'react'

import {Element} from "./Link.styles.js"

const Link = (props) => {
    const {
        children,
        ...otherProps
    } = props

    return(
        <Element
        {...otherProps}>
            {children}
        </Element>
    )
}

export default Link