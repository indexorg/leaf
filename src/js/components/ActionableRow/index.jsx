import React from 'react'
import _get from 'lodash/get'

import {clamp, clampStretch} from '../FormattedTo'
import Pannable from '../Pannable'

const ActionableRow = ({
    actions,
    children
}) => {
    const distance = 80 * actions.length

    return(
        <Pannable
        direction="leading"
        limit={distance}>
            {(progress, isPanning) => {
                return(
                    <div
                    className="
                        grid
                        grid-cols-1
                        grid-rows-1
                        w-full
                    ">
                        <div
                        className="
                            bg-black-800
                            divide-x
                            divide-solid
                            divide-black-600
                            divide-opacity-30
                            flex
                            justify-end
                            py-5
                        "
                        style={{
                            gridArea: '1/1/1/1'
                        }}>
                            {
                                actions.map((action, index) => {
                                    const itemProgress = progress + (index / actions.length)
                                    const scale = clamp((((itemProgress - .8) * (itemProgress)) + .8), 0, 1)
                                    const opacity = clamp(itemProgress, 0, 1)

                                    return(
                                        <React.Fragment>
                                            <button
                                            className={`
                                                bg-opacity-10
                                                duration-200
                                                flex
                                                flex-col
                                                items-center
                                                justify-center
                                                pt-1.5
                                                w-20
                                                ${isPanning ? 'transition-none' : 'transition-all'}
                                            `}
                                            style={{
                                                opacity: opacity,
                                                transform: `scale(${scale})`
                                            }}
                                            onClick={action.onClick}>
                                                {action.icon}

                                                <label   
                                                className={`
                                                    font-medium
                                                    text-center
                                                    text-xs
                                                    pt-1.5
                                                    w-18

                                                    ${action.foreground}
                                                `}>
                                                    {action.text}
                                                </label>
                                            </button>
                                        </React.Fragment>
                                    )
                                })
                            }
                        </div>

                        

                        <div
                        className={`
                            duration-200
                            w-full

                            ${isPanning ? 'transition-none' : 'transition-all'}
                        `}
                        style={{
                            gridArea: '1/1/1/1',
                            transform: `translateX(${progress > 0 ? -distance * clampStretch(progress, 0, 1, .3) : 0}px)`
                        }}>
                            {children}
                        </div>
                    </div>
                )
            }}
        </Pannable>
    )
}

export default ActionableRow