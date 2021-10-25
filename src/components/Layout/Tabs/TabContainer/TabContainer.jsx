import React, {useReducer, useMemo} from 'react'

// Contexts
import {TabContext} from '@utils/contexts/tab.context.js'

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TAB':
            return {
                ...state,
                tabs: state.tabs.concat(action.tab)
            }
        case 'ADD_PANEL':
            return {
                ...state,
                panels: state.panels.concat(action.panel)
            }
        case 'CHANGE_TAB':
            return {
                ...state,
                active: action.index
            }
      default:
        throw new Error()
    }
}

const TabContainer = ({
    children
}) => {
    let [state, dispatch] = useReducer(
        reducer, 
        {
            active: 0,
            tabs: [],
            panels: [],
        }
    )

    let providerBag = useMemo(
        () => [state, dispatch],
        [state, dispatch]
    )

    return(
        <TabContext.Provider
        value={providerBag}>
            {children}
        </TabContext.Provider>
    )
}

export default TabContainer