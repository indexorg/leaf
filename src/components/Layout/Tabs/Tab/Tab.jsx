import React, {useContext, useEffect, useRef} from 'react'

// Contexts
import {TabContext} from '@utils/contexts/tab.context.js'

// Components
import {Text} from '@components/Layout'

// Styles
import {
    Item
} from './Tab.styles.js'

const Tab = ({
    children,
}) => {
    let id = `leaf-tabs-tab-${Math.random()}`

    const [{active, tabs}, dispatch] = useContext(TabContext)
    const tabRef = useRef(null)
    
    useEffect(() => {
        dispatch({
            type: 'ADD_TAB',
            tab: tabRef
        })
    }, [tabRef])
    
    return(
        <Item
        id={id}
        ref={tabRef}
        active={tabs.indexOf(tabRef) === active}
        onClick={e => {
            dispatch({
                type: 'CHANGE_TAB',
                index: tabs.indexOf(tabRef)
            })
        }}>
            <Text
            size="label">
                {children}
            </Text>
        </Item>
    )
}

export default Tab