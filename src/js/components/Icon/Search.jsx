import React from "react"
import classNames from "classnames"

const Search = ({
    className = [],
    size = 16,
    color = "black",
    title = false,
}) => (
    <svg
        className={classNames("blt-icon", className)}
        width={size}
        height={0.9411764706 * size}
        viewBox="0 0 17 16"
        fill="none"
        style={{ display: "block" }}>
        {title && <title>{title}</title>}
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.2296 6.86479C12.2296 9.82768 9.82768 12.2296 6.86479 12.2296C3.9019 12.2296 1.5 9.82768 1.5 6.86479C1.5 3.9019 3.9019 1.5 6.86479 1.5C9.82768 1.5 12.2296 3.9019 12.2296 6.86479ZM11.446 11.9774C10.2309 13.0669 8.62526 13.7296 6.86479 13.7296C3.07347 13.7296 0 10.6561 0 6.86479C0 3.07347 3.07347 0 6.86479 0C10.6561 0 13.7296 3.07347 13.7296 6.86479C13.7296 8.27872 13.3021 9.59281 12.5693 10.6849C12.7655 10.7188 12.9535 10.8116 13.105 10.963L15.5741 13.4321C15.9646 13.8227 15.9646 14.4558 15.5741 14.8464C15.1836 15.2369 14.5504 15.2369 14.1599 14.8464L11.6908 12.3773C11.5747 12.2612 11.4931 12.1236 11.446 11.9774Z"
            fill={color}
        />
    </svg>
)

export default Search
