var modal = document.getElementById('modal-parent'); // get parent

var button = document.getElementById("push-me"); // get the button that will open modal

var close = document.getElementsByClassName("close-button")[0]; // find the close button

button.onclick = function() { // fire up the modal
  modal.style.display = "block";
};

close.onclick = function() { // close the modal
  modal.style.display = "none";
};

window.onclick = function(event) { // close modal if we click anywhere outside modal
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
