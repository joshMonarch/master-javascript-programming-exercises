function getElementsGreaterThan10AtProperty(obj, key) {
    let isArray = Array.isArray(obj[key])
    if (!key in obj){ return undefined }
    return isArray ? obj[key].filter(num => num > 10): []
}