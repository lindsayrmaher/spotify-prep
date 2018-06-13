// Given an encoded string, return its corresponding decoded string. 

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times. Note: k is guaranteed to be a positive integer. 

// For s = "4[ab]", the output should be decodeString(s) = "abababab" 
// For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"

const decodeString = (str) => {
  let multiplier = 0,
    newString = '',
    startString = 0,
    endString = 0

  if (str.indexOf('[') === -1) {
    newString = str.slice(0, str.length - 1)
    return newString
  }
  else {

    for (let i = 0; i < str.length; i++) {
      if (Number(str[i])) {
        multiplier = +str[i]
      }

      if (str[i] === '[') {
        startString = i + 1
      }
      if (str[i] === ']') {
        endString = i
        break;
      }
    }

    for (let j = 0; j < multiplier; j++) {
      let strRepeat = str.slice(startString, endString)
      newString += strRepeat
    }

    return decodeString(str.slice(0, str.lastIndexOf(multiplier)) + newString + str.slice(str.length - 1))
  }

}


//test cases
// console.log(decodeString("4[ab]")) //'abababab'
// console.log(decodeString("2[b3[a]]")) // "baaabaaa"