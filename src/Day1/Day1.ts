const {readFileSync} = require('fs');

export class Day1 {
    constructor(input: string) {
        if(input == null) {
            this.input = readFileSync('./src/Day1/input1.txt', 'utf8');
        } else {
            this.input = input;
        }
    }
    input: string;
    inventory: Map<number, number> = null;

    Challenge1(): number {
        let data = this.input.split("\r\n");

        let result: Map<number, number> = new Map();
        let elfID: number = 1;
        for( let i = 0; i< data.length; i++) {

            if(data[i] === ""){
                elfID = elfID + 1;
            } else {
                if(result.has(elfID)){
                    var current = result.get(elfID);
                    result.set(elfID, parseInt(data[i])+current);
                } else {
                    result.set(elfID, parseInt(data[i]))
                }
            }
        }
        this.inventory = result;
        let max = 0;
        result.forEach((value: number, key: number) => {
            if(max < value){
                max = value
                console.log("Current Max: " + max.toString() + " in " + key.toString());
            }
        });
        return max;
    }

    Challenge2(): number {
        let values: number[] = []

        this.inventory.forEach((value: number, key: number) => {
            values.push(value);
        });

        let sortedValues = values.sort(function(a, b) {
            return  b-a;});

        let r2 = sortedValues[0] + sortedValues[1] + sortedValues[2]
        console.log(r2);
        return r2;
    }
}

// Issues sorting array of int
// How to create array of arrays

// Learnt:
// Sorting values in an array
// Using hashmaps
// Iterate over keys
// For loops
