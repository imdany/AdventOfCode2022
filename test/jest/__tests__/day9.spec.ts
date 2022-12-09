import {Day9} from "../../../src/Day9/Day9";

describe('Day 9', () => {

    const input = `R 4
U 4
L 3
D 1
R 4
D 1
L 5
R 2`

    const input2 = `R 5
U 8
L 8
D 3
R 17
D 10
L 25
U 20`

    it('Challenge 1', () => {
        let result = new Day9(input).Challenge1(2, 1);
        expect(result).toBe(13);
    });

    it('Challenge 2', () => {
        let result = new Day9(input).Challenge2(10, 9);
        expect(result).toBe(1);
    });

    it('Challenge 2-1', () => {
        let result2 = new Day9(input2).Challenge2(10, 9);
        expect(result2).toBe(36);
    });
});
