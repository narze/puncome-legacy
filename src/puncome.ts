import words from './tnc-1k-wordlist'
import wordcut from 'wordcut';

export default class Puncome {
  static process(input: string): Array<string> {
    wordcut.init();

    let inputWords = wordcut.cut(input)
                            .split('|')
                            .filter((str) => {
                              return /\S/.test(str);
                            });
    let result: string[] = [];

    inputWords.forEach(word => {
      if (words.indexOf(word) === -1) {
        result.push(word)
      }
    });

    return result;
  }
}
