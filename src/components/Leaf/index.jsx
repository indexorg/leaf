import React, {useContext,useReducer, useMemo} from 'react'

import {Modal, Notification} from '@model'

// Contexts
import {LeafContext} from '@utils/contexts/leaf.context.js'

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_MODAL':
            return {
                ...state,
                modal: action.value
            }
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
        setModal: value => dispatch({
            type: 'SET_MODAL',
            value,
        }),
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
            modal: false,
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
