function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  
  var board = Array.prototype.slice.call(arguments);
  var i;

  for (i = 0; i < board.length; i++) {
    if (Array.isArray(board[i])) {
      board.splice(i,1);
      }
  }
  
  arr.sort(function(a, b) {
    return a - b;
  });
  
  for (i = 0; i < arr.length; i++) {
        if (arr[i] ==  board[0]) {
          return i; 
        }
        else if (arr[i] >  board[0]) {
          return i; 
        }
      }
    
}

getIndexToIns([10, 20, 30, 40, 50], 35);