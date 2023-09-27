const fib = function (n) {
  function fibo(number) {
    if (number == 0) return 0;
    if (number == 1) return 1;

    return fibo(number - 2) + fibo(number - 1);
  }

  return fibo(n);
};

module.exports = fib;
