import test from 'tape';
import add from '../';

let name = __dirname.split('/');

if (name.length <= 1) {
    name = __dirname.split('\\');
}

test(`Function ${ name[name.length - 2].toUpperCase() }`, t => {

    t.plan(1);
    t.equal(add(2, 3), 5, 'adds two numbers');
});
