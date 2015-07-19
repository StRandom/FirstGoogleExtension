document.getElementById("gysearch").onsearch = onSearch;
document.addEventListener("search", onSearch);
document.getElementById("SSDropDown").onchange = onChange;
document.addEventListener("change", onChange);

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

function saveChanges() {
    var theValue = document.getElementById("SSDropDown").value;
    chrome.storage.sync.set({'searcherType': theValue});
}

function onChange() {
	var y = document.getElementById("SSDropDown");
	if (y.value == "Google") {
		document.body.style.backgroundColor = "blue";
		document.getElementById("searcherIcon").src = "images/google.png";
	} else {
		document.body.style.backgroundColor = "red";
		document.getElementById("searcherIcon").src = "images/yandex.png";
	}
	saveChanges();
}

function valueChanged(newValue){
	document.getElementById("SSDropDown").value = newValue;
	if (newValue == "Google") {
		document.body.style.backgroundColor = "blue";
		document.getElementById("searcherIcon").src = "images/google.png";
	} else {
		document.body.style.backgroundColor = "red";
		document.getElementById("searcherIcon").src = "images/yandex.png";
	}
}

chrome.storage.sync.get("searcherType", function(val) {valueChanged(val.searcherType)});