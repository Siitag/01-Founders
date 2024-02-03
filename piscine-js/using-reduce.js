function adder(numbers, initialValue = 0) {
    return numbers.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
        }, initialValue);
}

function sumOrMul(numbers, initialValue = 0) {
    return numbers.reduce((accumulator, currentValue) => {
      if (currentValue % 2 === 0) {
        return accumulator * currentValue;
      } else {
        return accumulator + currentValue;
      }
    }, initialValue);
  }

  function funcExec(funcArray, initialValue = 0) {
    return funcArray.reduce((accumulator, currentFunction) => {
      return currentFunction(accumulator);
    }, initialValue);
  }
  