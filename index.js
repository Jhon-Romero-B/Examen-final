function validacion() {}

var email = document.getElementById("email").value;
var password = document.getElementById("password").value;
var objeto = {
    email: "jaromero374@misena.edu.co",
    password: "1234"
}

if (email.value === null || email.value === "") {
    alert("Ingrese correo");

    if (password.value === null || password.value === "") {
        alert("Ingrese su contraseña");

        if ((email.value == "jaromero374@misena.edu.co") && (password.value == "1234")) {
            location.href = "https://unicode-table.com/es/search/?q=cerradura";
        }
        return false;
    }