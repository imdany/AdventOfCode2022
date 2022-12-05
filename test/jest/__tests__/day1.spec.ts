import {Day1} from "../../../src/Day1/Day1";

describe('Day 1', () => {
    const input = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;
    let d1 = new Day1(input);

    it('Challenge 1', () => {
        let result = d1.Challenge1();
        expect(result).toBe(24000);
    });

    it('Challenge 2', () => {

        d1.Challenge1();
        let result = d1.Challenge2();

        expect(result).toBe(45000);
    });
});