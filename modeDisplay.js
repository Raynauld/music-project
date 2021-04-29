 // querySelectors
let main = document.querySelector('main');
let writeSteps = document.querySelector('.steps');
let writeRelLow = document.querySelector('.relLow');
let fifthOut = document.querySelector('.fifth');
let btnFifth = document.querySelector('#fifthButton');
let steps = document.querySelector('.steps');

//global variables for buttons in thirdContainer

let toggleStep = true;
let toggleRel = true;

//Functions

//Gives a random mode with its relative distances 
function randomMode () {
				let mode = Math.floor(Math.random()*7)+1;
				switch (mode) {
								case 1: mode = "Ionian"; writeSteps.innerHTML = "W - W - H - W - W - W - H"; writeRelLow.innerHTML = "1 - 2 - 3 - 4 - 5 - 6 - 7"
								break;
								case 2: mode = "Dorian"; writeSteps.innerHTML = "W - H - W - W - W - H - W"; writeRelLow.innerHTML = "1 - 2 - b3 - 4 - 5 - 6 - b7"
								break;
								case 3: mode = "Phrygian"; writeSteps.innerHTML = "H - W - W - W - H - W -W"; writeRelLow.innerHTML = "1 - b2 - b3 - 4 - 5 - b6 - b7"
								break;
								case 4: mode = "Lydian"; writeSteps.innerHTML = "W - W - W - H - W - W - H"; writeRelLow.innerHTML = "1 - 2 - 3 - #4 - 5 - 6 - 7"
								break;
								case 5: mode = "Mixolydian"; writeSteps.innerHTML = "W - W - H - W - W - H - W"; writeRelLow.innerHTML = "1 - 2 - 3 - 4 - 5 - 6 - b7" 
								break;
								case 6: mode = "Aeolian"; writeSteps.innerHTML = "W - H - W - W - H - W - W"; writeRelLow.innerHTML = "1 - 2 - b3 - 4 - 5 - b6 - b7"
								break;
								case 7: mode = "Locrian"; writeSteps.innerHTML = "H - W - W - H - W - W - W"; writeRelLow.innerHTML = "1 - b2 - b3 - 4 - b5 - b6 - b7"
								break; 
				}
				return mode;
}

//The button to start the random mode function
function buttonStart () {
				main.innerHTML = randomMode();
				document.querySelector('#bStart').innerHTML = 'next random mode';
}

//For the buttons to show the relative distances
function toggleSteps () {
						if (toggleStep) {
				    toggleStep = false;
								steps.style.display = "none";
								
				} else {
								steps.style.display = "inline";
								toggleStep = true;
				}
}


function toggleRelLow () {
				let relLow = document.querySelector('.relLow');
				if (toggleRel) {
								toggleRel = false;
								relLow.style.display = "none";
				} else {
								toggleRel = true;
								relLow.style.display = "inline"
				}
}




//For the select button
function fifthButton () {
let fifthOutput = document.querySelector('#fifth');
				if (fifthOutput.value === 'C') {
								fifthOut.innerHTML = "None";
				} else if (fifthOutput.value === 'bD') {
								fifthOut.innerHTML = "All #";
				} else if (fifthOutput.value === 'D') {
								fifthOut.innerHTML = "C# F#";
				} else if (fifthOutput.value === 'bE') {
								fifthOut.innerHTML = "bA bB bE";
				} else if (fifthOutput.value === 'E') {
								fifthOut.innerHTML = "C# D# F# G#";
				} else if (fifthOutput.value === 'F') {
								fifthOut.innerHTML = "bB";
				} else if (fifthOutput.value === 'bG') {
								fifthOut.innerHTML = "bG bA bB bC bD bE";
				} else if (fifthOutput.value === 'G') {
								fifthOut.innerHTML = "F#";
				} else if (fifthOutput.value === 'bA') {
								fifthOut.innerHTML = "bA bB bD bE";
				} else if (fifthOutput.value === 'A') {
								fifthOut.innerHTML = "C# F# G#";
				} else if (fifthOutput.value === 'bB') {
								fifthOut.innerHTML = "bB bE";
				} else if (fifthOutput.value === 'B') {
								fifthOut.innerHTML = "C# D# F# G# A#";
				}
}


