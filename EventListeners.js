function attachEventListener() {
  let count = 0;
  var x = 1;
  const button = document.getElementById('btn');

  button.addEventListener('click', function onClick() {
    ++count;
//     ++x;
    console.log(`I was clicked ${count} times`);
  });
}

attachEventListener();
