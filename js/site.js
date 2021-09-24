function getValues() {
    let fizzNumber = document.getElementById("fizzNumber").value;
    let buzzNumber = document.getElementById("buzzNumber").value;

    fizzNumber = parseInt(fizzNumber);
    buzzNumber = parseInt(buzzNumber);

    let numbers = generateNumbers(fizzNumber, buzzNumber);
    displayResults(numbers);
}

function generateNumbers(fizzNumber, buzzNumber) {
    let numbers = [];

    for (let i = 1; i <= 100; i++) {
        if (i % fizzNumber == 0 && i % buzzNumber == 0) {
            numbers.push("FIZZBUZZ");
        } else if (i % fizzNumber == 0) {
            numbers.push("FIZZ");
        } else if (i % buzzNumber == 0) {
            numbers.push("BUZZ");
        } else {
            numbers.push(i);
        }
    }
    return numbers;
}

function displayResults(numbers) {
    let templateRows = "";

    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        templateRows += `<tr><td>${number}</td></tr>`
    }
    document.getElementById("results").innerHTML = templateRows;
}
// From Hundreds
// function displayNumbers(numbers) {
//     let templateRows = "";
//     let className = "";
//     for (let i = 0; i < numbers.length; i++) {
//         let number = numbers[i];
//         if (number % 2 == 0) {
//             className = "even";
//         } else {
//             className = "odd";
//         }
//         templateRows += `<tr><td class="${className}">${number}</td></tr>`
//     }
//     document.getElementById("results").innerHTML = templateRows;
// }