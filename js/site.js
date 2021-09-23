function getValues() {
    let fizzNumber = document.getElementById("fizzNumber").value;
    let buzzNumber = document.getElementById("buzzNumber").value;

    fizzNumber = parseInt(fizzNumber);
    buzzNumber = parseInt(buzzNumber);
}

function generateNumbers() {

}

function displayResults() {

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