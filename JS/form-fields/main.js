function emailChanged() {
    var email = document.getElementById("exampleInputEmail1").value
    if (email && email !== '') {
        document.getElementById("emailError").innerText = ""
    }
    else {
        document.getElementById("emailError").innerText = "Email can't be empty."
    }

}