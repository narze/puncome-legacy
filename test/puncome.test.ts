import { expect } from 'chai';
import Puncome from '../src/Puncome';

describe('calculate', function() {
  it('adds', function() {
    let result = Puncome.Sum(5, 2);
    expect(result).equal(7);
  });
});
