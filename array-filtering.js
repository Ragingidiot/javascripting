function isEven(even) {
    return even % 2 === 0;
}

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var filtered = numbers.filter(isEven);

console.log(filtered);
