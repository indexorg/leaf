import React, {useCallback, useEffect, useRef} from 'react'
import _get from 'lodash/get'
import _throttle from 'lodash/throttle'

const Scroll = (props) => {
    const {
        children,
        className = '',
        onTop = undefined,
        onBottom = undefined,
        onLeft = undefined,
        onRight = undefined,
        useWindow = false,
	} = props
    
    const parentRef = useRef()
	const ref = useRef()

	const throttledScroll = useCallback(
		_throttle(() => {
			let parentBounds = {}
			let bounds = {}

            if(ref.current) {
				bounds = ref.current.getBoundingClientRect()
			} else {
                return;
            }
			
			if(useWindow) {
				parentBounds = {
					height: window.innerHeight,
					width: window.innerWidth,
				}

                if(bounds.bottom <= parentBounds.height) {
                    onBottom && onBottom()
                }
    
                if(bounds.top >= 0) {
                    onTop && onTop()
                }
    
                if(bounds.left >= 0) {
                    onLeft && onLeft()
                }
    
                if(bounds.right <= parentBounds.width) {
                    onRight && onRight()
                }
			} else {
				if(parentRef.current) {
					parentBounds = parentRef.current.getBoundingClientRect()

                    if(bounds.bottom <= parentBounds.bottom) {
                        onBottom && onBottom()
                    }
        
                    if(bounds.top >= parentBounds.top) {
                        onTop && onTop()
                    }
        
                    if(bounds.left >= parentBounds.left) {
                        onLeft && onLeft()
                    }
        
                    if(bounds.right <= parentBounds.right) {
                        onRight && onRight()
                    }
				}
			}

			
			
			
		}, 500), [onTop, onBottom, onLeft, onRight] 
    )

    useEffect(() => {
        if(useWindow) {
            window.addEventListener('scroll', throttledScroll, false)
        }

        return () => {
            if(useWindow) {
                window.removeEventListener('scroll', throttledScroll)
            }
        }
    })

    if(useWindow) {
        return(
            <div
            className={`
                ${className}
            `}>
                <div
                className="blt-scroll-view"
                ref={ref}>
                    {children}
                </div>
            </div>
        )
    }
    
    return(
        <div
        className={`
            blt-scroll-track"
            ${className}
        `}
        style={{
            overscrollBehavior: 'contain'
        }}
        ref={parentRef}>
            <div
            className={`
                overflow-scroll
                ${className}
            `}
            onScroll={throttledScroll}>
                <div
                className="blt-scroll-view"
                ref={ref}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Scroll