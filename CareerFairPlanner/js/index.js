/*
 * This function generates all subsets of a given set S using the binary
 * counting method and returns them in an array.
 */
var generateAllSubsets = (S) => {
	subsets = new Set();
	// TODO
	return subsets;
}

/*
 * This function returns the interest-optimized list of companies you have time
 * to chat with at the career fair.
 */
var careerFairPlanner = (companies, availableTime) => {
	var subsets = generateAllSubsets(companies);
	optimalSubset = undefined;
	// TODO
	return optimalSubset;
}

/*
 * this function accepts an integer i and returns the binary representation of i
 * in an array of n bits (e.g. getBitArray(1,5) would return [0,0,0,0,1])
 */
var getBitArray = (i,n) => {
	var base2 = (i).toString(2);
	base2 = base2.split('');
	
	for (i=0;i<base2.length;i++){
		base2[i] = parseInt(base2[i]);
	}
	
	while (base2.length<n){
		base2.unshift(0);
	}
	
	return base2;
}

/*
 * This function displays the results on the html page
 */
var displayResults = (companies) => {
	var t = "The companies you should visit are:<br/>";
	
	for (var i = 0; companies && i < companies.length; i++) {
		t += '<b>Company ' + companies[i].name + 
			'</b>: (interest of ' + companies[i].interest + 
			' & estimated chat time of ' + companies[i].estimatedChatTime + ')<br/>';
	}
	
	$('#results').append(t);
}

/*
 * This function handles the control flow of the program
 */
$(document).ready(function(){
	var companies = [
		{
			name: 'A',
			interest: 7,
			estimatedChatTime: 12
		},
		{
			name: 'B',
			interest: 8,
			estimatedChatTime: 9
		},
		{
			name: 'C',
			interest: 8,
			estimatedChatTime: 3
		},
		{
			name: 'D',
			interest: 3,
			estimatedChatTime: 3
		},
		{
			name: 'E',
			interest: 5,
			estimatedChatTime: 15
		},
		{
			name: 'F',
			interest: 10,
			estimatedChatTime: 25
		},
		{
			name: 'G',
			interest: 4,
			estimatedChatTime: 13
		},
		{
			name: 'H',
			interest: 6,
			estimatedChatTime: 4
		},
		{
			name: 'I',
			interest: 7,
			estimatedChatTime: 7
		},
		{
			name: 'J',
			interest: 1,
			estimatedChatTime: 14
		},
		{
			name: 'K',
			interest: 6,
			estimatedChatTime: 15
		},
		{
			name: 'L',
			interest: 6,
			estimatedChatTime: 11
		},
		{
			name: 'M',
			interest: 7,
			estimatedChatTime: 4
		},
		{
			name: 'N',
			interest: 4,
			estimatedChatTime: 7
		},
		{
			name: 'O',
			interest: 8,
			estimatedChatTime: 20
		},
		{
			name: 'P',
			interest: 10,
			estimatedChatTime: 18
		},
		{
			name: 'Q',
			interest: 3,
			estimatedChatTime: 1
		},
		{
			name: 'R',
			interest: 5,
			estimatedChatTime: 5
		},
		{
			name: 'S',
			interest: 9,
			estimatedChatTime: 12
		},
		{
			name: 'T',
			interest: 4,
			estimatedChatTime: 16
		},
		{
			name: 'U',
			interest: 8,
			estimatedChatTime: 18
		},
		{
			name: 'V',
			interest: 7,
			estimatedChatTime: 13
		},
		{
			name: 'W',
			interest: 4,
			estimatedChatTime: 6
		},
		{
			name: 'X',
			interest: 9,
			estimatedChatTime: 10
		},
		{
			name: 'Y',
			interest: 7,
			estimatedChatTime: 19
		},
		{
			name: 'Z',
			interest: 8,
			estimatedChatTime: 8
		},
	];
	
	var optimalSubset = careerFairPlanner(companies, 120)
	displayResults(optimalSubset);
});