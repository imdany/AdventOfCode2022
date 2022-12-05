import {RPSPlay1} from "./RPSPlay1";
import {RPSPlay2} from "./RPSPlay2";

const {readFileSync} = require('fs');


export class Day2 {

    constructor(input: string) {
        if(input == null) {
            this.input = readFileSync('./src/Day2/input1.txt', 'utf8');
        } else {
            this.input = input;
        }
    }
    input: string;

    Challenge1(): number {
        let s1: number = 0;
        let s2: number = 0;

        let lines = this.input.split("\n");
        for(const x of lines) {
            let values = x.split(" ");
            let play = new RPSPlay1(values[0], values[1]);
            s1 = s1 + play.s1;
            s2 = s2 + play.s2
        }
        console.log(s1, s2);
        return s2;
    }

    Challenge2(): number {
        let s1: number = 0;
        let s2: number = 0;

        let lines = this.input.split("\n");
        for(const x of lines) {
            let values = x.split(" ");
            let play = new RPSPlay2(values[0], values[1]);
            s1 = s1 + play.s1;
            s2 = s2 + play.s2
        }

        console.log(s1, s2);
        return s2;
    }
}


// Working with constructors
// Multiples classes
// Iterating over arrays
// Setting up TypeScript project with JEST
// Using Record for creating maps
