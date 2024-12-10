abstract class Shape {
    abstract calculateArea(): number;
}

class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

const shapes: Shape[] = [
    new Rectangle(10, 5),
    new Circle(7)
];

shapes.forEach(shape => {
    console.log(`Area: ${shape.calculateArea()}`);
});
