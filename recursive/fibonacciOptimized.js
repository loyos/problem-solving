const fib = function (n) {
  let dict = {};

  function fibo(number) {
    if (number == 0) return 0;
    if (number == 1) return 1;

    if (!dict[number - 2]) dict[number - 2] = fibo(number - 2);
    if (!dict[number - 1]) dict[number - 1] = fibo(number - 1);

    return dict[number - 2] + dict[number - 1];
  }

  return fibo(n);
};

module.exports = fib;
