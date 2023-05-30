function palindrome(str :string) :boolean {
    const myRegex = /[a-zA-Z0-9]/g;
    let result :string[]; // I need to remove this after I figure out the properly ensure result is assigned a string. Error: 'null' is not assignable to type 'string[]'.
    let flipped : string[]; // Also need to remove the | undefined for the reason as above.
    // I need to look up TypeScript best practices.

    /*
        Didn't know the ? before a method is called 'optional chaining'
    */

    result = str.toLowerCase().match(myRegex);
    flipped = [...result];

    console.log(result);
    console.log(flipped);

    return true;
}
  
//palindrome("eye");  
palindrome("_eye");
//palindrome("_eYe *+");
palindrome("dingus");
palindrome("diNG_u s");