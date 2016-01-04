import add from './add';
import { multiply, double } from './multiply';
import Subtract from './subtract';
import Header from './components/header';

console.log(`The sum is ${ add(3, 2) }`);
console.log(`The multiplication is ${ multiply(3, 2) }`);
console.log(`The doubled value is ${ double(2) }`);
console.log(`Two numbers difference is ${ Subtract.twoNumbers(2, 3) }`);
console.log(`Difference in positive is ${ Subtract.inPositive(2, 3) }`);
console.log(`The subtraction of some numbers is ${ Subtract.nNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]) }`);
console.log(`The inverse subtraction of some numbers is ${ Subtract.nNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], true) }`);
