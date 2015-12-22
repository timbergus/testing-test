import test from 'tape';
import Subtract from '../';

let name = __dirname.split('/');

if (name.length <= 1) {
    name = __dirname.split('\\');
}

test(`Function ${ name[name.length - 2].toUpperCase() }`, t => {

    t.plan(1);
    t.equal(Subtract.twoNumbers(3, 2), 1, 'subtracts two numbers');
});
