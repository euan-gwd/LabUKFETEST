function nameValidate() {
	let nameInput = $("#contact-name").val();
	if (/^[A-Z][a-zA-Z-_ ]{2,30}$/.test(nameInput)) {
		$("#contact-name").parent(".form-group").removeClass("has-danger");
		$("#contact-name").removeClass("form-control-danger");
		$("#contact-name").parent(".form-group").addClass("has-success");
		$("#contact-name").addClass("form-control-success");
	} else {
		$("#contact-name").parent(".form-group").addClass("has-danger");
		$("#contact-name").addClass("form-control-danger");
	}
}

function emailValidate() {
	let emailInput = $("#contact-email").val();
	if (/[\w\-._]+@[\w\-._]+\.\w{2,10}/.test(emailInput)) {
		$("#contact-email").parent(".form-group").removeClass("has-danger");
		$("#contact-email").removeClass("form-control-danger");
		$("#contact-email").parent(".form-group").addClass("has-success");
		$("#contact-email").addClass("form-control-success");
	} else {
		$("#contact-email").parent(".form-group").addClass("has-danger");
		$("#contact-email").addClass("form-control-danger");
	}
}

function phoneValidate() {
	let phoneInput = $("#contact-phone").val();
	if (/^\d{3}-\d{3}-\d{4}$/.test(phoneInput)) {
		$("#contact-phone").parent(".form-group").removeClass("has-danger");
		$("#contact-phone").removeClass("form-control-danger");
		$("#contact-phone").parent(".form-group").addClass("has-success");
		$("#contact-phone").addClass("form-control-success");
	} else {
		$("#contact-phone").parent(".form-group").addClass("has-danger");
		$("#contact-phone").addClass("form-control-danger");
	}
}
