function diagonal(lenght) {
    var diag = (lenght*lenght) + (lenght*lenght)
    diag = Math.sqrt(diag);
    console.log("Side lenght of the square: " + lenght);
    console.log("Lenght of the diagonal: " + diag);
}

function triangleArea(sides) {
    var s = (sides[0] + sides[1] + sides[2]) / 2;
    var area = Math.sqrt(s * ((s - sides[0]) * (s - sides[1]) * (s - sides[2])));
    console.log("Side lenghts of the trianlge: " + sides[0] + ", " + sides[1] + ", " + sides[2]);
    console.log("Area of the triangle: " + area);
}

function circle(radius) {
    var circumference = 2 * Math.PI * radius;
    var surfaceArea = Math.PI * (radius * radius);
    console.log("Radius of the circle = 4");
    console.log("Circumference of the circle: " + circumference);
    console.log("Surface area of the circle: " + surfaceArea);
}

var squareLenght = 9;   
diagonal(squareLenght);

var sides = [5, 6, 7];
triangleArea(sides);

var radius = 4;
circle(radius);

