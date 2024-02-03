function multiply(a, b) {
    let result = 0;
    const isNegative = (a < 0 && b > 0) || (a > 0 && b < 0);
    a = Math.abs(a);
    b = Math.abs(b);
    
    for (let i = 0; i < b; i++) {
      result += a;
    }
    
    return isNegative ? -result : result;
  }
  
  function divide(a, b) {
    const isNegative = (a < 0 && b > 0) || (a > 0 && b < 0);
    a = Math.abs(a);
    b = Math.abs(b);
    
    let quotient = 0;
    while (a >= b) {
      a -= b;
      quotient++;
    }
  
    return isNegative ? -quotient : quotient;
  }
  
  function modulo(a, b) {  
    const isNegative = a < 0;
    a = Math.abs(a);
    b = Math.abs(b);
    
    while (a >= b) {
      a -= b;
    }
  
    return isNegative ? -a : a;
  }
  