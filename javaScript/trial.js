// Helper function to check if a number is a palindrome
function isPalindrome(num) {
    let str = num.toString();
    let revStr = str.split('').reverse().join('');
    return str === revStr;
}

// Main function to check if all elements in the array are palindromes
function PalinArray(arr, n) {
    for (let i = 0; i < n; i++) {
        if (!isPalindrome(arr[i])) {
            return 0; // Return 0 if any element is not a palindrome
        }
    }
    return 1; // Return 1 if all elements are palindromes
}

// Example usage
let A = [121, 131, 12321];
let n = A.length;
console.log(PalinArray(A, n)); // Output: 1

A = [121, 123, 131];
n = A.length;
console.log(PalinArray(A, n)); // Output: 0
