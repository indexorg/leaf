import React from 'react'
import { Dialog } from '@headlessui/react'

// Components
import { Button } from '@components/Form'
import { Stack, Text } from '@components/Layout'
import Transition from '@components/Transition'

// Styles
import { 
    DialogWrapper,
    DialogOverlay,
    DialogInt,
} from './Modal.styles.js'

const Modal = ({ 
    dismiss = undefined,
    title = '',
    description = '',
    primaryAction = undefined,
    primaryText = 'Confirm',
    dismissText = 'Cancel',
    variant = 'primary',
    visible = false,
}) => {
    return (
        <Transition
        show={visible}
        enter="all .25s ease"
        leave="all .15s ease"
        enterFrom={{
            opacity: 0,
        }}
        enterTo={{
            opacity: 1,
        }}
        leaveTo={{
            opacity: 0
        }}>
            {({
                css,
                show,
            }) => (
                <DialogWrapper
                css={css}
                open={show}
                onClose={dismiss}>
                    <DialogOverlay />

                    <Transition
                    show={visible}
                    enter="all .25s ease"
                    leave="all .15s ease"
                    enterFrom={{
                        transform: 'scale(.9)',
                    }}
                    enterTo={{
                        transform: 'scale(1)',
                    }}
                    leaveTo={{
                        transform: 'translateY(24px)',
                    }}>
                        {({
                            css,
                            visible,
                        }) => {
                            console.log(css)
                            return(
                                <DialogInt
                                css={css}
                                visible={visible}>
                                    <Dialog.Title>
                                        <Text
                                        size="heading"
                                        weight="bold">
                                            {title}
                                        </Text>
                                    </Dialog.Title>

                                    <Dialog.Description>
                                        <Text
                                        size="body"
                                        css={{
                                            opacity: .9,
                                            paddingTop: "$2"
                                        }}>
                                            {description}
                                        </Text>
                                    </Dialog.Description>

                                    <Stack
                                    align="center"
                                    direction="vertical"
                                    gap="$1"
                                    css={{
                                        paddingTop: '$6'
                                    }}>
                                        <Button
                                        onClick={() => {
                                            primaryAction && primaryAction()
                                            dismiss()
                                        }}
                                        variant={variant}>
                                            {primaryText}
                                        </Button>

                                        <Button
                                        onClick={dismiss}
                                        variant="simple">
                                            {dismissText}
                                        </Button>
                                    </Stack>
                                </DialogInt>
                            )
                        }}
                    </Transition>
                </DialogWrapper>
            )}
        </Transition>
    )
}

export default Modal
