export class Person {
    // public name?: string;
    // private address: string;

    constructor(
        public name: string, 
        private address: string = "No address"
    ) {
        this.name = name;
        this.address = address;
    }
}

export class Hero extends Person {
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string
    ) {
        super(realName, "New York");
    }
}

const ironman = new Hero("ironman", 45, 'Tony')

console.log(ironman)
console.log(ironman.name)
console.log(ironman.address)   // TypeScript lo marca como un error, sin embargo compila y funciona