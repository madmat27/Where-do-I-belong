function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  
  var board = Array.prototype.slice.call(arguments);
  var i;
  var j;
  
  for (i = 0; i < board.length; i++) {
    if (Array.isArray(board[i])) {
      board.splice(i,1);
      }
  }
  
  for (j = 0; j < board.length; j++) {
    for (i = 0; i < arr.length;) {
        if (arr[i] < board[j]) {
        i++;
        }
        return i;
      }
    }
}

getIndexToIns([40, 60], 50);