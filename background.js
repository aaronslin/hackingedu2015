var dict={};
$.getJSON('dictionary.json', function(data) { 
	dict=data;
	alert(dict["DIPLOBLASTIC"]);
}); 

chrome.runtime.onInstalled.addListener(function() {
	chrome.contextMenus.create({
		id: "searchword",
		title: "@@[%s] with X",
		contexts: ["selection"]
	});
});

chrome.contextMenus.onClicked.addListener(
	function(info, tab) {
		// Highlight the selected word
		// Display the word and the definition
		alert(info.selectionText);
	}
);
