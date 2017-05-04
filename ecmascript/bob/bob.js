class Bob {
  hey(msg) {
    const alphaTest = new RegExp('.*[a-zA-Z]+.*');
    return msg.trim() === '' ?
      'Fine. Be that way!' :
        msg.toUpperCase() === msg && alphaTest.test(msg) ? 
          'Whoa, chill out!' :
          msg.slice(msg.length - 1) === '?' ?
            'Sure.' :
            'Whatever.'
    ;
  }
}

export default Bob;

