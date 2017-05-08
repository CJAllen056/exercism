const Beer = {
  verse(num) {
    const isOne   = (n) => n === 1 ? true : false
        , noMore  = (n) => !n ? 'no more' : n === -1 ? 99 : n
        , bottleS = (n) => isOne(n) ? '' : 's'
        , oneIt   = isOne(num) ? 'it' : 'one'
        , verse   = `${noMore(num)} bottle${bottleS(num)} of beer on the wall, ${noMore(num)} bottle${bottleS(num)} of beer.\n${num ? `Take ${oneIt} down and pass it around` : 'Go to the store and buy some more'}, ${noMore(num - 1)} bottle${bottleS(num - 1)} of beer on the wall.\n`
    ;
    return verse.charAt(0).toUpperCase() + verse.slice(1);
  },

  sing(start = 99, end = 0) {
    let song = '';
    for (let i = start; i >= end; i--) song += `${this.verse(i)}${i > end ? '\n' : ''}`;
    return song;
  }
}

export default Beer;