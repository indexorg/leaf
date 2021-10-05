import React from 'react'
import {formattedToWrittenNumber} from '../FormattedTo'

const WrittenNumber = ({ value }) => <span>{formattedToWrittenNumber(value)}</span>

export default WrittenNumber