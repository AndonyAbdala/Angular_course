export interface Product {
    description: string,
    price: number
}

const phone: Product = {
    description: "Nokia A1",
    price: 150
}

const tablet: Product = {
    description: "iPad",
    price: 250
}

export interface TaxCalculationOptions {
    tax: number,
    products: Product[]
}

export function taxCalculation( options: TaxCalculationOptions): [number, number] {
    let total = 0;

    const {tax, products} = options

    products.forEach( ({price}) => {
        total += price
    });

    return [total, total * tax ]
}

const shoppingCart: Product[] = [phone, tablet];

const optionns: TaxCalculationOptions = {
    tax: 0.15,
    products: shoppingCart
}

const [total, just_taxes] = taxCalculation(optionns);

// console.log("total: ", total);
// console.log("just_taxes: ", just_taxes);