import {Day3} from "../../../src/Day3/Day3";

describe('Day 3', () => {
    const input = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

    it('Challenge 1', () => {
        let result = new Day3(input).Challenge1();
        expect(result).toBe(157);
    });

    it('Challenge 2', () => {
        let result = new Day3(input).Challenge2();
        expect(result).toBe(70);
    });
});
