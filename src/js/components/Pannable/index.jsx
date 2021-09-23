import React, {useState, useEffect} from 'react'

const Pannable = ({
    children,
    limit,
}) => {
    const [startX, setStartX] = useState(null)
    const [progress, setProgress] = useState(0)
    const [isMoving, setIsMoving] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const handlePanStart = event => {
        event.stopPropagation()
        setStartX(event.touches[0].clientX)

        setIsMoving(true)
	}

	const handlePanMove = event => {
        event.stopPropagation()

		if(isMoving) {
            const changeX = event.touches[0].clientX

            let change = (startX - changeX) / limit
            
            if(isOpen) {
                change = 1 - ((changeX - startX) / limit)
            }
            
            setProgress(change)
		}
	}

	const handlePanEnd = event => {
        event.stopPropagation()
        
        // clearTimeout(timer)
        
		if(isMoving) {
			if(progress > .3 && !isOpen || (isOpen && progress > .7)) {
                setProgress(1)
                setIsOpen(true)
			} else {
                setProgress(0)
                setIsOpen(false)
			}

            setIsMoving(false)
            setStartX(null)
		}
	}

    return(
        <div
        onTouchStart={handlePanStart}
        onTouchEnd={handlePanEnd}
        onTouchMove={handlePanMove}
        className="
            w-full
        ">
            {children(progress, isMoving)}
        </div>
    )
}

export default Pannable