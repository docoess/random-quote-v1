var selectedQuote;
var quotesUsed = [];

// Function to grab random number from 0 to 9, which matches the index options for quoteList
function getRandomNum() {
	var rand = Math.floor(Math.random() * 10);
	return rand;
}

// Function to grab a random quoteID, check if it already has been used and logged, and then return a non-used quote
function getRandomQuote() {
	var quoteID = getRandomNum();
	var quote;
	while (quotesUsed.indexOf(quoteID) !== -1) {
		if (quotesUsed.length === 10) {
			quotesUsed = [];	
			break;
		} else {
			quoteID = getRandomNum();
		}
	}
	quote = quoteList[quoteID];
	quotesUsed.push(quoteID);
	return quote;
}

// Function to grab a value from 0-255 for use in generating a new background color
function getNew256() {
	return Math.floor(Math.random() * 256);
}

// Function that sets the CSS background-color for the <body> tag on index.html to random color using getNew256() three times
function getNewRGBColor() {
	document.body.style.backgroundColor = 'rgb(' + getNew256() + ',' + getNew256() + ',' + getNew256() + ')';
}

// Function for modifying the displayed quote, as well as calling getNewRGBColor() to change the color when quotes are changed
function printQuote() {
	var quote = getRandomQuote();
	var message = '';
	
	getNewRGBColor();
	message += '<p class="quote">' + quote.quote + '</p>';
	message += '<p class="source">' + quote.source + '</p>';
	if (quote.citation !== undefined) {
		message += '<span class="citation">' + quote.citation + '</span>';
	}
	if (quote.year !== undefined) {
		message += '<span class="year">' + quote.year + '</span>';
	}
	document.getElementById('quote-box').innerHTML = message;
}


// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "makeQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

