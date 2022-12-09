import { Grid } from "./Grid";
import { InputAction } from "./InputAction";

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

    Challenge1(len: number, track: number):number {

        let actions: InputAction[] = []

        let lines = this.input.split("\n");
        for(const line of lines) {
            let l = line.split(" ");
            actions.push(new InputAction(l[0], parseInt(l[1])));
        }


        let grid = new Grid(2, 1);
        for(const a of actions) {
            for (var l = 0; l<a.amount; l++) {
                grid.ExecuteAction(0, 1, a);
            }
        }

        return grid.GetVisited();
    }

    Challenge2(len: number, track: number):number {

        let actions: InputAction[] = []

        let lines = this.input.split("\n");
        for(const line of lines) {
            let l = line.split(" ");
            actions.push(new InputAction(l[0], parseInt(l[1])));
        }


        let grid = new Grid(len, track);
        for(const a of actions) {
            for (var l = 0; l<a.amount; l++) {
                grid.MoveAll(a);
            }

        }

        return grid.GetVisited();
    }

}
