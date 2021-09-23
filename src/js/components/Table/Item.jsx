import React from "react"

const Item = ({ component, item, value }) => {
    const filtered_value = component
        ? React.createElement(component, {
              value,
              row: item,
          })
        : value

    return (
        <span
            className="
			blt-table__cell--content
		">
            {filtered_value}
        </span>
    )
}

export default Item
