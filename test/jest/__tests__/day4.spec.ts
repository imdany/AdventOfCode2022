import {Day4} from "../../../src/Day4/Day4";

describe('Day 4', () => {
    const input = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`;

    it('Challenge 1', () => {
        let result = new Day4(input).Challenge1();
        expect(result).toBe(2);
    });

    it('Challenge 2', () => {
        let result = new Day4(input).Challenge2();
        expect(result).toBe(4);
    });
});
