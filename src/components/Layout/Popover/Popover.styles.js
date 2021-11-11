import { Popover } from '@headlessui/react'
import { styled } from '@config/stitches'
import {buttonStyles} from '@config/button'

export const PopoverElement = styled(Popover, {
    position: 'relative',
})

export const PopoverPanel = styled(Popover.Panel, {
    backgroundColor: '$white',
    borderRadius: '$lg',
    boxShadow: '$shallow',
    position: 'absolute',
    padding: '$4',
    left: 0,
    top: '$2',
    width: '100%'
})

export const PopoverButton = styled(Popover.Button, buttonStyles)