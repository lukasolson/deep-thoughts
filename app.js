let thoughts;
const url = "https://gist.githubusercontent.com/lukasolson/c5fb0d5f869a199cef45b56a3261d80d/raw/d0aa78b00fb85eab8a9c0d9004cc9bc9ab97981d/deep-thoughts.txt";
var request = new XMLHttpRequest();
request.open("GET", url, true);
request.onload = function () {
	thoughts = request.responseText.split("\n");
};
request.send();

document.getElementById("query").addEventListener("keyup", function () {
	const query = this.value;
	if (query.length < 3) return;
	const filteredThoughts = thoughts.filter(function (thought) {
		return thought.match(query);
	});
	document.getElementById("deep-thought").innerHTML = filteredThoughts.join("<br />");
});
