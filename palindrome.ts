/*
    Need to come back and fix type errors after I understand more of TypeScript.

    The JavaScript code in its current state passes the tests for the assignment.
*/

function palindrome(str: string) : boolean {
    const myRegex = /[a-zA-Z0-9]/g;
    const matched = str.toLowerCase().match(myRegex);
    const matchedStr = matched?.join('');
    const reversedStr = [...matched].reverse().join(''); // Type error 'RegExpMatchArray | null', need to fix once I've learnt how

    console.log(matchedStr);
    console.log(reversedStr);

    if (reversedStr === matchedStr) {
        console.log("true");
        return true;
    } else {
        console.log("false");
        return false;
    }
}
  
//palindrome("eye");  
palindrome("_eye");
//palindrome("_eYe *+");
palindrome("dingus");
palindrome("diNG_u s");