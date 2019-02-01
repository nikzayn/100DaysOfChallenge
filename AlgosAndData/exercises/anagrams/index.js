// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case'0jkj==j
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    return help(stringA) === help(stringB);
}

function help(str){
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;
// const acharMap = helper(stringA);
//     const bcharMap = helper(stringB);

//     if(Object.keys(acharMap).length !== Object.keys(bcharMap).length){
//         return false;
//     }
//     for(let char in acharMap){
//         if(acharMap[char] !== bcharMap[char]){
//             return false;
//         }
//     }
//     return true;
// }

// function helper(str){
//     const charMap = {};
//     for(let char of str.replace(/[^\w]/g, '').toLowerCase()){
//         charMap[char] = charMap[char] + 1 || 1;
//     }
//     return charMap;