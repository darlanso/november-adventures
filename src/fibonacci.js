function fib(n) {
  let a = 1;
  let b = 0;
  for (i = 0; i < n; i++) {
    console.log('%d', a);
    let numb = a + b;
    b = a;
    a = numb;
  }
}

fib(8);
