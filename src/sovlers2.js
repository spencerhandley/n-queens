/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  console.log("called")
  var solution = []; //fixme
  var initialBoard = new Board({n:n})
  var nHold = n
  // console.log(initialBoard)
  var checkBoard = function(board, index, rooksCount){
    var tmpIdx = index || [0,0]
    console.log(tmpIdx)
    if(!boardIsValid(board)){
      console.log("board is invalid")
      return false
    }
    console.log("after first condition")
    if(rooksCount >= nHold){
      console.log(rooksCount, nHold)
      console.log("you win")
      solution.push(board)
      return
    }
    console.log("after second condition")
    if(boardIsValid(board)){
      console.log("board is valid, but not enough rooks")
      var newBoard = makeNewBoard(board, tmpIdx);
      console.log(newBoard)

      rCount = getRookCount(newBoard)
      console.log(rCount)
      for(var i = 0 ; i < n; i++){
        for(var j = 0 ; j < n; j++){

          checkBoard(newBoard, [i,j], rCount + 1);
          debugger;
        }
      }
    }
    console.log("whaaa?")
  }
  checkBoard(initialBoard)
  console.log("after call")
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

var boardIsValid = function(board){
  console.log("inside board is valid function")
  if(!board.hasAnyColConflicts() && !board.hasAnyRowConflicts()){
    return true
  }
  return false
}

var makeNewBoard = function(board, index){
  var rowsHold = board.rows()
  var boardMatrix = rowsHold
  boardMatrix[index[0]][index[1]] = 1
  var newBoard = new Board(boardMatrix)
  return newBoard
}

var getRookCount = function(board){
  var count = 0
  for(var i = 0; i < board.length ; i++){
    for(var j = 0; j < board.length ; j++){
      if(board[i][j]){
        count++
      }
    }
  }
  return count
}
// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
