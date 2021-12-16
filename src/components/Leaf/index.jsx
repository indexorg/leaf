import React, {useContext,useReducer, useMemo} from 'react'

import {Notification} from '@model'

// Contexts
import {LeafContext} from '@utils/contexts/leaf.context.js'

const reducer = (state, action) => {
    switch (action.type) { 
        case 'SET_NOTIFICATION':
            return {
                ...state,
                notification: action.value
            }
      default:
        	throw new Error()
    }
}

export const LeafConsumer = ({
    children
}) => {
    const [,dispatch] = useContext(LeafContext)
    
    return children({
        
        setNotification: value => dispatch({
            type: 'SET_NOTIFICATION',
            value,
        })
    })
}

export const LeafProvider = ({
    children
}) => {
	let [state, dispatch] = useReducer(
        reducer, 
        {
            notification: false,
        }
    )

    let leafProvider = useMemo(() => {
        return [state, dispatch]
    }, [state, dispatch])

  	return(
		<LeafContext.Provider
		value={leafProvider}>
            <>
                {children}

                <Notification />

                <Modal />
            </>
		</LeafContext.Provider>
	)
}
