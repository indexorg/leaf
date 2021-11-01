import React from 'react'

const UIRequest = ({
    children,
    endpoint = 'posts',
    query = {},
    messages = {
        error: {
            received: null, // let the API handle error messages
            sent: null, // let the API handle error messages
        },
        success: {
            
        }
    }
}) => {
    return(
        <Request
        endpoint={endpoint}
        query={query}>
            {
                ({
                    status, 
                    isLoading, 
                    data, 
                    error,
                    update
                }) => {
                    return(
                        children({
                            send,
                            received: data,
                        })
                    )
                }
            }
        </Request>
    )
}

export default UIRequest