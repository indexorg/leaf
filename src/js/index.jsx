import React, {useState} from 'react'
import ReactDOM from 'react-dom'

import Checkbox from './components/Controls/Checkbox'

const App = () => {
    const [checked, setChecked] = useState(false)
    return(
        <div>
            <h1>Dex</h1>

            <Checkbox 
            checked={checked}
            onClick={() => setChecked(!checked)} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)