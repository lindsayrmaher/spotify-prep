// Sort the letters in the string s by the order they occur in the string t. You can assume t will not have repetitive characters. For s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw". For s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg".

const sortByStrings = (stringOne, stringTwo) => {

  const dictionary = stringTwo.split('')
  let reOrderedWord = {}

  stringOne.split('').forEach((letter) => {

    if (stringTwo.indexOf(letter) > -1) {
      if (reOrderedWord[stringTwo.indexOf(letter)]) {
        reOrderedWord[stringTwo.indexOf(letter)] += letter
      } else {
        reOrderedWord[stringTwo.indexOf(letter)] = letter
      }

    }
  })

  let newString = ''
  for (let i = 0; i < stringTwo.length; i++) {
    if (reOrderedWord[i]) newString += reOrderedWord[i]
  }
  return newString

}

