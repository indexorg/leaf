import {validatePrice} from '@utils/validation/price'

export const validateFormField = (name, value, validateAs, required, dispatch) => {
    if(value) {
        if(validateAs === 'price' && !validatePrice(value)) {
            dispatch({
                type: 'SET_ERROR',
                id: name
            })
        } else if(validateAs === 'number' && isNaN(value)) {
            dispatch({
                type: 'SET_ERROR',
                id: name
            })
        } else {
            dispatch({
                type: 'REMOVE_ERROR',
                id: name
            })
        }
    } else {
        if(required) {
            dispatch({
                type: 'SET_ERROR',
                id: name
            })
        } else {
            dispatch({
                type: 'REMOVE_ERROR',
                id: name
            })
        }
    }
}