import {ClockCircuit} from "./ClockCircuit";
import {InputAction} from "../Day9/InputAction";

const {readFileSync} = require('fs');

export class Day10 {

    input: string;

    constructor(input: string) {
        if (input == null) {
            this.input = readFileSync('./src/Day10/input1.txt', 'utf8');
        } else {
            this.input = input;
        }
    }

    Challenge1():number {

        let c = new ClockCircuit();

        let lines = this.input.split("\r\n");
        for(const line of lines) {
            let l = line.split(" ");
            c.ProcessInstruction(l[0], parseInt(l[1]));
        }
        return c.GetOutput1();
    }

    Challenge2():number {
        let c = new ClockCircuit();

        let lines = this.input.split("\r\n");
        for(const line of lines) {
            let l = line.split(" ");
            c.ProcessInstruction(l[0], parseInt(l[1]));
        }

        for (var i = 0; i<240; i++) {
            if(i % 40 == 0) {process.stdout.write('\n');}
            process.stdout.write(c.output2[i]);

        }
        return 0;
    }

}
