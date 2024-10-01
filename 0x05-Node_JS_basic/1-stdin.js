// Display the initial welcome message
console.log('Welcome to Holberton School, what is your name?');

// Set up the process to read input from stdin
process.stdin.on('data', (data) => {
	const inputName = data.toString().trim();
	console.log(`Your name is: ${inputName}`);

	// After input, close the program and show the closing Messahge
	console.log('This important software is now closing');
	process.exit();
});
