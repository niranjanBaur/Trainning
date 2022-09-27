class Shape {
    getColor() {
        console.log("Red");
    }
}

class Rectangle extends Shape {

}

const rec = new Rectangle()

rec.getColor(); 