function removeDuplicates(arr) {
    const arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        if (!arr1.includes(arr[i])) {
            arr1.push(arr[i]);
        }
    }
    return arr1;
}

module.exports = removeDuplicates;
