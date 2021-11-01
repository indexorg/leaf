import { styled } from "@stitches/react"

export const Element = styled('a', {
    color: '$primary400',
    fontSize: '$text200',
    fontWeight: 500,

    '&:hover': {
        color: '$primary410'
    }
})