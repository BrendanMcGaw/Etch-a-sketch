// Takes the div element already created in the HTML file and assigns it a varible.
const gridContainer = document.getElementById("gridContainer");
var gridSize = 64;
function chooseGridSize() {
    prompt
}
// our iterator.

// Creates 16 iterations of new square divs to create my grid.
for (i = 0; i < gridSize; i++){
    // Creates a new div element and assigns it ot the newSquare variable.
    var newSquare = document.createElement('div');
    newSquare.className = "square";

    // Appends means placing it inside of the other div or making it the parent node.
    gridContainer.appendChild(newSquare);
}
var squares = document.getElementsByClassName("square");

// looks for the index number of the square the you have moused over and applies the style
// to that particular square
for (i = 0; i < squares.length; i++) {
    squares[i].addEventListener("mouseover", function() {
        this.style.backgroundColor = 'Yellow';
    })
}