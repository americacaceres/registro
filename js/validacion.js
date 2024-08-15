function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.getElementById("regBtn").addEventListener("click", function() {
    let password1 = document.getElementById("password1").value;
    let password2 = document.getElementById("password2").value;
    let alertDanger = document.getElementById("alert-danger");
    let alertSuccess = document.getElementById("alert-success");
  
    document.getElementById("regBtn").addEventListener("click", function() {
        let password1 = document.getElementById("password1").value;
        let password2 = document.getElementById("password2").value;
        let alertDanger = document.getElementById("alert-danger");
        let alertSuccess = document.getElementById("alert-success");
    
        if (password1.length < 6) {
            alertDanger.querySelector("p").textContent = "La contraseña debe tener al menos 6 caracteres.";
            alertDanger.classList.add("show"); 
            alertSuccess.classList.remove("show");
        } else if (password1 !== password2) {
            alertDanger.querySelector("p").textContent = "Las contraseñas no coinciden.";
            alertDanger.classList.add("show");
            alertSuccess.classList.remove("show");
        } else {
            alertDanger.classList.remove("show");
            alertSuccess.classList.add("show");
        }
    });
    