import React, { useEffect, useRef, useState } from 'react'

const Transition = ({
    children,
    enter = 'all .1s ease',
    enterFrom = {
        opacity: 0,
    },
    enterTo = {
        opacity: 1,
    },
    leaveTo = {
        opacity: 0,
    },
    leave = 'all .1s ease',
    show = false,
    styles,
}) => {
    const [css, setCSS] = useState({
        ...enterFrom,
        transition: enter
    })

    const [visible, setVisible] = useState(false)
    const ref = useRef()

    useEffect(() => {
        if(!show) {
            setCSS({
                ...css,
                ...leaveTo,
                transition: leave
            })
        } else {
            setVisible(true)

            setTimeout(() => {
                setCSS({
                    ...css,
                    ...enterTo,
                    transition: enter,
                })
            }, 1);
        }
    }, [show])

    return(
        <div
        style={{
            ...styles,
            opacity: show ? 1 : 0,
            transition: show ? enter : leave
        }}
        onTransitionEnd={() => {
            if(!show) {
                setVisible(false)
            }
        }}
        ref={ref}>
            {
                children({
                    css,
                    show: visible
                })
            }
        </div>
    )
}

export default Transition