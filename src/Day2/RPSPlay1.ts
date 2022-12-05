export class RPSPlay1 {
    p1: string;
    p2: string;

    s1: number = 0;
    s2:number = 0;

    mapScore: Record<string, number> = {'ROCK': 1, "PAPER": 2, "SCISSORS": 3};

    constructor(pr1: string, pr2: string) {
        this.p1 = this.ParseP1Input(pr1);
        this.p2 = this.ParseP2Input(pr2);

        this.GetScore();
    }

    ParseP1Input(p1: string): string {
        let output: string = ""
        switch (p1) {
            case "A":
                output = "ROCK";
                break;
            case "B":
                output = "PAPER";
                break;
            case "C":
                output = "SCISSORS";
                break;
            default:
                console.log("Invalid input");
        }
        return output;
    }

    ParseP2Input(p2: string): string {
        let output: string = ""
        switch (p2) {
            case "X":
                output = "ROCK";
                break;
            case "Y":
                output = "PAPER";
                break;
            case "Z":
                output = "SCISSORS";
                break;
            default:
                console.log("Invalid input");
        }
        return output;
    }

    GetScore(){
        let winner: string = ""
        if(this.p1 === this.p2) {
            winner = "DRAW"
        } else if (this.p1 === "ROCK" && this.p2 === "PAPER") {
            winner = "P2";
        } else if (this.p1 === "ROCK" && this.p2 === "SCISSORS") {
            winner = "P1";
        } else if (this.p1 === "PAPER" && this.p2 === "SCISSORS") {
            winner = "P2";
        } else if (this.p1 === "PAPER" && this.p2 === "ROCK") {
            winner = "P1"
        } else if (this.p1 === "SCISSORS" && this.p2 === "ROCK") {
            winner = "P2";
        }else if (this.p1 === "SCISSORS" && this.p2 === "PAPER") {
            winner = "P1"
        }

        // Winner score
        if (winner === "P1") {
            this.s1 = this.s1 + 6;
        } else if (winner === "P2") {
            this.s2 = this.s2 + 6;
        } else if (winner === "DRAW") {
            this.s1 = this.s1 + 3;
            this.s2 = this.s2 + 3;
        }

        // Play score
        this.s1 = this.s1 + this.mapScore[this.p1];
        this.s2 = this.s2 + this.mapScore[this.p2];
    }
}