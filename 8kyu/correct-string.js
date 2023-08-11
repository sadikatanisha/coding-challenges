function correct(string) {
	const map = {
		0: "O",
		1: "I",
		5: "S"
	};
	
	return string
		.split("")
		.map(c => map.hasOwnProperty(c) ? map[c] : c)
		.join("");
}

function correctErrors(text) {
    const corrections = {
       '5': 'S',
       '0': 'O',
       '1': 'I'
    };
 
    let correctedText = '';
    for (let i = 0; i < text.length; i++) {
       if (corrections.hasOwnProperty(text[i])) {
          correctedText += corrections[text[i]];
       } else {
          correctedText += text[i];
       }
    }
 
    return correctedText;
 }