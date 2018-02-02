function getTriangleArea(a, h) {
   
    "use strict";
    
    if (a  >= 0 && h >= 0) {
        return(a*h/2);
    } else {
        return("Nieprawidłowa wartość");
    }

}
    
    console.log(getTriangleArea(10, 6));

    var triangle1Area = getTriangleArea(10, 15);
    console.log(triangle1Area);

    var triange2Area = getTriangleArea(-2, 8);
    console.log(triange2Area);

    var triangle3Area = getTriangleArea(6, -30);
    console.log(triangle3Area);
