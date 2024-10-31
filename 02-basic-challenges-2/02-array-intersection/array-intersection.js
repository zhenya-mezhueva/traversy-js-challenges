function arrayIntersection(arr1, arr2) {
    const resultArr = [];
    
    for (let item of arr1) {
        if (arr2.includes(item) && !resultArr.includes(item)) {
            resultArr.push(item)
        }
    }
    return resultArr;
}

module.exports = arrayIntersection;
