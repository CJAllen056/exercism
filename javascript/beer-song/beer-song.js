var BeerSong = function() {

  this.verse = function(start) {

    if (start === 1) {
      return "1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n";
    } else if (start === 2) {
      return "2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n";
    } else  if (start === 0) {
      return "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n";
    } else {
      return start + " bottles of beer on the wall, " + start + " bottles of beer.\nTake one down and pass it around, " + (start - 1) + " bottles of beer on the wall.\n";
    }

  };

  this.sing = function(start, end) {
    if (!end) end = 0;

    var song = "";

    for (i = start; i >= end; i--) {
      if (i === 1) {
        song += "1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n\n";
      } else if (i === 2) {
        song += "2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n\n";
      } else  if (i === 0) {
        song += "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n\n";
      } else {
        song += i + " bottles of beer on the wall, " + i + " bottles of beer.\nTake one down and pass it around, " + (i - 1) + " bottles of beer on the wall.\n\n";
      }
    }

    song = song.substr(0, song.length - 1);

    return song;

  };

};

module.exports = BeerSong;
