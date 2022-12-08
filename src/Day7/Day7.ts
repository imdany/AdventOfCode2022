const {readFileSync} = require('fs');

let challenge1: number[] = [];
let challenge2: Array<number>  = [];

class File {

  name: string;
  size: number;

  constructor(name: string, size:number) {
    this.name = name;
    this.size = size;
  }

}

class Dir {
  parentDir: Dir;
  name: string;
  files: Map<string, File>;
  dirs: Map<string, Dir>;



  constructor(name: string, parentDir: Dir) {
    this.parentDir = parentDir;
    this.name = name;
    this.files = new Map();
    this.dirs = new Map();
  }

  AddFile(file: File) {
    this.files.set(file.name, file);
  }

  AddDir(directory: Dir) {
    this.dirs.set(directory.name, directory);
  }

  GetSize(): number {
    let size = 0
    // Get size of files
    this.files.forEach((value: File, key: string) => {
      size = size + value.size
    });

    // Get size of folders
    if(this.dirs.size > 0) {
      this.dirs.forEach((value: Dir, key: string) => {
        size = size + value.GetSize()
      });
    }
    if(size < 100000) {
      challenge1.push(size);
    }
    challenge2.push(size);
    return size;
  }

}

export class Day7 {

  currentDir: Dir;

  input: string;

  constructor(input: string) {
    if (input == null) {
      this.input = readFileSync('./src/Day7/input1.txt', 'utf8');
    } else {
      this.input = input;
    }

    this.ParseFileSystem();
  }


  root = new Dir("/", null);

  ParseFileSystem() {
    let lines = this.input.split("\n");

    for (var i = 0; i<lines.length; i++) {
      let x = lines[i];
      if (x === ""){

      } else {
        if(x.includes("$")) {
          if (x.includes("cd")) {
            var dirName = x.split(" ")[2];
            if (dirName === "/") {
              this.currentDir = this.root;
            } else if (dirName === "..") {
              this.currentDir = this.currentDir.parentDir;
            } else {
              this.currentDir = this.currentDir.dirs.get(dirName);
            }
          }
          if (x.includes("ls")) {
            while (i + 1 < lines.length && !lines[i + 1].includes("$")) {
              i = i + 1;
              var newLine = lines[i];
              if(newLine === ""){

              } else {
                var split = newLine.split(" ")
                if (split[0] == "dir") {
                  this.currentDir.AddDir(new Dir(split[1], this.currentDir));
                } else {
                  this.currentDir.AddFile(new File(split[1], parseInt(split[0])));
                }
              }
            }
          }
        }
      }
    }
  }


  Challenge1():number {
    challenge1 = [];
    let size = this.root.GetSize();

    console.log(size);
    let c1 = challenge1.reduce((partialSum, a) => partialSum + a, 0);

    return c1
  }

  Challenge2():number {
    challenge2 = [];
    let size = this.root.GetSize();
    let freeSpace = 70000000 - size;

    let needed = 30000000 - freeSpace;

    console.log("Used size: " + size);
    console.log("Needed size: " + needed);

    let candidate = challenge2.filter( x => x >= needed)[0];
    console.log(candidate);

    return candidate;
  }

}
