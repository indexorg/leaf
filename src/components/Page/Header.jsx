import React from "react"
import PropTypes from "prop-types"

const Header = ({
    above = false,
    actions = [],
    align = "trailing",
    icon = false,
    title = false,
}) => {
    const actionViews = actions.map((action, index) => (
        <div key={index}>{action}</div>
    ))

    const actionComponents = (
        <div className="flex space-x-2 md:space-x-3">
            {actionViews.length ? actionViews : null}
        </div>
    )

    return (
        <React.Fragment>
            <div
            className={`
				relative
				${above ? "h-6" : "h-0"}
			`}>
                {above}
            </div>

            <div
            className={`
				flex
				flex-wrap
				h-auto
				items-center
                space-x-4.5

				sm:flex-nowrap
				sm:h-10
			`}>
                {title &&
                    <div
                    className="
                        flex 
                        items-center
                    ">
                        {icon && (
                            <div
                            className={`
                                ${icon}
                                dashicons
                                mx-3.5
                                text-primary
                                w-4
                            `}></div>
                        )}

                        <h2
                        className="
                            font-bold
                            text-2xl
                        ">
                            {title}
                        </h2>
                    </div>
                }

                {(align == "leading" || !title) && (
                    <div
                    className="
                        pl-1.5
                    ">
                        {actionComponents}
                    </div>
                )}

                <div
                className="
					flex-1
				"></div>

                {(align == "trailing" && title) && actionComponents}
            </div>
        </React.Fragment>
    )
}

export default Header

Header.propTypes = {
    above: PropTypes.element,
    actions: PropTypes.array,
    align: PropTypes.string,
    title: PropTypes.string,
}
