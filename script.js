var form = document.getElementById("myForm");
form.addEventListener("submit", function (event) {
	event.preventDefault();
	var formData = new FormData(form);
	alert("Name: " + formData.get("name") + "\nEmail: " + formData.get("email"));
});

const btnSwitch = document.querySelector("#change-color-btn");

btnSwitch.addEventListener("click", () => {
	document.body.classList.toggle("dark");
	btnSwitch.classList.toggle("active");
});
