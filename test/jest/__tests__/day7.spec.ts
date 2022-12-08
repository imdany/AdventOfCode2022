import {Day7} from "../../../src/Day7/Day7";

describe('Day 7', () => {

    const input = `$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`

    it('Challenge 1', () => {
        let result = new Day7(input).Challenge1();
        expect(result).toBe(95437);
    });

    it('Challenge 2', () => {
        let result = new Day7(input).Challenge2();
        expect(result).toBe(24933642);
    });
});
