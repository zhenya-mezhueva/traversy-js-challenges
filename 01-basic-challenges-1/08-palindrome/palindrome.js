function isPalindrome(str) {
    const normolizedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return normolizedStr === normolizedStr.split('').reverse().join('');
}


module.exports = isPalindrome;
