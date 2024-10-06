const frmSbmt = document.getElementById("frmSbmt")

frmSbmt.addEventListener("submit", function (e) {
	e.preventDefault()
	const pass = document.getElementById("password")
	const cfmPass = document.getElementById("cfm-password")

	if (pass.value !== cfmPass.value) {
		alert("Password not match")
	} else {
		alert("Register Successfuly")
	}
})

$(function () {
	$("#date").datepicker()
})
