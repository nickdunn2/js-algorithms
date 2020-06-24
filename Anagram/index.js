function validAnagram(str1, str2) {
    // remove all spaces from strings and lower case chars
    let stripped1 = str1.replace(/\s+/g, '').toLowerCase()
    let stripped2 = str2.replace(/\s+/g, '').toLowerCase()

    // if they're not the same length, they can't be anagrams
    if (stripped1.length !== stripped2.length) {
        return false
    }

    // set up empty dictionaries
    let stripped1Dict = {}
    let stripped2Dict = {}

    // loop over each string to populate dictionaries
    for (const char of stripped1) {
        stripped1Dict[char] ? stripped1Dict[char] += 1 : stripped1Dict[char] = 1
    }

    for (const char of stripped2) {
        stripped2Dict[char] ? stripped2Dict[char] += 1 : stripped2Dict[char] = 1
    }

    // compare two dictionaries
    for (const prop in stripped1Dict) {
        if (stripped1Dict[prop] !== stripped2Dict[prop]) {
            return false
        }
    }

    return true
}

console.log(validAnagram('CATT', 'ttac')) // true
console.log(validAnagram('lonnnnnnnngword', 'short')) // false
console.log(validAnagram('', '    ')) // true
console.log(validAnagram('dormitory', 'dirty room')) // true
console.log(validAnagram('aaz', 'zza')) // false