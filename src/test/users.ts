import { expect } from 'chai';
import * as request from 'supertest';

import server from '../';

describe('Users', () => {
  it('should return `object`', done => {
    request(server)
      .get('/api/v1/users')
      .expect(200)
      .end((err: any, res: any) => {
        expect(res.body).to.an('object');
        done();
      });
  });
});
