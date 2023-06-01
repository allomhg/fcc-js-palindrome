/*
    Need to come back and fix type errors after I understand more of TypeScript.

    The JavaScript code in its current state passes the tests for the assignment.
*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function palindrome(str) {
    var myRegex = /[a-zA-Z0-9]/g;
    var matched = str.toLowerCase().match(myRegex);
    var matchedStr = matched === null || matched === void 0 ? void 0 : matched.join('');
    var reversedStr = __spreadArray([], matched, true).reverse().join(''); // Type error 'RegExpMatchArray | null', need to fix once I've learnt how
    console.log(matchedStr);
    console.log(reversedStr);
    if (reversedStr === matchedStr) {
        console.log("true");
        return true;
    }
    else {
        console.log("false");
        return false;
    }
}
//palindrome("eye");  
palindrome("_eye");
//palindrome("_eYe *+");
palindrome("dingus");
palindrome("diNG_u s");
