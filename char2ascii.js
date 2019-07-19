$("btn").addEventListener("click", function() {
	var input = $("input").value;
	var output = convert_string(input);
	$("output").value = output;
});

function convert_string(input) {
	var ret = "";
	for (var i = 0; i < input.length; i++) {
		ret += convert_one(input.substr(i, 1));
	}
	return ret;
}
//var g_map = test_ranges;
var g_map = ranges;
function convert_one(input) {
	var code = input.charCodeAt(0);
	for (var i = 0; i < g_map.length; i++) {
		var start = g_map[i].start.charCodeAt(0);
		var cnt = g_map[i].conv.length;
		if (code >= start && code < start + cnt) {
			return g_map[i].conv[code - start];
		}
	}
	return input
}
function $(id) {
	return document.getElementById(id);
}