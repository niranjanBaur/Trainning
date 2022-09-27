function laptop(brand,price,cpu){
    this.brand = brand;
    this.price = price;
    this.cpu = cpu
}

let lap1 = new laptop("HP",350,"i9")
let lap2 = new laptop("Asus",400,"i9")
let lap3 = new laptop("Lenevo",420,"i9")

console.log(lap1);
console.log(lap2);