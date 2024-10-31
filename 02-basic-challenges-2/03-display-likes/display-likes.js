function displayLikes(arr) {
    const count = arr.length;
    let str = '';
    switch (count) {
        case count > 3: {
            str = `${arr[0]}, ${arr[1]} and ${count - 2} others like this`
            break;
        }
        case count === 3: {
            str = `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
            break;
        }
        case count === 2: {
            str = `${arr[0]} and ${arr[1]} like this`;
            break;
        }
        case count === 1: {
            str = `${arr[0]} likes this`;
            break;
        } default: {
            str = 'no one likes this';
        }
    }
    return str;
}

module.exports = displayLikes;
