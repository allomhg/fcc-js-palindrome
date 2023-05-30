function palindrome(str) {
    var myRegex = /[a-zA-Z0-9]/g;
    var result = str.toLowerCase().match(myRegex);
    console.log(result);
    return true;
}
palindrome("eye");
palindrome("_eye");
palindrome("_eYe *+");
