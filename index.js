for (let num = 1; num <= 100; num++) {
  if (num % 15 == 0) {
    console.log("fizzbizz");
  } else if (num % 3 == 0) {
    console.log("fizz");
  } else if (num % 5 == 0) {
    console.log("bizz");
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
  } else {
    console.log(num);
  }
}
