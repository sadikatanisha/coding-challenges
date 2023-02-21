
// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.
function sumOfMinimums(arr) {
    let total = 0;
    
    for (let i = 0; i < arr.length; i++){
     total += Math.min(...arr[i]) //Math.min doesn't take arrays
    }
    
    return total;
}