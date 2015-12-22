import nock from 'nock';

export default nock('http://test.com')
    .post('/users/2')
    .reply(500, {});
