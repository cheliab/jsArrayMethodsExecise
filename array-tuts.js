function generateNumbers(maxNum) {
    let numbers = [];
    
    for (i = 1; i <= maxNum; i++) {
        numbers.push(i);
    }

    return numbers;
}

function getFooBar(maxNum) {
    let numbers = generateNumbers(maxNum);

    let fooBarArr = numbers.map(item => { 
        if (item % 3 === 0 && item % 5 !== 0)
            return 'foo'
        else if (item % 5 === 0 && item % 3 !== 0)
            return 'bar';
        else if (item % 3 === 0 && item % 5 === 0)
            return 'foo bar';
        else
            return item.toString();
    });

    let sum = fooBarArr
        .filter(item => !isNaN(item))
        .map(item => parseInt(item))
        .reduce((accumulator, currentValue) => accumulator + currentValue);

    return { 
        "arr": fooBarArr,
        "numSum": sum
    };
}

console.log(getFooBar(5));