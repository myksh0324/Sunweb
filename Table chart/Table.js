function PreviewImage() {
	var oFReader = new FileReader();
	oFReader.readAsDataURL(document.getElementById("Image_Upload").files[0]);

	oFReader.onload = function (oFREvent) {
		document.getElementById("Image_Preview").src = oFREvent.target.result;
	};
};

//var password document.getElementById("Password"), confirmPassword document.getElementById("Confirm_Password");

console.log("Finish");