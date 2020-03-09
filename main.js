const biggify = function (number) {
  return number + 9000;
}

const nasafy = function(number) {
  const numbersArray = []
  for (let i = number; i > 0; i--) {
  numbersArray.push(i);
  }
  numbersArray.push('Blast off!');
  return numbersArray;
}

const reversify = function(str) {
  let reversedStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

const titleify = function(str) {
  let titleifiedStr = '';
  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      titleifiedStr += str[i].toUpperCase();
    } else if (str[i] === ' ') {
      titleifiedStr += str[i] + str[i + 1].toUpperCase();
      i++
    } else {
      titleifiedStr += str[i].toLowerCase();
    }
  }
  return titleifiedStr;
}

const crazify = function(str) {
  let newCrazyStr = '';
  let incrementsForOddOrEven = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      incrementsForOddOrEven++
    }
    if (incrementsForOddOrEven % 2 === 0) {
      newCrazyStr += str[i].toUpperCase();
    } else {
      newCrazyStr += str[i].toLowerCase();
    }
  }
  return newCrazyStr;
}

if (typeof biggify === 'undefined') {
  biggify = undefined;
}

if (typeof nasafy === 'undefined') {
  nasafy = undefined;
}

if (typeof reversify === 'undefined') {
  reversify = undefined;
}

if (typeof titleify === 'undefined') {
  titleify = undefined;
}

if (typeof crazify === 'undefined') {
  crazify = undefined;
}


module.exports = {
  biggify,
  nasafy,
  reversify,
  titleify,
  crazify,
}
