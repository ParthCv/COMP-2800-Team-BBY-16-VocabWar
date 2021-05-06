const getWord = async (word) => {
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export async function sendWord(word) {
  if (word) {
    const data = await getWord(word);
    if (data.title) {
      return false;
    } else {
      return true;
    }
  }
}
