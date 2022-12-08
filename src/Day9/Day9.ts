const {readFileSync} = require('fs');

export class Day9 {

    input: string;

    constructor(input: string) {
        if (input == null) {
            this.input = readFileSync('./src/Day9/input1.txt', 'utf8');
        } else {
            this.input = input;
        }
    }

    Challenge1():number {

        let lines = this.input.split("\n");

        return 0;
    }

    Challenge2():number {

        let lines = this.input.split("\n");

        return 0;
    }

}
