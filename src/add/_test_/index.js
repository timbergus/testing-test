import test from 'tape';
import fn from '../';

let name = __dirname.split('/');

test(`Function ${ name[name.length - 2].toUpperCase() }`, t => {

    t.plan(1);
    t.equal(fn(2, 3), 5, 'adds two numbers');
});
