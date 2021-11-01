import React, {useContext} from 'react'
import _get from 'lodash/get'
import base64 from 'base-64'
import { 
    useMutation,
    useQuery,
} from 'react-query'

// Contexts
import {LeafContext} from '@utils/contexts/leaf.context.js'

// Transformations
import {queryString} from '@utils/transformations/querystring.transformation.js'

const {
    VITE_WORDPRESS_URL,
    VITE_WORDPRESS_USERNAME,
    VITE_WORDPRESS_PASSWORD,
} = import.meta.env

const Request = ({
    children,
    endpoint = 'posts',
    query = {},
}) => {
    const [, dispatch] = useContext(LeafContext)

    const {
        status, 
        isLoading, 
        data, 
        error,
    } = useQuery(['request', {endpoint, ...query}], () => {
        var requestHeaders = new Headers()
            requestHeaders.append('Authorization', `Basic ${base64.encode(VITE_WORDPRESS_USERNAME + ":" + VITE_WORDPRESS_PASSWORD)}`)
            requestHeaders.append('Content-Type', 'application/json')
            requestHeaders.append('Accept', 'application/json')

        return fetch(`//${VITE_WORDPRESS_URL}/wp-json/${endpoint}/${queryString(query)}`, {
            headers: requestHeaders,
            method: 'GET',
        }).then(res => res.json())
    })

    const requestUpdate = useMutation(values => {
        var requestHeaders = new Headers()
            requestHeaders.append('Authorization', `Basic ${base64.encode(VITE_WORDPRESS_USERNAME + ":" + VITE_WORDPRESS_PASSWORD)}`)
            requestHeaders.append('Content-Type', 'application/json')
            requestHeaders.append('Accept', 'application/json')

        return fetch(`//${VITE_WORDPRESS_URL}/wp-json/${endpoint}/`, {
            headers: requestHeaders,
            method: 'POST',
            body: JSON.stringify(values),
        }).then(res => res.json())  
    })

    const requestDelete = useMutation(id => {
        var requestHeaders = new Headers()
            requestHeaders.append('Authorization', `Basic ${base64.encode(VITE_WORDPRESS_USERNAME + ":" + VITE_WORDPRESS_PASSWORD)}`)
            requestHeaders.append('Content-Type', 'application/json')
            requestHeaders.append('Accept', 'application/json')

        return fetch(`//${VITE_WORDPRESS_URL}/wp-json/${endpoint}/${id}`, {
            headers: requestHeaders,
            method: 'DELETE',
        }).then(res => res.json())  
    })
        
    return children({
        status, 
        isLoading, 
        data, 
        error,
        update: async values => {
            let status = {
                success: null,
                error: null,
            }

            try {
                const request = await requestUpdate.mutateAsync(values)

                if(_get(request, 'data.status') && _get(request, 'data.status') != 200) {
                    throw request.message
                } else {
                    status = {
                        success: true,
                        error: null,
                    }
                }
            } catch (error) {
                status = {
                    success: false,
                    error,
                }
            } finally {}

            return status
        },
        remove: async id => {
            let status = {
                success: null,
                error: null,
            }

            try {
                const request = await requestDelete.mutateAsync(id)

                if(_get(request, 'data.status') && _get(request, 'data.status') != 200) {
                    throw request.message
                } else {
                    status = {
                        success: true,
                        error: null,
                    }
                }
            } catch (error) {
                status = {
                    success: false,
                    error,
                }
            } finally {}

            return status
        }
    })
}

export default Request