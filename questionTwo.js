// Given an encoded string, return its corresponding decoded string. 

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times. Note: k is guaranteed to be a positive integer. 

// For s = "4[ab]", the output should be decodeString(s) = "abababab" 
// For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"


const decodeString = (str) => {
  let count = 1
  let multiplier = str[0]
  let newString = ''

  let encodedStr = str.slice(str.indexOf('[') + 1, str.indexOf(']'))
  console.log('this is the inner encoded string', encodedStr)

  while (count <= multiplier) {
    console.log(multiplier)
    newString += encodedStr
    console.log(encodedStr)
    count++
  }
  return newString
}

const decodeString = (str) => {
  let multiplier = 0,
    newString = '',
    startString = 0,
    endString = 0

  //  let encodedStr = str.slice(str.indexOf('[') + 1, str.indexOf(']'))
  // console.log('this is the inner encoded string', encodedStr)
  if (str.indexOf('[') === -1) {
    newString = str.slice(0, str.length - 1)
    // console.log(newString)
    return newString
  }
  else {
    for (let i = 0; i < str.length; i++) {
      if (Number(str[i])) {
        multiplier = +str[i]
        console.log(multiplier)
        console.log(typeof multiplier)
      }

      if (str[i] === '[') {
        console.log(str[i])
        startString = i + 1
      }
      if (str[i] === ']') {
        console.log(str[i])
        endString = i
        break;
      }
    }
    console.log('this is the multiplier', multiplier)
    for (let j = 0; j < multiplier; j++) {
      console.log('is this running')
      let strRepeat = str.slice(startString, endString)
      newString += strRepeat
    }
    console.log(multiplier)
    // console.log(str.lastIndexOf(multiplier))
    console.log("this is a string", str.slice(0, str.lastIndexOf(multiplier)))
    return decodeString(str.slice(0, str.lastIndexOf(multiplier)) + newString + str.slice(str.length - 1))
  }

}