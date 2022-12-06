import {Day6} from "../../../src/Day6/Day6";

describe('Day 6', () => {


    const input = `mjqjpqmgbljsphdztnvjfqwrcgsmlb`;

    it('Challenge 1', () => {
        let result = new Day6("mjqjpqmgbljsphdztnvjfqwrcgsmlb").Challenge1();
        expect(result).toBe(7);

        let result1 = new Day6("bvwbjplbgvbhsrlpgdmjqwftvncz").Challenge1();
        expect(result1).toBe(5);

        let result2 = new Day6("nppdvjthqldpwncqszvftbrmjlhg").Challenge1();
        expect(result2).toBe(6);

        let result3 = new Day6("nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg").Challenge1();
        expect(result3).toBe(10);

        let result4 = new Day6("zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw").Challenge1();
        expect(result4).toBe(11);
    });

    it('Challenge 2', () => {
        let result = new Day6("mjqjpqmgbljsphdztnvjfqwrcgsmlb").Challenge2();
        expect(result).toBe(19);

        let result1 = new Day6("bvwbjplbgvbhsrlpgdmjqwftvncz").Challenge2();
        expect(result1).toBe(23);

        let result2 = new Day6("nppdvjthqldpwncqszvftbrmjlhg").Challenge2();
        expect(result2).toBe(23);

        let result3 = new Day6("nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg").Challenge2();
        expect(result3).toBe(29);

        let result4 = new Day6("zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw").Challenge2();
        expect(result4).toBe(26);
    });
});
