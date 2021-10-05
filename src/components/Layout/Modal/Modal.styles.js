import { 
    Dialog
} from '@headlessui/react'

import { styled } from '@config/stitches'

export const DialogWrapper = styled(Dialog, {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    inset: 0,
    overflowY: 'scroll',
    transition: 'all 250ms ease',
    position: 'fixed',
    zIndex: 100
})

export const DialogOverlay = styled(Dialog.Overlay, {
   backgroundColor: '$black900',
   opacity: .5,
   position: 'fixed',
   inset: 0,
   zIndex: -1,
})

export const DialogInt = styled('div', {
    backgroundColor: '$white',
    borderRadius: '$xl',
    boxShadow: '$card',
    maxWidth: '$96',
    padding: '$9 $9 $6 $9',
    textAlign: 'center',
    transition: 'all .25s ease',
    transform: 'scale(.9)',
    width: '$full',
})