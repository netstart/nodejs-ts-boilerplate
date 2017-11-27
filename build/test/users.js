"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("supertest");
const _1 = require("../");
describe('Users', () => {
    it('should return `object`', done => {
        request(_1.default)
            .get('/api/v1/users')
            .expect(200)
            .expect({ hello: 'world' })
            .end(done);
    });
});
