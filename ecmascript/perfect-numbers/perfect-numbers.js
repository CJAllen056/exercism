class PerfectNumbers {
  classify(num) {
    if (num <= 0) throw new Error('Classification is only possible for natural numbers.');
    
    const arr = new Array(Math.floor(num/2)).fill(undefined)
        , factors = []
    ;

    arr.forEach((x, i) => {
      if (num%(i + 1) === 0) factors.push(i + 1);
    });

    const factorSum = factors.length > 0 ? factors.reduce((acc, num) => acc + num) : 0; 

    return factorSum < num ?
      'deficient' :
      factorSum > num ?
      'abundant' :
      'perfect'
    ;
  }
}

export default PerfectNumbers;