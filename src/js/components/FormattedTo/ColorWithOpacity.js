import convert from 'color-convert'

const validHexColor = (hex) => {
	const sanitized_color = hex.replace("#", "")

	if (
		sanitized_color.includes(",") ||
		sanitized_color.length % 3 !== 0 ||
		sanitized_color.length > 6
	) {
        throw "Please pass a valid hex color with 3 or 6 characters or change your color space"
	}
}

const ColorWithOpacity = (
    color,
    opacity = 1,
) => {
    try {
        validHexColor(color)
    } catch(e) {
        console.error(e)
    }

    console.log(color)

    const hex = color.includes("#") ? color : `#${color}`
    const rgb = convert.hex.rgb(hex)
    const rgba = rgb.concat(opacity)

    return `rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, ${rgba[3]})`
	
}

export default ColorWithOpacity
