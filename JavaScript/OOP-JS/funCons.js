function laptop(brand,price,cpu){
    this.brand = brand;
    this.price = price;
    this.cpu = cpu;

    this.details = function(){
        console.log(`this is the brand : "${this.brand}" and the price is : ${this.price}k`);
    }

}

let lap1 = new laptop("HP",35,"i9")
let lap2 = new laptop("Asus",40,"i9")
let lap3 = new laptop("Lenevo",42,"i9")

lap1.details()

console.log(lap1);
console.log(lap2);