import React from 'react'
import PropTypes from 'prop-types'

import Controls from '../Controls'

const Options = ({
    onChange = undefined,
    options = [],
    selected = [],
    type = 'radio',
}) => {
    if (type == 'dropdown') {
        return (
            <Controls.Dropdown
                onChange={onChange}
                options={options}
                selected={selected}
            />
        )
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
                const isSelected = selected.indexOf(item.id) > -1

                return (
                    <button
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

							${isSelected ? 'text-primary' : 'text-black text-opacity-80'}
						`}
                        onClick={() => {
                            onChange([item.id])
                        }}
                    >
                        <div
                            className={`
								border-2
								rounded-full
								h-4
								flex
								items-center
								justify-center
								w-4

								${isSelected ? 'border-primary' : 'border-black-600'}
							`}
                        >
                            <div
                                className={`
									h-2
									rounded-full
									w-2

									${isSelected ? 'bg-primary' : 'transparent'}
								`}
                            ></div>
                        </div>

                        <span
                            className="
								flex-1
								text-left	
							"
                        >
                            {item.label}
                        </span>

                        {item.icon && <div>{item.icon}</div>}
                    </button>
                )
            })}
        </div>
    )
}

export default Options

Options.propTypes = {
    onChange: PropTypes.func.isRequired,
    options: PropTypes.array,
    selected: PropTypes.array,
    type: PropTypes.string,
}
