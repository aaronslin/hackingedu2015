/*chrome.tabs.executeScript( {
  code: "window.getSelection().toString();"
}, function(selection) {
  document.innerHTML = selection[0];
});*/


chrome.runtime.onInstalled.addListener(function() {
	chrome.contextMenus.create({
		id: "searchword",
		title: "@@ Search Word with X",
		contexts: ["selection"]
	});
});

chrome.contextMenus.onClicked.addListener(
	function(info, tab) {
		alert("hello world!");
	}
);
