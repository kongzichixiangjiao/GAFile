

// '../noteDetails/noteDetails?' + 'html=' + query.html + '&' + 'title=' + query.title

const jointArguments = (path, dic) => {

    var resultStr = ''
    for (key in dic) {
        resultStr = resultStr + key + "=" + dic[key] + "&"
    }

    if (path.indexOf('?') === -1) {
        return path + "?" + resultStr
    } else {
        return path + resultStr
    }
}

console.log(jointArguments('../noteDetails/noteDetails', { "key1": "value1", "key2": "value2" }))