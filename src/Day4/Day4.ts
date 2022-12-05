import {Range} from "./Range";

const {readFileSync} = require('fs');


export class Day4 {

  constructor(input: string) {
    if(input == null) {
      this.input = readFileSync('./src/Day4/input1.txt', 'utf8');
    } else {
      this.input = input;
    }
  }
  input: string;

  Challenge1():number {

    let overlaps = 0;

    let lines = this.input.split("\n");

    for (const x of lines) {
      let pairs = x.split(",");
      let pair1 = pairs[0].split("-")
      let pair2 = pairs[1].split("-")

      let r1 = new Range(parseInt(pair1[0]), parseInt(pair1[1]));
      let r2 = new Range(parseInt(pair2[0]), parseInt(pair2[1]));

      let ov1 = r1.CheckFullOverlap(r2);
      let ov2 = r2.CheckFullOverlap(r1);

      if(ov1 == true || ov2 == true) {
        overlaps = overlaps + 1;
      }
    }
    return overlaps;
  }
  Challenge2():number {
    let overlaps = 0;

    let lines = this.input.split("\n");

    for (const x of lines) {
      let pairs = x.split(",");
      let pair1 = pairs[0].split("-")
      let pair2 = pairs[1].split("-")

      let r1 = new Range(parseInt(pair1[0]), parseInt(pair1[1]));
      let r2 = new Range(parseInt(pair2[0]), parseInt(pair2[1]));

      let ov1 = r1.CheckOverlap(r2);
      let ov2 = r2.CheckOverlap(r1);

      if(ov1 == true || ov2 == true) {
        overlaps = overlaps + 1;
      }
    }
    return overlaps;
  }
}
