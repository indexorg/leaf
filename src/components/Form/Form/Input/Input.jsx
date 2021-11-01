import React, {useContext, useEffect, useState} from 'react'
import _get from 'lodash/get'

// store
import {FormContext} from '@utils/contexts/form.context.js'

// utilities
import {validateFormField} from '@utils/validation/form-field'

// Components
import {Input} from '@components/Form'

const FormInput = (props) => {
    const {
        name,
        required = false,
        value = '',
        validateAs = null,
    } = props

    const [{values, errors}, dispatch] = useContext(FormContext)

    useEffect(() => {
        dispatch({
            type: 'SET_VALUE',
            id: name,
            value,
        })
    }, [value])
    
    return(
        <Input 
        {...props}
        onChange={value => {
            dispatch({
                type: 'SET_VALUE',
                id: name,
                value,
            })
        }}
        onBlur={value => {
            validateFormField(name, value, validateAs, required, dispatch)
        }}
        onFocus={() => {
            dispatch({
                type: 'REMOVE_ERROR',
                id: name
            })
        }}
        invalid={errors.includes(name)}
        value={_get(values, name, '')} />
    )
}

export default FormInput