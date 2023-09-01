function udregnRektangelAreal (width, height) {
    return width * height;
}

function convertSquareMToSquareFt (m2) {
    return m2 * 10.7639;
}

console.log(convertSquareMToSquareFt(udregnRektangelAreal(10, 10)));