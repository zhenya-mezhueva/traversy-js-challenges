function findMissingNumber(arr) {
   let sum = 0;
   let sum2 = 0;

   for (let i = 1; i <= arr.length + 1; i++) {
    sum += i;
   }

   for (let i = 0; i <= arr.length - 1; i++) {
    sum2 += arr[i];
   }
   return sum - sum2;
}


module.exports = findMissingNumber;
