export const validatePrice = input => {
    return /^\d+(?:[.,]\d{2})*$/gm.test(input)
}