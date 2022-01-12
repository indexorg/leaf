import React from 'react'
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'

// Components
import { Header } from './Header'
import { Row } from './Row'
import { Cell } from './Cell'
import { Provider } from './Provider'


const Wrapper = (props) => (
    <DndProvider 
    backend={HTML5Backend}>
        <Provider 
        {...props} />
    </DndProvider>
)

const Table = {
    Wrapper,
    Row,
    Header,
    Cell,
}

export default Table