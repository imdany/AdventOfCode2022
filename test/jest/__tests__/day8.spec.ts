import {Day8} from "../../../src/Day8/Day8";

describe('Day 8', () => {

    const input = `30373
25512
65332
33549
35390`

    it('Challenge 1', () => {
        let result = new Day8(input).Challenge1();
        expect(result).toBe(21);
    });

    it('Challenge 2', () => {
        let result = new Day8(input).Challenge2();
        expect(result).toBe(8);
    });
});
