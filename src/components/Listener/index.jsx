import React from 'react'
import KeyPress from './KeyPress'
import MouseMove from './MouseMove'
import Scroll from './Scroll'

export default class Listener extends React.Component {
	static KeyPress = KeyPress;
	static MouseMove = MouseMove;
	static Scroll = Scroll;
}