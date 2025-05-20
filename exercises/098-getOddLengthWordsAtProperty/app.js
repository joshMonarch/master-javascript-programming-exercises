function getOddLengthWordsAtProperty(obj, key){
    let isArray = Array.isArray(obj[key])
    if (!key in obj){ return undefined }
    return isArray ? obj[key].filter(element => element.length % 2 !== 0): []
}