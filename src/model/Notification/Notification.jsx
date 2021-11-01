import React, {useContext} from 'react'

// Context
import {LeafContext} from '@utils/contexts/leaf.context.js'

// Components
import {Notification} from '@components/Elements'

const NotificationListener = () => {
	const [{notification}, dispatch] = useContext(LeafContext)

	return(
		<Notification
		message={notification ? notification : ''}
		shouldPlay={notification}
		isDismissed={() => {
			setTimeout(() => {
				dispatch({
					type: 'SET_NOTIFICATION',
					value: false,
				})
			}, 500)
		}} />
	)
}

export default NotificationListener