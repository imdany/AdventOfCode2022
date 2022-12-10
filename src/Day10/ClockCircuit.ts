export class ClockCircuit {

    cycle: number;
    x: number;
    output1: number;

    output2: string[];

    constructor() {
        this.cycle = 0;
        this.x = 1;
        this.output1 = 0;
        this.output2 = Array(240).fill(".");
    }

    checkCycle() {
        if(this.cycle == 20) {
            this.output1 = this.x * 20;
        } else if(this.cycle == 60) {
            this.output1 += this.x * 60;
        } else if(this.cycle == 100) {
            this.output1 += this.x * 100;
        }else if(this.cycle == 140) {
            this.output1 += this.x * 140;
        }else if(this.cycle == 180) {
            this.output1 += this.x * 180;
        }else if(this.cycle == 220) {
            this.output1 += this.x * 220;
        }

        if(this.x+1 >= this.cycle % 40 && this.x-1 <= this.cycle % 40) {
            this.output2[this.cycle-1] = "#"
        }

    }

    ProcessInstruction(input: String, amount: number) {
        if(input === "noop") {
            this.checkCycle()
            this.cycle += 1;
        } else if (input === "addx") {
            this.checkCycle()
            this.cycle += 1;
            this.checkCycle()
            this.cycle += 1;
            this.x += amount;
        }
    }

    GetOutput1(): number {
        return this.output1;
    }
}