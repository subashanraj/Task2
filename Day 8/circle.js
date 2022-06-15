class circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;

    }
    circle2() {
        console.log("this is circle")
    }
    circleradius(radius) {
        console.log(radius + ' is the radius of circle')
    }
    circle(newradius, color) {
        console.log(newradius + ' is radius of circle' + " " + color + ' is  the color of circle')
    }
    getradius() {
        console.log(" radius of the circle is " + this.radius)
    }
    setradius(newradius) {
        this.radius = newradius;
    }
    getcolor() {
        console.log(' color of the circle is ' + this.color)
    }

    setcolor(newcolor) {
        this.color = newcolor;
    }
    getarea() {
        console.log('area of circle is ' + (Math.PI * Math.pow(this.radius, 2)).toFixed(2))
    }
    getcircumference() {
        console.log(' circumference of a circle is ' + (2 * Math.PI * this.radius).toFixed(2))
    }

}
const circle1 = new circle(1, "green");

circle1.circle2();
circle1.circleradius(12)
circle1.circle(8, "blue")
circle1.getradius();
circle1.setradius(5)
circle1.getradius();
circle1.getcolor();
circle1.setcolor("orange");
circle1.getcolor();
circle1.getarea();
circle1.getcircumference();


//output

// PS D:\Subash\Task\Day 7> node ./circle.js
// this is circle
// 12 is the radius of circle
// 8 is radius of circle blue is  the color of circle
//  radius of the circle is 1
//  radius of the circle is 5
//  color of the circle is green
//  color of the circle is orange
// area of circle is 78.54
//  circumference of a circle is 31.42