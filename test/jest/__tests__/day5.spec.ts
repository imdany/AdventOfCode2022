import {Day5} from "../../../src/Day5/Day5";

describe('Day 5', () => {

    const queue = [["Z", "N"], ["M", "C", "D"], ["P"]];

    const input = `move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;

    it('Challenge 1', () => {
        let result = new Day5(input).Challenge1(queue);
        expect(result).toBe("CMZ");
    });

    it('Challenge 2', () => {
        let result = new Day5(input).Challenge2(queue);
        expect(result).toBe("MCD");
    });
});
