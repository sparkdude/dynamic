/*
INTRODUCTION

The Fibonacci numbers are the numbers in the following integer sequence.
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ……..

In mathematical terms, the sequence Fn of Fibonacci numbers is defined by the recurrence relation

Fn = Fn-1 + Fn-2
with seed values

F0 = 0 and F1 = 1.

---------------------------------------------------------------------------------------------------

PROBLEM: Create a program to calculate the fibonacci sequence up to a given number GREATER THAN 1000

*/

function f(number, memo={}) {
  if (memo[number]) return memo[number]
  if (number < 0) return "not possible";
  if (number < 2) return number;

  fib = f(number-1, memo) + f(number-2, memo);
  // console.log('number', number, 'fib', fib)
  // console.log('memo', memo)
  return memo[number] = fib;
}

const f2 = (n, memo={}) => {
  max_stack = 5000;
  steps = (n / max_stack);
  iteration = 0;
  while (++iteration < steps) {
    f(iteration*max_stack, memo)
  }
  return f(n, memo)
}

console.log(f2(1000));

// var fib = [0, 1];
// for(var i=fib.length; i<=10; i++) {
//   fib[i] = fib[i-2] + fib[i-1];
// }
// console.log(fib); 