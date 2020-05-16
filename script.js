// Takes the div element already created in the HTML file and assigns it a varible.
const gridContainer = document.getElementById("gridContainer");
var squareSelector;
// our iterator.

// Creates 16 iterations of new square divs to create my grid.
for (i = 0; i < 16; i++){
    // if our iterator [i] is a multiplicative of 4 it will create a new gridRow div.
    if (i % 4 == 0) {
        // These variables must be created inside the iterator for loop to create new 
        // iterations of them.

        // Creates a new div element and assigns it to the gridRow variable.
        var gridRow = document.createElement('div');
        gridRow.className = "gridRow";
        // Creates a new div element and assigns it ot the newSquare variable.
        var newSquare = document.createElement('div');
        newSquare.className = "square";

        // This appends the gridRow div to the gridContainer div.
        // Appends means placing it inside of the other div or making it the parent node.
        gridContainer.appendChild(gridRow);
        // This appends the newly created newSquare div to the gridRow div that we just created.
        gridRow.appendChild(newSquare);
    }

    // will create our squares in the newly created gridRow div.
    else {
        var newSquare = document.createElement('div');
        newSquare.className = "square";
        gridRow.appendChild(newSquare);
    }
}

function testAlert() {
    alert("hello Brendan, well done!");
}

document.addEventListener("DOMContentLoaded", function() {
    squareSelector = document.querySelectorAll('.square');
    squareSelector.addEventListener('mouseover', testAlert());
});  