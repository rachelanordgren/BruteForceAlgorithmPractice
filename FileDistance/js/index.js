// index.html includes several text files. 
// those text files instantiate variables prideandprejudice, peterpan, and dracula

/*
 * This function removes punctuation, and extra spaces from the input argument,
 * then forces it into lowercase and tokenizes it into an array of words.
 */
var tokenize = (text) => {
  	text = text.replace(/[.,;@"”’“?‘\/#!$%\^&\*;:{}=\-_`~()]/g,"")
  	text = text.replace(/\s{2,}/g," ");
  	text = text.replace(/[\n\t]/g," ");
	text = text.toLowerCase();
	text = text.split(' ');
	return text;
}


/*
 * This function returns the shortest distance (in terms of number of words) between 
 * the searchWords in the text. The searchWords can be found in the text in either
 * order
 */
var minDistance = (text,searchWords) => {
	words = tokenize(text);
	console.log(words)
	if (searchWords[0] === searchWords[1]) {
		return 0;
	} 
		
	let minimum = (words.length) + 1; 
	let i;
	let j;
	for(i = 0; i < words.length; i++) {
		if (words[i] === searchWords[0]) {
			for (j = 0; j < words.length; j++) {
				if(words[j] === searchWords[1]) {
					let curr = Math.abs(i - j) - 1
					if (curr < minimum) {
						minimum = curr;
					}
				}
			}
		}
	}

	
	return minimum;
}


/*
 * This function displays the results on the html page
 */
var displayResults = (m) => {
	t = "The shortest distance between the searchWords in the text is <b>"+m+"</b> words.";
	$('#results').append(t);
}


/*
 * This function handles the control flow of the program
 */
$(document).ready(function(){
	// chose one of the text and searchWords pairs below.

	// text = `The itsy bitsy spider climbed up the waterspout. 
	// 		Down came the rain and washed the spider out. 
	// 		Out came the sun and dried up all the rain 
	// 		and the itsy bitsy spider climbed up the spout again.`
	// searchWords = ['spider','rain']

	text = prideandprejudice;
	searchWords = ['visit','happiness'];

	//text = peterpan;
	//searchWords = ['fairy','hook']

	//text = dracula;
	//searchWords = ['drink','blood']

	m = minDistance(text,searchWords);
	displayResults(m);
});
