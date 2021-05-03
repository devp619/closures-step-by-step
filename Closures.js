function superOuterFunction() {
  //   Lexical environment surrounding 'outerFunction'
  var superOuterText = "I am declared in the outer most function\n";
  function outerFunction(argumentText) {
    //   Lexical environment surrounding 'innerFunction'
    function innerFunction() {
      var innerText = "yet accessible from inner function, ";
      console.log(superOuterText + outerText + innerText + argumentText);
    }
    // As long as outerText sits in the same lexical environment, its available to innerFunction
    let outerText = "I am declared in outer function, ";
    return innerFunction;
  }
  return outerFunction;
}

// var outerFunctionGlobal = superOuterFunction();

// var innerFunctionGlobal = outerFunctionGlobal("even after the outer function has finished executing");

// innerFunctionGlobal();

// OR

superOuterFunction()("even after the outer function has finished executing")();


// let outerText = "I am declared in global scope, ";

/*
Uses of closure:
- Module pattern
- Function currying
- Data hiding/encapsulation
- Memoization
- State management in async operations
- setTimeOut
- Iterators
*/