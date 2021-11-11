import {useContext} from 'react'
import base64 from 'base-64'

import {LeafContext} from '@utils/contexts/leaf.context.js'

export const Notify = ({
    children
}) => {
    const [,dispatch] = useContext(LeafContext)
    
    return children(
        value => dispatch({
            type: 'SET_NOTIFICATION',
            value,
        })
    )
}

export const fetchWithAuthorization = (endpoint, args) => {
    const {
        VITE_WORDPRESS_URL,
        VITE_WORDPRESS_USERNAME,
        VITE_WORDPRESS_PASSWORD,
    } = import.meta.env


    var requestHeaders = new Headers()
        requestHeaders.append('Authorization', `Basic ${base64.encode(VITE_WORDPRESS_USERNAME + ":" + VITE_WORDPRESS_PASSWORD)}`)
        requestHeaders.append('Content-Type', 'application/json')
        requestHeaders.append('Accept', 'application/json')
    
  
    
    return fetch(`//${VITE_WORDPRESS_URL}${endpoint}`, {
        headers: requestHeaders,
        ...args
    })
}