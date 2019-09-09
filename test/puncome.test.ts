import { expect } from 'chai';
import Puncome from '../src/Puncome';
import wordcut from 'wordcut';

describe('wordcut', () => {
  it('cuts words', async () => {
    wordcut.init();
    let result = wordcut.cut("สวัสดีชาวโลก");

    expect(result).equal('สวัสดี|ชาว|โลก');
  });
});

describe('process', () => {
  context('when the word is within 1k frequent list', () => {
    it('returns empty array', () => {
      let result = Puncome.process("ที่");

      expect(result.length).to.eq(0);
    })
  })

  context('when the word is not within 1k frequent list', () => {
    it('returns unmatched words', () => {
      let result = Puncome.process("ไดโนเสาร์");

      expect(result.length).to.eq(1);
      expect(result).to.include("ไดโนเสาร์");
    })
  })
})
