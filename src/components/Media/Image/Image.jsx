import React from 'react'

import {
    Element,
} from './Image.styles.js'

const Image = ({
    alt = '',
    css = {},
    fit = '',
    ratio = 'default',
    rounded = false,
    size = 'small',
    src = '',
    style = ''
}) => (
    <Element
    alt={alt}
    css={css}
    fit={fit}
    ratio={ratio}
    rounded={rounded}
    size={size}
    src={src} 
    image_style={style} />
)

export default Image