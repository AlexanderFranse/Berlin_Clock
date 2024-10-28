//BACKGROUND INFORMATION

Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.

Examples
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False

✅ Test if string is NOT empty
    ✅ - "(){}[]" --> true
    ✅ - "" --> false

 
 ✅Test if string contains right characters that represent a brace
    - ( --> true
    - ) --> true
    - { --> true
    - } --> true
    - [ --> true
    - ] --> true
    - > --> false

✅ Test if a brace contains a closing brace with the right symbol
    - () --> true
    - (} --> false

✅ Refactor function that validates the order of the braces

🤲 Test endproduct:
    "(){}[]"   =>  True
    "([{}])"   =>  True
    ""         =>  False
    "(}"       =>  False
    "[(])"     =>  False
    "[({})](]" =>  False