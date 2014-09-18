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
  var solution = null; //fixme
  var initialBoard = new Board({n:n})
  var checkBoard = function(board){
    if (solution) {
      return;
    }
    console.log("checking")
    if(!boardIsValid(board)){
      return false
    }

    if(board.get('rooks') >= n){
      solution = board.rows();
      console.log("you win")
      return
    }

    if(boardIsValid(board)){

      var uniqueBoards = makeUniqueBoards(board);
      for (var i = 0; i < uniqueBoards.length; i++){
        checkBoard(uniqueBoards[i]);
      }
    }
  }
  checkBoard(initialBoard)
  return solution
}
var boardIsValid = function(board){
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

var makeUniqueBoards = function(board){
  var rookCount = board.get("rooks")
  var rows = board.rows()
  var n = board.get("n")
  var newBoards = []
  for(var i = 0; i < n; i++){
    for(var j = 0; j < n; j++){
      var holder = []
      for(var l = 0 ; l< rows.length ; l++){
        holder.push(rows[l].slice())
      }
      // console.log(rows[i][j])
      if(!rows[i][j]){
        var tempBoard = new Board(holder)
        tempBoard.attributes[i][j] =1
        tempBoard.set("rooks", rookCount + 1)
        newBoards.push(tempBoard)
      }
    }
  }
  // console.log(newBoards)
  return newBoards
}

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0
  var initialBoard = new Board({n:n})
  var nHold = n
  var solutionHolder = []
  var checkBoard = function(board){
    // if (solutionCount) {
    //   return;
    // }
    // console.log("checking")
    if(!boardIsValid(board)){
      return
    }

    if(board.get('rooks') >= n){
      var row = board.attributes
      var arrayHold =[]
      for(var k in row){
        for(var i = 0; i <row[k].length; i++){
          if(row[k][i]){
            arrayHold.push(i)
          }
        }
      }
      console.log("hey ther")
      for(var j = 0; j < solutionHolder.length; j++){
        for(var l =0; l <solutionHolder[j].length; l++){
          console.log("hey, I'm here")
          if(solutionHolder[j][i].indexOf(arrayHold[i])<0){
            solutionHolder.push(arrayHold)
            solutionCount++
          }
        }
      }
      console.log(solutionHolder)
      console.log(board)
      // console.log(solutionCount)
      return

    }

    if(boardIsValid(board)){

      var uniqueBoards = makeUniqueBoards(board);
      for (var i = 0; i < uniqueBoards.length; i++){
        checkBoard(uniqueBoards[i]);
      }
    }
  }
  checkBoard(initialBoard)
  // console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount
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
