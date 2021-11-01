import React, {useContext} from 'react'
import _get from 'lodash/get'

// Context
import {LeafContext} from '@utils/contexts/leaf.context.js'

// Components
import {Modal} from '@components/Elements'

const ModalListener = () => {
	const [{modal}, dispatch] = useContext(LeafContext)

	return(
		<Modal
        dismiss={() => {
            dispatch({
                type: 'SET_MODAL',
                value: false,
            })
        }}
        title={_get(modal, 'title', '')}
        description={_get(modal, 'description', '')}
        primaryAction={() => {
            _get(modal, 'action', undefined) && modal.action()

            dispatch({
                type: 'SET_MODAL',
                value: false,
            })
        }}
        primaryText='Confirm'
        dismissText='Cancel'
        variant={_get(modal, 'variant', 'primary')}
        visible={modal !== false} />
	)
}

export default ModalListener