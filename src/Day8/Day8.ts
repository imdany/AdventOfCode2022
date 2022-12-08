const {readFileSync} = require('fs');

export class Day8 {

    input: string;

    constructor(input: string) {
        if (input == null) {
            this.input = readFileSync('./src/Day8/input1.txt', 'utf8');
        } else {
            this.input = input;
        }
    }

    ParseInput(input: string[]): number[][] {
        // Assuming square matrix
        let size = input.length

        let inputArray: number[][] = Array(size).fill(0).map(() => Array(size));

        for (let i = 0; i< size; i++) {
            let line = input[i].split("");
            for (let j = 0; j< size; j++) {
                inputArray[i][j] = parseInt(line[j]);
            }
        }
        return inputArray
    }

    Challenge1():number {

        let lines = this.input.split("\n");

        let inputArray = this.ParseInput(lines);
        let size = inputArray[0].length;

        let possibleLocations: number[][] = Array(size).fill(0).map(() => Array(size).fill(0));

        // Iterate over array elements
        for (let i = 0; i< inputArray.length; i++) {
            for (let j = 0; j< inputArray[0].length; j++) {

                // Border
                if(i == 0 || j == 0 || j == size-1 || i == size-1) {
                    possibleLocations[i][j] = 1;
                } else {
                    let checksTop = []
                    let checksBottom = []
                    let checksRight = []
                    let checksLeft = []

                    // For each position check 4 directions
                    let position = inputArray[i][j]

                    // Check right trees
                    for(let x = j+1; x < inputArray.length; x++) {
                        let checkedPosition = inputArray[i][x]

                        if(position <= checkedPosition){
                            checksRight.push(1)
                        } else {
                            checksRight.push(0)
                        }
                    }

                    // Check Left trees
                    for(let x = j-1; x >= 0; x--) {
                        let checkedPosition = inputArray[i][x]

                        if(position <= checkedPosition){
                            checksLeft.push(1)
                        } else {
                            checksLeft.push(0)
                        }
                    }

                    // Check down
                    for(let y = i+1; y < inputArray.length; y++) {
                        let checkedPosition = inputArray[y][j]

                        if(position <= checkedPosition){
                            checksBottom.push(1)
                        } else {
                            checksBottom.push(0)
                        }
                    }

                    // Check up
                    for(let y = i-1; y >= 0 ; y--) {
                        let checkedPosition = inputArray[y][j]

                        if(position <= checkedPosition){
                            checksTop.push(1)
                        } else {
                            checksTop.push(0)
                        }
                    }

                    let onesTop = checksTop.filter( x => x === 1)
                    let onesBottom = checksBottom.filter( x => x === 1)
                    let onesRight = checksRight.filter( x => x === 1)
                    let onesLeft = checksLeft.filter( x => x === 1)

                    if(onesTop.length != 0 && onesBottom.length != 0 && onesRight.length != 0 && onesLeft.length != 0) {
                        possibleLocations[i][j] = 2
                    } else {
                        possibleLocations[i][j] = 1
                    }
                }
            }
        }

        let x = 0;
        for (var i = 0; i<possibleLocations.length; i++) {
            x  = x +  possibleLocations[i].filter(x=> x === 1).length
        }
        return x;
    }

    Challenge2():number {

        let lines = this.input.split("\n");

        let inputArray = this.ParseInput(lines);
        let size = inputArray[0].length;

        let scenicValue = 0;

        for (let i = 0; i< inputArray.length; i++) {
            for (let j = 0; j < inputArray[0].length; j++) {

                // Border
                if (i == 0 || j == 0 || j == size - 1 || i == size - 1) {
                    // Nothing
                } else {
                    // Calculate scenic view for each tree
                    let position = inputArray[i][j]

                    // Check right trees
                    let distanceRight = 0;
                    let canContinue = true
                    for (let x = j + 1; x < inputArray.length && canContinue; x++) {
                        let checkedPosition = inputArray[i][x]

                        if (position > checkedPosition) {
                            distanceRight = distanceRight + 1;
                        } else if( position === checkedPosition || position < checkedPosition) {
                            distanceRight = distanceRight + 1;
                            canContinue = false;
                        } else {
                            canContinue = false;
                        }
                    }


                    // Check Left trees
                    let distanceLeft = 0;
                    canContinue = true
                    for(let x = j-1; x >= 0 && canContinue; x--) {
                        let checkedPosition = inputArray[i][x]

                        if (position > checkedPosition) {
                            distanceLeft = distanceLeft + 1;
                        } else if( position === checkedPosition || position < checkedPosition) {
                            distanceLeft = distanceLeft + 1;
                            canContinue = false;
                        } else {
                            canContinue = false;
                        }
                    }

                    // Check down
                    let distanceDown = 0;
                    canContinue = true
                    for(let y = i+1; y < inputArray.length && canContinue; y++) {
                        let checkedPosition = inputArray[y][j]

                        if (position > checkedPosition) {
                            distanceDown = distanceDown + 1;
                        } else if( position === checkedPosition || position < checkedPosition) {
                            distanceDown = distanceDown + 1;
                            canContinue = false;
                        } else {
                            canContinue = false;
                        }
                    }

                    // Check up
                    let distanceUp = 0;
                    canContinue = true
                    for(let y = i-1; y >= 0 && canContinue ; y--) {
                        let checkedPosition = inputArray[y][j]

                        if (position > checkedPosition) {
                            distanceUp = distanceUp + 1;
                        } else if( position === checkedPosition || position < checkedPosition) {
                            distanceUp = distanceUp + 1;
                            canContinue = false;
                        } else {
                            canContinue = false;
                        }
                    }

                    let scenicValueTmp = distanceUp * distanceDown * distanceRight * distanceLeft;
                    if(scenicValueTmp > scenicValue){
                        scenicValue = scenicValueTmp;
                    }
                }
            }
        }

        return scenicValue;
    }

}
