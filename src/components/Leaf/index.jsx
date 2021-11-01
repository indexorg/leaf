import React, {useContext,useReducer, useMemo} from 'react'

import {Modal, Notification} from '@model'

// Contexts
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

const queryClient = new QueryClient()

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

const LeafConsumer = ({
    children
}) => {
    const [,dispatch] = useContext(LeafContext)
    
    return(
        <QueryClientProvider 
        client={queryClient}>
            {
                children({
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

            <Notification />

            <Modal />
        </QueryClientProvider>
    )
}

const LeafProvider = ({
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
            <LeafConsumer>
                {children}
            </LeafConsumer>
		</LeafContext.Provider>
	)
}

export default LeafProvider
