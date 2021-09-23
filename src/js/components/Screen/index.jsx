import React from "react"
import PropTypes from "prop-types"
import _get from "lodash/get"

import Color from "../Color"
import Icon from "../Icon"
import Button from "../Layout/Button"
import Page from "../Page"
import Listener from "../Listener"

const Screen = ({
    actions = [],
    back = undefined,
    children = null,
    className = "",
    isVisible = false,
    onBottom = undefined,
    onTop = undefined,
    onLeft = undefined,
    onRight = undefined,
    title = false,
    icon = false,
}) => {
    return (
        <div
            className={`
            bg-black-900
            transition-all

            ${className}
            
            ${isVisible ? "duration-500 opacity-100" : "duration-0 opacity-0"}
        `}>
            {isVisible && (
                <Listener.Scroll
                    onBottom={onBottom}
                    onTop={onTop}
                    onLeft={onLeft}
                    onRight={onRight}
                    useWindow={true}
                    className="
                    px-5
                    py-6
                    md:px-15
                    md:py-16
                ">  
                    <Page.Header
                    above={
                        back !== undefined ? (
                            <Button
                                background={false}
                                padding={false}
                                handleClick={() => {
                                    back()
                                }}
                                icon={
                                    <Icon.ArrowLeft
                                        color={Color("Primary").fill()}
                                    />
                                }>
                                Back
                            </Button>
                        ) : null
                    }
                    actions={actions}
                    icon={icon}
                    title={title} />

                    {children}
                </Listener.Scroll>
            )}
        </div>
    )
}

export default Screen

Screen.propTypes = {
    actions: PropTypes.array,
    back: PropTypes.func,
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
    isVisible: PropTypes.bool,
    title: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
}
