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
    var result; // I need to remove this after I figure out the properly ensure result is assigned a string. Error: 'null' is not assignable to type 'string[]'.
    var flipped; // Also need to remove the | undefined for the reason as above.
    // I need to look up TypeScript best practices.
    var matched = str.match(myRegex);
    console.log(matched);
    /*
        Didn't know the ? before a method is called 'optional chaining'
    */
    result = str.toLowerCase().match(myRegex);
    flipped = __spreadArray([], result, true);
    //console.log(result);
    //console.log(flipped);
    return true;
}
//palindrome("eye");  
palindrome("_eye");
//palindrome("_eYe *+");
palindrome("dingus");
palindrome("diNG_u s");
