import React from 'react'

// Components
import {Stack} from '@components/Layout'

const Row = ({
    children
}) => (
    <Stack
    gap={16}>
        {children}
    </Stack>
)

export default Row