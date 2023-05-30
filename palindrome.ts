function palindrome(str :string) :boolean {
    let myRegex = /[a-zA-Z0-9]/g;
    let result = str.toLowerCase().match(myRegex);
    console.log(result);
    
    return true;
}
  
palindrome("eye");  
palindrome("_eye");
palindrome("_eYe *+");