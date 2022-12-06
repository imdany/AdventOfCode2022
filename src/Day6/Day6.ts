const {readFileSync} = require('fs');

export class Day6 {

  input: string;

  constructor(input: string) {
    if (input == null) {
      this.input = readFileSync('./src/Day6/input1.txt', 'utf8');
    } else {
      this.input = input;
    }
  }

  Challenge1():number {
    let buffer: string[] = [];
    let index: number = 0;

    for(var i = 0; i< this.input.length; i++){
      let value = this.input.charAt(i);

      if(buffer.length > 3){
        buffer.shift();
      }
      buffer.push(value);

      // calculate Set
      let unique = buffer.filter((v, i, a) => a.indexOf(v) === i);

      if(unique.length == 4) {
        index = i+1;
        console.log(unique);
        console.log(index);
        break;
      }
    }
    return index;
  }

  Challenge2():number {
    let buffer: string[] = [];
    let index: number = 0;

    for(var i = 0; i< this.input.length; i++){
      let value = this.input.charAt(i);

      if(buffer.length > 13){
        buffer.shift();
      }
      buffer.push(value);

      // calculate Set
      let unique = buffer.filter((v, i, a) => a.indexOf(v) === i);

      if(unique.length == 14) {
        index = i+1;
        console.log(unique);
        console.log(index);
        break;
      }
    }
    return index;
  }

}
