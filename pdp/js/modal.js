// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Get modal element
  var modal = document.getElementById("sizeChartModal");

  // Get the link that opens the modal
  var openModalLink = document.getElementById("openSizeChartModal");

  // Get the <span> element that closes the modal
  var closeBtn = document.getElementsByClassName("pdp-modal-close")[0];

  // When the user clicks on the link, open the modal
  openModalLink.onclick = function(event) {
    event.preventDefault(); // Prevent default link behavior
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  closeBtn.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal content, close the modal
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
});
