//three stacks, move one piece a time, only add smaller plates on larger plates

var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function TowerOfHanoi() {
  this.stack = [ [1, 2, 3], [ ], [ ] ];
  return this;
};

TowerOfHanoi.prototype.isWon = function () {
  if ((this.stack[1].length === 4 ||this.stack[2].length === 4) && (this.stack[0].length === 0)){
    return true;
  }else{
    return false;
  }
};

TowerOfHanoi.prototype.isValidMove = function (startTowerIdx, endTowerIdx) { 
  if (this.stack[ startTowerIdx ][ 0 ] < this.stack[ endTowerIdx ][0]){
    return true;
  }else{
    return false;
  }
};

TowerOfHanoi.prototype.move = function ( startTowerIdx, endTowerIdx ) {
  if ( this.isValidMove( startTowerIdx, endTowerIdx ) === true){
    this.stack[endTowerIdx].unshift( stack[startTowerIdx][0] );
    this.stack[startTowerIdx].slice( 1 );
    return true;
  }else{
    return false;
  }
};

TowerOfHanoi.prototype.print = function () {
  console.log( "stack0 :" + JSON.stringify( this.stack[0]) );
  console.log( "stack1 :" + JSON.stringify( this.stack[1]) );
  console.log( "stack2 :" + JSON.stringify( this.stack[2]) );
};

TowerOfHanoi.prototype.prompMove = function (callback){
  //print the stack
  console.log("the current stacks: ----------------");
  this.print;
  console.log("------------------------------------");
  
  //ask for user input
  reader.question("Enter the tower index to move from", function(numString1){
    reader.question("Enter the tower index to move to", function(numString2){
      var startTowerIdx = parseInt(numString1);
      var endTowerInx = parseInt(numString2);
      callback(startTowerIdx, endTowerInx);
    });
  });
};

TowerOfHanoi.prototype.run = function( completionCallback ){
    this.prompMove(function(startTowerIdx, endTowerIdx ) {
      this.move( startTowerIdx, endTowerIdx);
      if (this.isWon() === false) {
        this.run(completionCallback);
      } else {
        console.log("You Won!");
        completionCallback();
      }
    }.bind(this));
}; 


//------------------testing--------------------------------------------
var game = new TowerOfHanoi();
game.run(function() {
  console.log("You Won!");
});