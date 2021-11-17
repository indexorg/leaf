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
        PROD,
    } = import.meta.env

    // leaf.root
    // leaf.nonce
    var requestHeaders = new Headers()
        requestHeaders.append('Content-Type', 'application/json')
        requestHeaders.append('Accept', 'application/json')
    var url = ''

    if(PROD === true) {
        url = leaf.root

        requestHeaders.append('X-WP-Nonce', leaf.nonce)
    } else {
        url = VITE_WORDPRESS_URL

        requestHeaders.append('Authorization', `Basic ${base64.encode(VITE_WORDPRESS_USERNAME + ":" + VITE_WORDPRESS_PASSWORD)}`)
    }
    
    return fetch(`//${VITE_WORDPRESS_URL}${endpoint}`, {
        headers: requestHeaders,
        ...args
    })
}