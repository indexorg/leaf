import React, {useReducer, useMemo} from 'react'

// Contexts
import {FormContext} from '@utils/contexts/form.context.js'

const reducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_FIELD':
            return {
                ...state,
                data: {
                    ...data,
                    [action.id]: [action.value],
                }
            }
        case 'UPDATE_ALL_FIELDS':
            return {
                ...state,
                data,
            }
      default:
        throw new Error()
    }
}

const Form = ({
    children,
    data = [],
}) => {
    let [state, dispatch] = useReducer(
        reducer, 
        {
            data,
        }
    )

    let providerBag = useMemo(() => {
        return [state, dispatch]
    }, [state, dispatch])

    return(
        <FormContext
        value={providerBag}>
            <form>
                {children}
            </form>
        </FormContext>
    )
}

export default Form