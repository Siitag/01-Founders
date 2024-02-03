function reverse(input) {
    if (Array.isArray(input)) {
      const reversedArray = [];
      
      for (let i = input.length - 1; i >= 0; i--) {
        reversedArray.push(input[i]);
      }
      
      return reversedArray;
    } else if (typeof input === 'string') {
      const inputArray = input.split('');
      
      const reversedArray = [];
      for (let i = inputArray.length - 1; i >= 0; i--) {
        reversedArray.push(inputArray[i]);
      }
      
      const reversedString = reversedArray.join('');
      
      return reversedString;
    } else {
      return null;
    }
}