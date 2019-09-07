import { expect } from 'chai';
import Puncome from '../src/Puncome';
import wordcut from 'wordcut';

describe('calculate', function() {
  it('adds', function() {
    let result = Puncome.Sum(5, 2);
    expect(result).equal(7);
  });
});

describe('wordcut', () => {
  it('cuts words', async () => {
    wordcut.init();
    let result = wordcut.cut("สวัสดีชาวโลก");

    expect(result).equal('สวัสดี|ชาว|โลก');
  });
});
