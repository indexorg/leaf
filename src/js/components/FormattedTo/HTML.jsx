import React from 'react'

const HTML = ({value = '', raw = false}) => 
    <div 
    className="blt-rendered-html" 
    dangerouslySetInnerHTML={{__html: raw ? value : `${value.replace(/(<([^>]+)>)/ig,"").substring(0, 100)}`}}></div>

export default HTML