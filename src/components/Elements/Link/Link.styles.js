import { styled } from "@stitches/react"

export const Element = styled('a', {
    color: '$blue400',
    fontSize: '$text200',
    fontWeight: 500,

    '&:hover': {
        color: '$blue410'
    }
})