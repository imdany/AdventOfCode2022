import { InputAction } from "./InputAction";

class Position {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

export class Grid {

  grid: Array<Array<string>>;
  visits: Map<string, number>;
  positions: Array<Position>

  track: number;
  len: number;

  constructor(len: number, track: number) {
    let size = 10000;
    this.grid = Array(size).fill("0").map(() => Array(size).fill("0"));

    this.positions = [ ];
    this.visits = new Map<string, number>();

    this.len = len;
    this.track = track;

    for(var i = 0; i<this.len; i++) {
      this.positions.push(new Position(0, 0));
    }

  }

  GetVisited(): number {
    return this.visits.size;
  }

  MoveAll(inputAction: InputAction) {
    this.ExecuteAction(0, 1, inputAction);

    for (var z = 1; z<this.len - 1; z++) {
      this.ExecuteAction(z, z+1, new InputAction("lag", 0));
    }

  }

  ExecuteAction(head: number, tail: number, inputAction: InputAction) {

    if(inputAction.direction === "") {
    } else {


      // Move Head
      if (inputAction.direction === "R") {
        this.positions[head].x += 1;
      } else if (inputAction.direction === "L") {
        this.positions[head].x -= 1;
      } else if (inputAction.direction === "U") {
        this.positions[head].y += 1;
      } else if (inputAction.direction === "D") {
        this.positions[head].y -= 1;
      }
      // Move Tail
      let distanceY = Math.sqrt(Math.pow((this.positions[head].y - this.positions[tail].y), 2))
      let distanceX = Math.sqrt(Math.pow((this.positions[head].x - this.positions[tail].x), 2))
      if (distanceY <= 1 && distanceX <= 1) {

      } else if (this.positions[tail].x == this.positions[head].x) {
        if (this.positions[tail].y < this.positions[head].y) {
          this.positions[tail].y += 1;
        } else {
          this.positions[tail].y -= 1;
        }
      } else if (this.positions[tail].y == this.positions[head].y) {
        if (this.positions[tail].x < this.positions[head].x) {
          this.positions[tail].x += 1;
        } else {
          this.positions[tail].x -= 1;
        }
      } else {
        if (this.positions[tail].x < this.positions[head].x) {
          this.positions[tail].x += 1;
        } else {
          this.positions[tail].x -= 1;
        }
        if (this.positions[tail].y < this.positions[head].y) {
          this.positions[tail].y += 1;
        } else {
          this.positions[tail].y -= 1;
        }
      }

        if(tail == this.track) {
          this.visits.set(this.positions[tail].x+"-"+this.positions[tail].y, 1);
        }

      }

  }


}
