import React from 'react'

import Dropdown from './Dropdown'
import Group from './Group'
import Input from './Input'
import Item from './Item'
import Options from './Options'
import Toggle from './Toggle'

export default class Control extends React.Component {
	static Dropdown = Dropdown;
	static Group = Group;
	static Input = Input;
	static Item = Item;
	static Options = Options;
	static Toggle = Toggle;
}