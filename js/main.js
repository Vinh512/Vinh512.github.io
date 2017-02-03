document.addEventListener("DOMContentLoaded", function() {

  var img = document.getElementsByClassName("click-to-open");
  var span = document.getElementsByClassName("close");

  for (var i = 0; i<img.length; i++) {
    var thisImg = img[i];

    // When the user clicks on the image, open the modal
    thisImg.addEventListener("click", function() {
      var modal = document.getElementById(this.dataset.modal);
      modal.style.display = "block";

      // When the user clicks on the span 'x', close the modal
      for (var j=0; j<span.length; j++) {
        var thisSpan = span[j]
        thisSpan.onclick = function() { modal.style.display = "none"; }
      }

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
        if (event.target === modal) { modal.style.display = "none"; }
      };
    });
  }
});
