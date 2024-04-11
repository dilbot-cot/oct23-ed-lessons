// update this function so that it passes all of the tests
function countCapitalLetters(inputString) {
  if (typeof inputString !== 'string') {
    return false
  }
  
    let capitalLettersCount = 0
    for (let i = 0; i < inputString.length; i++) {
      if (inputString[i] >= 'A' && inputString[i] <= 'Z') {
        capitalLettersCount ++;
      }
    }
    return capitalLettersCount
  }
  
  module.exports = {
    countCapitalLetters
  }
  