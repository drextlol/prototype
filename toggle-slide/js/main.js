$(document).ready(function() {
	$(".myButton").click(function () {
	    $('#myDiv').toggle('slide', { direction: 'right' }, 900);
	});
});