// NOTE: this file is used for internal testing and should not be packaged with the library
// use of vite specific environment variables will be statically included in the package
// and will cause issues with unique dev enivorments

// another version of this function is included in the template-leaf-server package for local use
import base64 from 'base-64'

export const fetchWithAuthorization = (endpoint, args) => {
    const {
        VITE_WORDPRESS_URL,
        VITE_WORDPRESS_USERNAME,
        VITE_WORDPRESS_PASSWORD,
        PROD,
    } = import.meta.env
    
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