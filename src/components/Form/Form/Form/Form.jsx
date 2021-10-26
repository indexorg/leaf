import React, {useReducer, useMemo, useContext, useEffect} from 'react'
import _get from 'lodash/get'

// Contexts
import {FormContext} from '@utils/contexts/form.context.js'

// Styles
import {Element} from './Form.styles.js'

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_VALUE':
            return {
                ...state,
                values: {
                    ...state.values,
                    [action.id]: action.value,
                }
            }
        case 'SET_CHECKBOX':
            const values = _get(state, `values.${action.id}`, []).filter(value => value !== action.value)

            return {
                ...state,
                values: {
                    ...state.values,
                    [action.id]: action.checked ? values.concat([action.value]) : values,
                }
            }
        case 'SET_ERROR':
            return {
                ...state,
                errors: state.errors.filter(id => id !== action.id).concat([action.id])
            }
        case 'REMOVE_ERROR':
            return {
                ...state,
                errors: state.errors.filter(id => id !== action.id)
            }
      default:
        throw new Error()
    }
}

const FormElement = ({
    children,
    css,
    onChange,
    onSubmit,
}) => {
    const [{values, errors}, dispatch] = useContext(FormContext)

    useEffect(() => {
        let timer = null

        if(onChange) {
            timer = setTimeout(() => {
                onChange(values, errors)
            }, 300)
        }

        return () => {
            clearTimeout(timer)
        }
    }, [values])
    
    return(
        <Element
        css={css}
        onSubmit={e => {
            e.preventDefault()

            onSubmit && onSubmit(values, errors)
        }}>
            {children}
        </Element>
    )
}

const Form = ({
    children,
    css = {},
    onChange = undefined,
    onSubmit = undefined,
}) => {
    let [state, dispatch] = useReducer(
        reducer, 
        {
            values: {},
            errors: [],
        }
    )

    let formProvider = useMemo(() => {
        return [state, dispatch]
    }, [state, dispatch])

    return(
        <FormContext.Provider
        value={formProvider}>
            <FormElement
            css={css}
            onChange={onChange}
            onSubmit={onSubmit}>
                {children}
            </FormElement>
        </FormContext.Provider>
    )
}

export default Form