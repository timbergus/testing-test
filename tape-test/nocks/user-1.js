import nock from 'nock';

export default nock('http://test.com')
    .post('/users/1')
    .reply(200, {});
