var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
	var element = elements[i];

	for (var j = 0; j < element.childNodes.length; j++) {
		var node = element.childNodes[j];

		if (node.nodeType === 3) {
			var text = node.nodeValue;
			
			var textPairs = [
				['Blockchains', 'Multiple copies of giant Excel spreadsheets'],
				['blockchains', 'multiple copies of giant Excel spreadsheets'],
				['A blockchain', 'A giant Excel spreadsheet with multiple copies'],
				['a blockchain', 'a giant Excel spreadsheet with multiple copies'],
				['blockchain', 'multiple copies of a giant Excel spreadsheet'],
				['Blockchain', 'Multiple copies of a giant Excel spreadsheet'],
				['Artificial Intelligence', 'Statistics models too complicated for their developers to explain'],
				['Artificial intelligence', 'Statistics models too complicated for their developers to explain'],
				['artificial intelligence', 'statistics models too complicated for their developers to explain'],
				['The cloud', 'A computer that isn\'t yours'],
				['the cloud', 'a computer that isn\'t yours'],
				['Clouds', 'Computers that aren\'t yours'],
				['clouds', 'computers that aren\'t yours'],
				['cloud', 'computer that isn\'t yours'],
				['cloud computing', 'asking someone else to run your programs for you'],
				['Cloud computing', 'Asking someone else to run your programs for you']
			];
			
			var replacedText = text;
			
			for (var k = 0; k < textPairs.length; k++) {
				var textPair = textPairs[k];
				replacedText = replacedText.replace(new RegExp(textPair[0],'g'), textPair[1]);
			}
			
 			if (replacedText !== text) {
 				element.replaceChild(document.createTextNode(replacedText), node);
 			}
		}
	}
}
