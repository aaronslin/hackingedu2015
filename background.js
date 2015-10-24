
chrome.runtime.onInstalled.addListener(function() {
	chrome.contextMenus.create({
		id: "searchword",
		title: "@@[%s] with X",
		contexts: ["selection"]
	});
});

chrome.contextMenus.onClicked.addListener(
	function(info, tab) {
		alert(info.selectionText);
	}
);
