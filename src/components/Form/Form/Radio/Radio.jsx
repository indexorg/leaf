import React, {useContext, useEffect, useState} from 'react'
import _get from 'lodash/get'

// store
import {FormContext} from '@utils/contexts/form.context.js'

// Components
import {Radio} from '@components/Form'

const FormRadio = (props) => {
    const {
        name,
        value,
    } = props

    const [{values, errors}, dispatch] = useContext(FormContext)

    return(
        <Radio 
        {...props}
        onClick={() => {
            dispatch({
                type: 'SET_VALUE',
                id: name,
                value,
            })
        }}
        invalid={_get(errors, name, false)}
        checked={_get(values, name, '') === value} />
    )
}

export default FormRadio