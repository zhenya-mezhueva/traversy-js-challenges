function findMaxNumber(arr) {
    // let maxNum = arr[0];
    // for (let item of arr) {
    //     if (item > maxNum) {
    //         maxNum = item;
    //     }
    // }
    // return maxNum;
 
    return arr.toSorted((a,b ) => a - b)[arr.length - 1];
}

module.exports = findMaxNumber;
