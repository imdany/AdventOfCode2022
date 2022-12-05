export class Range {

    start: number;
    end: number;

    constructor(initial: number, final: number) {
        this.start = initial;
        this.end = final;
    }

    CheckFullOverlap(other: Range): boolean {
        if(this.start <= other.start && this.end >= other.end) {
            return true;
        } else {
            return false;
        }
    }

    CheckOverlap(other: Range): boolean {
        if(this.start <= other.start && this.end >= other.end) {
            return true;
        } else if (this.start >= other.start && this.start <= other.end) {
            return true;
        } else if (this.end >= other.start && this.end <= other.end) {
            return true;
        } else {
            return false;
        }
    }

}