import React, {useContext} from 'react'
import _get from 'lodash/get'

// store
import {FormContext} from '@utils/contexts/form.context.js'

// Components
import {Select} from '@components/Form'

const FormSelect = (props) => {
    const {
        children,
        name,
    } = props

    const [{values, errors}, dispatch] = useContext(FormContext)

    return(
        <Select
        {...props}
        onChange={value => {
            dispatch({
                type: 'SET_VALUE',
                id: name,
                value,
            })
        }}
        invalid={_get(errors, name, false)}
        value={_get(values, name, '')}>
            {children}
        </Select>
    )
}

export default FormSelect