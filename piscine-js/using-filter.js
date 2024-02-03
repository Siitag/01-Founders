function filterShortStateName(arrString) {
    return arrString.filter((item) => item.length < 7);
}

function filterStartVowel(arrString) {
    return arrString.filter((item) => {
        const firstLetter = item[0].toLowerCase();
        return firstLetter === 'a' || firstLetter === 'e' || firstLetter === 'i' || firstLetter === 'o' || firstLetter === 'u';
    });
}

function filter5Vowels(arrString) {
    return arrString.filter((item) => {
        const vowels = item.match(/[aeiou]/gi);
        return vowels ? vowels.length >= 5 : false;
    });
}

function filter1DistinctVowel(arr) {
    return arr.filter(
        (item) => new Set(item.toLowerCase().match(/[aeiou]/gi)).size === 1
    );
}

function multiFilter(data) {
    return data.filter(item => {
      const { capital, name, tag, region } = item;
      
      const isCapitalValid = capital.length >= 8;
      
      const vowels = ['a', 'e', 'i', 'o', 'u'];
      const startsWithVowel = vowels.includes(name.toLowerCase().charAt(0));
      const isNameValid = !startsWithVowel;
      
      const tagLowerCase = tag.toLowerCase();
      const hasVowelInTag = vowels.some(vowel => tagLowerCase.includes(vowel));
      const isTagValid = hasVowelInTag;
      
      const isRegionValid = region !== 'South';
      
      return isCapitalValid && isNameValid && isTagValid && isRegionValid;
    });
  }
  