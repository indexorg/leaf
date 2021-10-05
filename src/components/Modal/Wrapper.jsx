import React, { useEffect, useRef, useState } from 'react'

const Modal = ({ isVisible = false, children, setPosition = undefined }) => {
    const defaultStyles = {
        cursor: 'default',
        left: '-20px',
        position: 'absolute',
        top: '100%',
    }

    const [styles, setStyles] = useState(defaultStyles)

    const ref = useRef()

    useEffect(() => {
        let timeout1
        let timeout2

        if (isVisible) {
            timeout1 = setTimeout(() => {
                let modalStyles = {
                    ...defaultStyles,
                    display: 'block',
                }

                if (ref.current) {
                    const modalBounds = ref.current.getBoundingClientRect()

                    if (
                        modalBounds.top + modalBounds.height >
                        window.innerHeight
                    ) {
                        modalStyles = {
                            ...modalStyles,
                            bottom: 'calc(100% + 32px)',
                            top: 'auto',
                        }

                        setPosition && setPosition('bottom')
                    } else {
                        setPosition && setPosition('top')
                    }

                    if (
                        modalBounds.left + modalBounds.width >
                        window.innerWidth
                    ) {
                        modalStyles = {
                            ...modalStyles,
                            right: '0',
                            left: 'auto',
                        }
                    }

                    setStyles(modalStyles)
                }
            }, 1)
        } else {
            timeout2 = setTimeout(() => {
                setStyles(defaultStyles)
            }, 200)
        }

        return () => {
            clearTimeout(timeout1)
            clearTimeout(timeout2)
        }
    }, [isVisible])

    // <div
    //     className={`
    // 	duration-200
    // 	ease-out
    // 	relative
    // 	transition-all
    // 	transform
    // 	${
    //         isVisible
    //             ? 'opacity-100 visible translate-y-0 z-100'
    //             : 'opacity-10 invisible translate-y-2 -z-1'
    //     }
    // `}
    // >
    // </div>
    return (
        <div className="blt-modal" ref={ref} style={styles}>
            {children}
        </div>
    )
}

export default Modal
