var contenu = new Array();
var defaultPage = "default.php";

function test(){
	alert("test");
}

function defaultContent(){
	$(".current_content").html(phpToHtml(defaultPage));
}

function switchTo(var noms) {

	if(Array.isArray(['noms']) {
		noms.forEach(function(value, index) {
			contenu[] = $(".current_content").html(phpToHtml());
		}
	}
} 

function phpToHtml(var file){
	return "Du <strong>HTML</strong><br/>" + file + "<br/>";
}
