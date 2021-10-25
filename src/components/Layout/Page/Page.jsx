import React from 'react'

import {
    Element     
} from './Page.styles.js'

const Page = ({
    children
}) => {
    return(
        <Element>
            {children}
        </Element>
    )
}

export default Page