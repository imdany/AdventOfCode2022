const {readFileSync} = require('fs');

export class Day7 {

  input: string;

  constructor(input: string) {
    if (input == null) {
      this.input = readFileSync('./src/Day7/input1.txt', 'utf8');
    } else {
      this.input = input;
    }
  }

  Challenge1():number {
   return 0;
  }

  Challenge2():number {
    return 0;
  }

}
