document.getElementById('btn').addEventListener('click', function() {
  // JavaScript function triggered by btn click
  for (let i = 0; i < 5; i++) {
    if (i % 2 === 0) {
      console.log(i + ' is even');
    } else {
      console.log(i + ' is odd');
    }
  }
});