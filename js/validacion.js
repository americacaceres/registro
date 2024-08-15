function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}



function compararClave()  {
    let password1 = document.getElementById("password1").value;
    let password2 = document.getElementById("password2").value;
    console.log(password1);
    if (password1 === password2) {
        showAlertSuccess();
    }
    else {
        showAlertError();
    
    }

}

let btn = document.getElementById('regBtn');

btn.addEventListener('click', () =>{
    compararClave();
});

