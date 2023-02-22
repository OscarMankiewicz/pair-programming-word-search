const wordSearch = (letters, word) => {
    //check if array of letters or word exists
    if (letters.length < 1 || word.length < 1) return false;
    //check for horizontal word
    const horizontalJoin = letters.map((ls) => ls.join(""));
    for (const l of horizontalJoin) {
      if (l.includes(word)) return true;
    }
    
    //transpose array
    for (let i = 0; i < letters.length - 1; i++) {
      const arr1 = [];
      for (let j = 0; j < letters.length; j++) {
        arr1.push(letters[j][i]);
      }
      //check for word of transposed array
      const newStr = arr1.join(""); //string
      if (newStr.includes(word)) {
        return true;
      }
    }
  
    return false;
  };
  
  module.exports = wordSearch;
  