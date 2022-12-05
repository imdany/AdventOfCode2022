const {readFileSync} = require('fs');
import {CraneSystem} from "./CraneSystem"

export class Day5 {

  input: string;
  queue: string[][];
  constructor(input: string) {
    if(input == null) {
      this.input = readFileSync('./src/Day5/input1.txt', 'utf8');
    } else {
      this.input = input;
    }
  }

  GetQueue(): string[][] {
    return [
        ["Z", "J", "N", "W", "P", "S"],
        ["G", "S", "T"],
        ["V", "Q", "R", "L", "H"],
        ["V", "S", "T", "D"],
        ["Q", "Z", "T", "D", "B", "M", "J"],
        ["M", "W", "T", "J", "D", "C", "Z", "L"],
        ["L", "P", "M", "W", "G", "T", "J"],
        ["N", "G", "M", "T", "B", "F", "Q", "H"],
        ["R", "D", "G", "C", "P", "B", "Q", "W"]];
  }

  Challenge1(queue: string[][]):string {
    if(queue == null) this.queue = this.GetQueue(); else this.queue = queue;

    let craneSystem = new CraneSystem(this.queue);
    let lines = this.input.split("\n");

    for (const x of lines) {
      craneSystem.MoveCrane(x);
    }
    return craneSystem.GetTopStack();
  }

  Challenge2(queue: string[][]):string {
    if(queue == null) this.queue = this.GetQueue(); else this.queue = queue;

    let craneSystem = new CraneSystem(this.queue)
    let lines = this.input.split("\n");

    for (const x of lines) {
      craneSystem.MoveCrane2(x);
    }
    return craneSystem.GetTopStack();
  }

}
