import { expect } from 'chai';
import Puncome from '../src/Puncome';
import wordcut from 'wordcut';

describe('wordcut', () => {
  it('cuts words', () => {
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

  context('when processing with multiple words', () => {
    it('returns only unmatched words', () => {
      let result = Puncome.process("ไดโนเสาร์ที่อยู่ในป่าคอนกรีต")

      expect(result.length).to.eq(2);
      expect(result).to.include("ไดโนเสาร์");
      expect(result).not.to.include("ที่");
      expect(result).not.to.include("อยู่");
      expect(result).not.to.include("ใน");
      expect(result).not.to.include("ป่า");
      expect(result).to.include("คอนกรีต");
    })
  })

  context('when processing with whitespaces', () => {
    it('returns only unmatched words', () => {
      let result = Puncome.process(`ไดโนเสาร์ที่
      อยู่ใน ป่าคอนกรีต`);

      expect(result.length).to.eq(2);
      expect(result).to.include("ไดโนเสาร์");
      expect(result).not.to.include("ที่");
      expect(result).not.to.include("อยู่");
      expect(result).not.to.include("ใน");
      expect(result).not.to.include("ป่า");
      expect(result).to.include("คอนกรีต");
    })
  })
})
