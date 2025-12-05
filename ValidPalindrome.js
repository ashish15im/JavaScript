function isPalindrome(s) {
    let left = 0, right = s.length - 1;

    while (left < right) {
        // skip non-alphanumeric on left
        while (left < right && !isAlphaNum(s[left])) left++;

        // skip non-alphanumeric on right
        while (left < right && !isAlphaNum(s[right])) right--;

        // compare characters
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        left++;
        right--;
    }
    return true;
}

function isAlphaNum(ch) {
    return /^[a-z0-9]$/i.test(ch);
}
console.log(isPalindrome("I am ma I"));
