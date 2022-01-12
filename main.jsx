import React from 'react'
import ReactDOM from 'react-dom'
import App from './src/views/App/App.jsx'

// if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark')
// }

const container = document.getElementById('blt-index-settings')

ReactDOM.render(
    <App
    darkMode={true}
    license={container.getAttribute('data-license')} />,
    container,
)