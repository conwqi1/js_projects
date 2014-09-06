function Clock () {
  // var currentTime;
}

Clock.TICK = 5000;

Clock.prototype.printTime = function () {
  // Format the time in HH:MM:SS
  var hours = this.currentTime.getHours();
  var mins = this.currentTime.getMinutes();
  var seconds = this.currentTime.getSeconds();
  console.log( hours + ":" + mins + ":" + seconds);
};

Clock.prototype.run = function () {
  // 1. Set the currentTime.
  this.currentTime = new Date();
  // 2. Call printTime.
  this.printTime();
  // 3. Schedule the tick interval.
  setInterval(this._tick.bind(this), Clock.TICK);
};

Clock.prototype._tick = function () {
  // 1. Increment the currentTime.
  this.currentTime.setSeconds(this.currentTime.getSeconds() + 5);
  // 2. Call printTime.
  this.printTime();
};

//test for Clock
//var clock = new Clock();
//clock.run();



  reader
  var readline = require('readline');
  var reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  //helper
  // Prompt the user for a number (use reader).
  // Pass a callback that:
  // Uses parseInt to parse the input.
  // Increment the sum and console.log it.
  // Recursively calls addNumbers again, passing in:
  // the increased sum,
  // the decreased numsLeft,
  // and the same completionCallback.
  // If numsLeft == 0, call completionCallback(sum) so that the total sum can be used.
function addNumbers(sum, numLeft, completionCallback) {

  if ( numLeft > 0 ) {
    function userInput(callback){
      reader.question("Enter a number", function (numString) {
         var num = parseInt(numString);
         callback( num );
       })
     };

    userInput( function( adder ) {
      sum += adder;
      console.log(sum);
      numLeft--;
      addNumbers(sum, numLeft, completionCallback);
    });
  }

  if (numLeft === 0){
    completionCallback(sum);
  }

};


//test for addNumbers
// addNumbers(0, 3, function (sum) {
//   console.log("Total Sum: " + sum);
//   reader.close();
// });



function askIfLessThan (el1, el2, callback) {
  // Prompt user to tell us whether el1 < el2; pass true back to the
  // callback if true; else false.
  console.log( el1 + "," + el2 + "is first number smaller than second?" );
  reader.question( "enter yes or no", function ( ansString ) {
     var ans = ansString; 
     console.log(ans)
     if( ans === "yes"){
       callback (true);
     }else{
       callback (false); }
  })
}

function innerBubbleSortLoop (arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i == arr.length - 1){
    outerBubbleSortLoop(madeAnySwaps);
  }

  if ( i < arr.length - 1 ) {
    askIfLessThan (arr[ i ], arr[ i + 1], function( isLessThan ){
      if ( isLessThan === false){ 
        temp = arr[ i ];
        arr[ i ] = arr[ i + 1];
        arr[ i + 1 ] = temp;
        i ++;
        madeAnySwaps = true; 
        console.log(arr);
      }else{
        i ++;
        madeAnySwaps = false; 
          console.log(arr);
      }
      innerBubbleSortLoop (arr, i, madeAnySwaps, outerBubbleSortLoop)
    })
  }

  
}

function absurdBubbleSort (arr, sortCompletionCallback) {
  function outerBubbleSortLoop (madeAnySwaps) {
    if ( madeAnySwaps == true ){
      innerBubbleSortLoop( arr, 0, false, outerBubbleSortLoop );
    }else{
      sortCompletionCallback();
    }
  }
  outerBubbleSortLoop(true);

  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});













