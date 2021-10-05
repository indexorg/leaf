import React from 'react'
import update from 'immutability-helper'

import Checkbox from '../Controls/Checkbox'

const CheckboxGroup = ({
    options = [],
    onChange = undefined,
    selected = [],
}) => {
    const toggleItem = (item) => {
        const index = selected.indexOf(item.id)

        if (index > -1) {
            return update(selected, {
                $splice: [[index, 1]],
            })
        } else {
            return update(selected, {
                $push: [item.id],
            })
        }
    }

    return (
        <div
            className="
				divide-solid
				divide-y
				divide-black-800
				divide-opacity-70
				-my-2.5
			"
        >
            {options.map((item) => {
                const isChecked = selected.indexOf(item.id) > -1 ? true : false

                return (
                    <label
                        key={item.id}
                        className={`
							appearance-none
							bg-transparent
							cursor-pointer
							flex
							font-medium
							items-center
							m-0
							h-12
							space-x-2
							text-md
							transition-all
							w-full

							hover:text-primary

							md:h-9
							
							${isChecked ? 'text-primary' : 'text-black text-opacity-80'}
						`}
                        onClick={(e) => {
                            e.preventDefault()

                            onChange(toggleItem(item))
                        }}
                    >
                        <Checkbox isChecked={isChecked} />

                        <span>{item.label}</span>
                    </label>
                )
            })}
        </div>
    )
}

export default React.memo(CheckboxGroup)
