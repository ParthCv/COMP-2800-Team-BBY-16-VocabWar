const continents = "BCDFGHJKLMNPQRSTVWXYZ";
const vowels = "AEIOU";

const randomLetters = () => {
  let array = [];
  let lastletter = null;
  while (array.length <= 5) {
    if (array.length % 2 === 0) {
      let randomCharacter =
        continents[Math.floor(Math.random() * continents.length)];
      while (
        array[0] === randomCharacter ||
        array[1] === randomCharacter ||
        array[2] === randomCharacter ||
        array[3] === randomCharacter ||
        array[4] === randomCharacter ||
        array[5] === randomCharacter
      ) {
        randomCharacter =
          continents[Math.floor(Math.random() * continents.length)];
      }
      if (lastletter !== randomCharacter) array = [...array, randomCharacter];
    }
    if (array.length % 2 !== 0) {
      let randomCharacter = vowels[Math.floor(Math.random() * vowels.length)];
      while (
        array[0] === randomCharacter ||
        array[1] === randomCharacter ||
        array[2] === randomCharacter ||
        array[3] === randomCharacter ||
        array[4] === randomCharacter ||
        array[5] === randomCharacter
      ) {
        randomCharacter = vowels[Math.floor(Math.random() * vowels.length)];
      }
      if (lastletter !== randomCharacter) array = [...array, randomCharacter];
    }
    lastletter = array[array.length - 1];
  }
  return array;
};

export default randomLetters;
