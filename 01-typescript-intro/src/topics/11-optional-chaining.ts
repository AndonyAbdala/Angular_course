export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Fernando',
}

const passenger2: Passenger = {
    name: 'Melisa',
    children: ["Natalia", "Mateo"],
}

const printChildren = ( passenger: Passenger) => {
    // const howManyChildren = passenger.children?.length || 0;
    const howManyChildren = passenger.children!.length;

    console.log(passenger.name, howManyChildren)
}

printChildren(passenger1)
printChildren(passenger2)