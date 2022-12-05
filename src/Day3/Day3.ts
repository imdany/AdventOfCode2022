
const {readFileSync} = require('fs');


export class Day3 {

  SplitArrayByPosition(input: string[], position: number): string[][] {
    return [input.slice(0, position), input.splice(position, input.length)];
  }

  GetPriority(value: string): number {
    const allChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return allChars.indexOf(value) + 1
  }

  constructor(input: string) {
    if(input == null) {
      this.input = readFileSync('./src/Day3/input1.txt', 'utf8');
    } else {
      this.input = input;
    }
  }
  input: string;

  Challenge1():number {

    let score = 0;

    let lines = this.input.split("\n");
    let data = lines.map(x=> x.split(""));

    for (const r of data) {
      let check = this.SplitArrayByPosition(r, r.length/2);
      let repeatedValue = check[1].filter(value =>check[0].includes(value))[0];
      score = score + this.GetPriority(repeatedValue)
    }

    return score;
  }
  Challenge2():number {

    let score = 0;

    let lines = this.input.split("\n");
    for( let i = 2; i<lines.length; i = i+3){
      // git lines in blocks
      let l1 = lines[i-2].split("");
      let l2 = lines[i-1].split("");
      let l3 = lines[i].split("");

      // find intersection in three arrays
      let intersection1 = l1.filter(value =>l2.includes(value));
      let intersection = intersection1.filter(value => l3.includes(value));

      score = score + this.GetPriority(intersection[0]);
    }
      return score;
  }
}
