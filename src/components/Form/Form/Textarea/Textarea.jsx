import React, {useContext, useEffect, useState} from 'react'
import _get from 'lodash/get'

// store
import {FormContext} from '@utils/contexts/form.context.js'

// utilities
import {validateFormField} from '@utils/validation/form-field'

// Components
import {Textarea} from '@components/Form'

const FormTextarea = (props) => {
    const {
        name,
        required = false,
        validateAs = null,
    } = props

    const [{values, errors}, dispatch] = useContext(FormContext)

    return(
        <Textarea 
        {...props}
        onChange={value => {
            dispatch({
                type: 'SET_VALUE',
                id: name,
                value,
            })

            validateFormField(name, value, required, dispatch)
        }}
        onBlur={value => {
            validateFormField(name, value, required, dispatch)
        }}
        invalid={_get(errors, name, false)}
        value={_get(values, name, '')} />
    )
}

export default FormTextarea