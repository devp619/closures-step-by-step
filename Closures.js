function outerFunction(argumentText) {
  //   Lexical environment surrounding 'innerFunction'
  function innerFunction() {
    var innerText = "yet accessible from inner function, ";
    console.log(outerText + innerText + argumentText);
  }
  // As long as outerText sits in the same lexical environment, its available to innerFunction
  let outerText = "I am declared in outer function, ";
  return innerFunction;
}

var innerFunctionGlobal = outerFunction("even after the outer function has finished executing"); 

innerFunctionGlobal();

// OR

// outerFunction("even after the outer function has finished executing")(); 