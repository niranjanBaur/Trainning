class Shape {
    color = "red"
    
    getcolor() {
        console.log(`Now the color is ${this.color}`);
        return this;
    }

    setcolor(newColor){
        this.color = newColor
        console.log(`Color name changed to ${this.color}`)
        return this;
    }
    get getColor() {
        console.log(`Now the color is ${this.color}`);
        return this;
    }

    set setColor(newColor){
        this.color = newColor
        console.log(`Color name changed to ${this.color}`)
        return this;
    }
}

class Rectangle extends Shape {
    static area(len , bred){
         console.log(2*(len+bred));
         return this;
    }
}



const rec = new Rectangle()

rec.getColor;  // getter
rec.setColor = "blue" // setter
rec.getColor;  // getter

// ====================================
// ====================================

// method chaining
rec.getcolor().setcolor("red").getcolor(); // get and set is not work in method chaining

Rectangle.area(10,5) // call static method using class name

