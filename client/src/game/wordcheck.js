const getWord = async (word) => {
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export async function sendWord(e) {
  e.preventDefault();
  if (e.target.elements.word.value) {
    const word = await getWord(e.target.elements.word.value);
    if (word.title) {
      return false;
    } else {
      return true;
    }
  }
}
