import React from 'react'
var dayjs = require('dayjs')
import _get from 'lodash/get'

import Boolean from './BooleanValue'
import Capitalized from './Capitalized'
import DateString from './DateString'
import EmptyValue from './EmptyValue'
import HTML from './HTML'
import Image from './Image'
import Link from './Link'
import Price from './Price'
import WrittenNumber from './WrittenNumber'

export default class FormattedTo extends React.Component {
	static Boolean = Boolean;
	static Capitalized = Capitalized;
	static DateString = DateString;
	static EmptyValue = EmptyValue;
	static HTML = HTML;
	static Image = Image;
	static Link = Link;
	static Price = Price;
	static WrittenNumber = WrittenNumber;
}

export const formattedToWrittenNumber = value => {
	const number = parseInt(value)
	const digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']

	if(!isNaN(number)) {
		if(number < 11) {
			return digits[number]
		} else {
			return number
		}
	}

	return ''
}

export const formattedToPixels = (value, fallback) => {
	if(isNaN(parseInt(value))) {
		return fallback
	} else {
		return `${value}px`
	}
}

export const formattedToUnits = (value, units = 'px') => {
	if(isNaN(value)) {
		return value
	} else {
		return `${value}${units}`
	}
}

export const formattedToCapitalized = value => {
	if(value) {
		return value.charAt(0).toUpperCase() + value.slice(1)
	} else {
		return null
	}
}

export const Format = {
	Capitalized: value => {
		if(value) {
			return value.charAt(0).toUpperCase() + value.slice(1)
		} else {
			return null
		}
	},

	DateString: value => {
		return new dayjs(value).format('MMMM DD, YYYY')
	},

	HTML: (value, raw = false) => {
		return <span dangerouslySetInnerHTML={{__html: raw ? value : `${value.replace(/(<([^>]+)>)/ig,"").substring(0, 100)}`}}></span>
	},

	Map: (value, map) => {
		// return mapped value, but default to actual value if it doesn't exist in the map
		return _get(map, value, value)
	},

	Pixels: (value, fallback) => {
		if(isNaN(parseInt(value))) {
			return fallback
		} else {
			return `${value}px`
		}
	},

	Plural: (value, count) => {
		if(count == 1) {
			return value
		} else {
			return `${value}s`
		}
	},

	Units: (value, units = 'px') => {
		if(isNaN(value)) {
			return value
		} else {
			return `${value}${units}`
		}
	},

	WrittenNumber: value => {
		const number = parseInt(value)
		const digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
	
		if(!isNaN(number)) {
			if(number < 11) {
				return digits[number]
			} else {
				return number
			}
		}
	
		return ''
	}
	
}

export const clamp = (progress, lower, upper) => {
	if(progress <= lower) {
		return lower
	}

	if(progress >= upper) {
		return upper
	}

	return progress
}

export const clampStretch = (progress, lower, upper, stretch) => {
	if(progress < lower) {
		return progress * stretch
	}

	if(progress > upper) {
		return upper + ((progress - upper) * stretch)
	}

	return progress
}