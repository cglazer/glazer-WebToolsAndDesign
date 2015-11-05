$(document).ready(function() {
	//add span element
	$("#enter_task").after("<span>*</span>");
	//move focus to first text box
	$("#enter_task").focus();

	//add to list
	$("#add").click(function() {

		var task = $("#enter_task").val().trim();
		if (task) {
			$("ol").append("<li>" + task + "<input type='radio'/></li>");
			//$("ol").append($("#enter_task").val());
			$("#enter_task").next().text("*");
			$("#enter_task").val('');
			$("#enter_task").focus();
		} else {
			$("#enter_task").next().text("This field is required.");
			$("#enter_task").val('');
			$("#enter_task").focus();
		}
	});

	//remove from list
$('#remove').click(function() {
       $("input:radio:checked").each(function(){ //Go through all checked elements
           $(this).parent().remove(); //Remove li
        });
		$("#enter_task").focus();
	});
});
//end ready
