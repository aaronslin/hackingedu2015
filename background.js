var dict={};
$.getJSON('dictionary.json', function(data) { 
	dict=data;
}); 

chrome.runtime.onInstalled.addListener(function() {
	chrome.contextMenus.create({
		id: "searchword",
		title: "@@[%s] with X",
		contexts: ["selection"]
	});
});

chrome.contextMenus.onClicked.addListener(selectWord);

function selectWord(info, tab) {
	// Highlight the selected word
	// Display the word and the definition
	var selected = info.selectionText;
	var def = dict[selected.toUpperCase()];
	if (typeof def != 'undefined') {
		alert(selected + ": "+ def);
		console.log(def);
	}
	else {
		alert("Not found");
	}
}
