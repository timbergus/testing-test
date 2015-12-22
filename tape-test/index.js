import test from 'tape';
import request from 'superagent';
import nocks from './nocks';

test('equality', t => {

    t.plan(1);
    t.same([1, 2], [1, 2]);
});

test('foo', t => {

    t.plan(1);
    t.pass('Should work!');
});

test('User 1 exists', t => {

    t.plan(1);

    request
        .post('http://test.com/users/1')
        .end((err) => {
            if (err) {

                t.fail('User 1 not found');
                t.end();

            } else {

                t.pass('User 1 found');
                t.end();
            }
        });
});

test('User 2 exists', t => {

    t.plan(1);

    request
        .post('http://test.com/users/2')
        .end((err) => {
            if (err) {

                t.pass('User 2 not found');
                t.end();

            } else {

                t.fail('User 2 found');
                t.end();
            }
        });
});
