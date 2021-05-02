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

function f(number) {
  
  if (number == 0) return 0;
  if (number == 1) return 1;

  let r;

  r = f(number-1) + f(number-2);

  return r;

}

console.log(f(100));