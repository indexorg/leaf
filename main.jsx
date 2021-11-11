import React from 'react'
import ReactDOM from 'react-dom'
import App from './src/views/App/App.jsx'

const container = document.getElementById('blt-index-settings')

// const App = () => <p>test</p>

ReactDOM.render(
    <App 
    license={container.getAttribute('data-license')} />,
    container,
)