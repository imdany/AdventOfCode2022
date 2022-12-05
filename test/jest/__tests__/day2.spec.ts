import {Day2} from "../../../src/Day2/Day2";

describe('Day 2', () => {
    const input = `A Y
B X
C Z`;

    it('Challenge 1', () => {
        let result = new Day2(input).Challenge1();
        expect(result).toBe(15);
    });

    it('Challenge 2', () => {
        let result = new Day2(input).Challenge2();
        expect(result).toBe(12);
    });
});