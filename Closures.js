function outerFunction(argumentText) {
  //   Lexical environment surrounding 'innerFunction'
  let outerText = "I am declared in outer function, ";
  function innerFunction() {
    var innerText = "yet accessible from inner function, ";
    console.log(outerText + innerText + argumentText);
  }
  return innerFunction;
}

var innerFunctionGlobal = outerFunction("even after the outer function has finished executing"); 

innerFunctionGlobal();

// OR

// outerFunction("even after the outer function has finished executing")(); 