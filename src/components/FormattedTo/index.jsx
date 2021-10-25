import _get from 'lodash/get'

export const Format = {	
	Map: (value, map) => {
		// return mapped value, but default to actual value if it doesn't exist in the map
		return _get(map, value, value)
	}	
}