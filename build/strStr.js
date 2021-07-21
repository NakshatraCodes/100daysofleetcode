"use strict";
// 28. Implement strStr()
function strStr(haystack, needle) {
    let hLen = haystack.length;
    let nLen = needle.length;
    if (hLen === 0)
        return 0;
    for (let i = 0; i <= hLen; i++) {
        if (haystack.charAt(i) === needle.charAt(0)) {
            if (haystack.substring(i, i + nLen) === needle) {
                return i;
            }
        }
    }
    return -1;
}
console.log(strStr('hello', 'll'));
console.log(strStr('aaaaa', 'bba'));
console.log(strStr('', 'hel'));
