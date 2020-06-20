// Takes the div element already created in the HTML file and assigns it a varible.
const gridContainer = document.getElementById("gridContainer");
var rows = document.getElementsByClassName("rows");
var squares = document.getElementsByClassName("squares");

var gridSize = 16;
var rowHeight = 960 / gridSize;

// height must be 960px / gridSize

// Creates rows amounting to the size of the grid.
for (r = 0; r < gridSize; r++) {
    var newRow = document.createElement('div');
    gridContainer.appendChild(newRow).className = "rows";
}



// Creates 16 iterations of new square divs to create my grid.
for (i = 0; i < gridSize; i++){
    for (cell = 0; cell < rows.length; cell++) {
        var newSquare = document.createElement('div');
        newSquare.className = "squares";
        rows[i].appendChild(newSquare);
    }
}


// looks for the index number of the square the you have moused over and applies the style
// to that particular square
for (i = 0; i < squares.length; i++) {
    squares[i].addEventListener("mouseover", function() {
        this.style.backgroundColor = 'Yellow';
    })
}