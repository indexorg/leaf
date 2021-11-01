import React, {useContext, useEffect, useState} from 'react'
import _get from 'lodash/get'

// store
import {FormContext} from '@utils/contexts/form.context.js'

// Components
import {Button} from '@components/Form'

const FormSubmit = (props) => {
    const {
        value = '',
    } = props

    const [, dispatch] = useContext(FormContext)

    return(
        <Button
        type="submit"
        variant="primary"
        onSubmit={() => {
            dispatch({
                type: 'SUBMIT_FORM',
                value: true,
            })
        }}>
            {value}
        </Button>

    )
}

export default FormSubmit