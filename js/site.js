function getValues() {
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
        let fbArray = fizzBuzz(fizzValue, buzzValue);
        displayResults(fbArray);
    } else {
        alert("You must enter integers")
    }
}

function fizzBuzz(fizzValue, buzzValue) {
    let returnArray = [];

    for (let i = 1; i <= 100; i++) {
        let value = ((i % fizzValue == 0 ? 'Fizz' : '') + (i % buzzValue == 0 ? 'Buzz' : '') || i);
        returnArray.push(value);
    }
    return returnArray;
}

function displayResults(fbArray) {
    //Get the table body element
    let tableBody = document.getElementById("results");

    //Get the template row
    let templateRow = document.getElementById("fbTemplate");

    //clear the table
    tableBody.innerHTML = "";

    for (let index = 0; index < fbArray.length; index += 5) {

        let tableRow = document.importNode(templateRow.content, true);

        let rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(fbArray[index]);
        rowCols[0].textContent = fbArray[index];

        rowCols[1].classList.add(fbArray[index + 1]);
        rowCols[1].textContent = fbArray[index + 1];

        rowCols[2].classList.add(fbArray[index + 2]);
        rowCols[2].textContent = fbArray[index + 2];

        rowCols[3].classList.add(fbArray[index + 3]);
        rowCols[3].textContent = fbArray[index + 3];

        rowCols[4].classList.add(fbArray[index + 4]);
        rowCols[4].textContent = fbArray[index + 4];

        tableBody.appendChild(tableRow);
    }

}