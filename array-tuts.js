function generateNumbers(maxNum) {
    let numbers = [];
    
    for (i = 1; i <= maxNum; i++) {
        numbers.push(i);
    }

    return numbers;
}

function getFooBar(maxNum) {
    let numbers = generateNumbers(maxNum);

    let filteredNumbers = numbers.filter(item => item % 3 === 0 || item % 5 == 0);

    let result = filteredNumbers.map(item => { 
        if (item % 3 === 0 && item % 5 !== 0)
            return 'foo'
        else if (item % 5 === 0 && item % 3 !== 0)
            return 'bar';
        else if (item % 3 === 0 && item % 5 === 0)
            return 'foo bar';
        else
            return '';
    });

    return result;
}

console.log(getFooBar(20));