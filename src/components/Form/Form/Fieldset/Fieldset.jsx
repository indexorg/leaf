import React from 'react'

// Components
import {Stack, Text} from '@components/Layout'

// Styles
import {Element} from './Fieldset.styles.js'

const Fieldset = ({
    children,
    dir,
    label
}) => (
    <Element>
        {label && 
            <Text
            dir={dir}
            size="label"
            weight="medium">
                {label}
            </Text>
        }
        
        <Stack
        direction="vertical"
        gap={4}>
            {children}
        </Stack>
    </Element>
)

export default Fieldset