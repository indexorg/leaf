import React from 'react'

const List = ({
    className = "",
    items = [],
}) => {
    console.log(items)
    return (
        <ul
        className={`
            divide-solid
            divide-y
            divide-black-800
            divide-opacity-70
            font-medium
            text-md
            -my-2.5

            ${className}
        `}>
            {
            items.map((item, index) => (
                    <li
                    key={index}
                    className="
                        flex
                        items-center
                        m-0
                        h-12
                        w-full

                        md:h-9
                    ">
                        {item}
                    </li>
                ))
            }
        </ul>
    )
}

export default List
