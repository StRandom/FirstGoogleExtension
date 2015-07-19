document.getElementById("gysearch").onsearch = onSearch;
document.addEventListener("search", onSearch);
addEventListener("onsearch",onSearch);
function onSearch() {
   			var x = document.getElementById("gysearch");
			var y = document.getElementById("SSDropDown");
			if (y.value == "Google") {
				chrome.tabs.query({currentWindow: true, active: true}, function (tab) {
      chrome.tabs.update(tab.id, {url: "https://www.google.ru/webhp?sourceid=chrome-instant&rlz=1C1CHMO_enRU594RU594&ion=1&espv=2&ie=UTF-8#q=" + x.value});
});
     
			} else {
				chrome.tabs.query({currentWindow: true, active: true}, function (tab) {
      chrome.tabs.update(tab.id, {url: "https://www.yandex.com/search/?lr=87&text=" + x.value});
});
			}
}