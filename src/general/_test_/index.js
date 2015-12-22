import test from 'tape';
import request from 'superagent';

import user1 from './nocks/user-1';
import user2 from './nocks/user-2';

test('Simple test', t => {

    t.plan(1);
    t.same([1, 2], [1, 2], 'that should work');
});

test('Another simple test', t => {

    t.plan(1);
    t.pass('that should work too');
});

test('Asynchronous test', t => {

    t.plan(1);

    request
        .post('http://test.com/users/1')
        .end((err) => {
            if (err) {

                t.fail('that is not working');
                t.end();

            } else {

                t.pass('that must success');
                t.end();
            }
        });
});

test('Asynchronous test', t => {

    t.plan(1);

    request
        .post('http://test.com/users/2')
        .end((err) => {
            if (err) {

                t.pass('that must fail to success');
                t.end();

            } else {

                t.fail('that is not working');
                t.end();
            }
        });
});
