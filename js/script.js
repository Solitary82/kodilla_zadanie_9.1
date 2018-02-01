function getTriangleArea(a, h) {
    if (a && h >= 0) {
        return(a*h/2);
    } else {
        return("Nieprawidłowa wartość");
    }
}

console.log(getTriangleArea(10, 6));

var triangle1Area=getTriangleArea(10, 15);
console.log(triangle1Area);

var triangle2Area=getTriangleArea(20, 30);
console.log(triangle2Area);

var triangle3Area=getTriangleArea(5, 8);
console.log(triangle3Area);