var message = '';
var quote;

function getRandomQuote() {
	
}

// Function to grab a value from 0-255 for use in generating a new background color
function getNew256() {
	return Math.floor(Math.random() * 256);
}

// Function that sets the CSS background-color for the <body> tag on index.html to random color using getNew256() three times
function getNewRGBColor() {
	document.body.style.backgroundColor = 'rgb(' + getNew256() + ',' + getNew256() + ',' + getNew256() + ')';
}

function printQuote() {
	getNewRGBColor();
}


// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "makeQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

