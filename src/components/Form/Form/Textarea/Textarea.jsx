import React, {useContext, useEffect} from 'react'
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
        <Textarea 
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
        invalid={_get(errors, name, false)}
        value={_get(values, name, '')} />
    )
}

export default FormTextarea