"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const calc_1 = require("./calc");
describe('Main', () => {
    // smoke tests
    describe('Smoke tests', () => {
        it('should exsit the calc lib', () => {
            chai_1.expect(calc_1.default).to.exist;
        });
        it('should exist the method `sum`', () => {
            chai_1.expect(calc_1.default.sum).to.exist;
        });
        it('should exist the method `sub`', () => {
            chai_1.expect(calc_1.default.sub).to.exist;
        });
        it('should exist the method `mult`', () => {
            chai_1.expect(calc_1.default.mult).to.exist;
        });
        it('should exist the method `div`', () => {
            chai_1.expect(calc_1.default.div).to.exist;
        });
    });
    describe('Sum', () => {
        it('should return 4 when `sum(2,2)`', () => {
            chai_1.expect(calc_1.default.sum(2, 2)).to.equal(4);
        });
    });
    describe('Sub', () => {
        it('should return 4 when `sub(6,2)`', () => {
            chai_1.expect(calc_1.default.sub(6, 2)).to.equal(4);
        });
    });
    describe('Mult', () => {
        it('should return 9 when `mult(3,3)`', () => {
            chai_1.expect(calc_1.default.mult(3, 3)).to.equal(9);
        });
    });
    describe('Div', () => {
        it('should return 5 when `div(10,2)`', () => {
            chai_1.expect(calc_1.default.div(10, 2)).to.equal(5);
        });
    });
});
