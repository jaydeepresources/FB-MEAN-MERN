var num = 0

function oddEven() {

    num = document.getElementById("numberInput").value

    if (num % 2 == 0) {
        document.getElementById("para").innerText = "Num is:- Even"
    }
    else {
        document.getElementById("para").innerText = "Num is:- Odd"
    }
}