var modal = document.getElementById('modal-decoration');


var btn = document.getElementById("button-decoration");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
    modal.style.display = "block";
}


span.onclick = function() {
    modal.style.display = "none";
}
