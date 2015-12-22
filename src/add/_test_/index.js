import test from 'tape';
import add from '../';

test('ADD module should be able to...', t => {

    t.plan(1);
    t.equal(add(2, 3), 5, 'add two numbers');
});
