var $form = $("#formTest").hide();
var $formTestCnpj = $("#formTestCnpj").hide();
var $btnHelp = $("#helpBtn");
var $helpBtnpj = $("#helpBtnpj");

function showForm() {
	$form.toggle();
	$btnHelp.hide();
}
function hideForm() {
	$form.hide();
	$btnHelp.toggle();
}

function showFormCnpj() {
	$formTestCnpj.toggle();
	$helpBtnpj.hide();
}
function hideFormCnpj() {
	$formTestCnpj.hide();
	$helpBtnpj.toggle();
}

$('#myCollapsible').collapse({
	toggle: false
})
$('#myCollapsible').on('hidden.bs.collapse', function () {
	// do something...
})