export class CraneSystem {

    queue;

    constructor(queue: string[][]) {
        this.queue = queue;
    }

    ParseInput(input: String): number[] {
        let splitted = input.split(" ");
        let crane = parseInt(splitted[1]);
        let initial = parseInt(splitted[3]);
        let final = parseInt(splitted[5]);
        return [crane, initial, final];
    }

    MoveCrane(input: String) {
        let instructions = this.ParseInput(input);

        for (var i = 0; i < instructions[0]; i++){
            var crane = this.queue[instructions[1]-1].pop();
            this.queue[instructions[2]-1].push(crane);
        }
    }

    MoveCrane2(input: String) {
        let instructions = this.ParseInput(input);

        let stack = [];

        for (var i = 0; i < instructions[0]; i++){
            stack.push(this.queue[instructions[1]-1].pop());
        }
        let stackInitialSize = stack.length;
        for (var i = 0; i < stackInitialSize; i++){
            this.queue[instructions[2]-1].push(stack.pop());
        }
    }

    GetTopStack(): string {
        let result: string = ""
        for (const x of this.queue){
            result = result.concat(x[x.length-1]);
        }
        return result
    }
}