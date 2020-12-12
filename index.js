var correo = document.getElementById("email").value;
var contraseña = document.getElementById("password").value;

const objeto = {
    email: "jaromero374@misena.edu.co",
    password: "1234"

}

function validacion() {

    if (email.value === null || email.value === "") {
        alert("Ingrese su correo");
    }
    if (password.value === null || password.value === "") {
        alert("Ingrese su contraseña");
    }
    if ((correo.value == "jaromero374@misena.edu.co") && (contraseña.value == "1234")) {
        location.href = "https://unicode-table.com/es/search/?q=cerradura";
    }
    return false;
}