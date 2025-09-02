export class Person {
    // public name?: string;
    // private address: string;

    constructor(
        public firstName: string, 
        public secondName: string, 
        private address: string = "No address"
    ) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.address = address;
    }
}

/////////// This is how to do it with extends
// export class Hero extends Person {
//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string
//     ) {
//         super(realName, "New York");
//     }
// }

/////////// This is how to do it with composition
export class Hero {
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ) {

    }
}


const tony: Person = new Person("Tony", "Stark", "New York")
const ironman = new Hero("ironman", 45, 'Tony', tony)

console.log(ironman)
// console.log(ironman.name)
// console.log(ironman.address)   // TypeScript lo marca como un error, sin embargo compila y funciona