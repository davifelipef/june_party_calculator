function changeColor(img) {
    var value = parseFloat(img.getAttribute("data-value")); // Get the custom value
    img.style.filter = "none"; // Remove the grayscale filter
    updateTotal(value); // Subtract the custom value from the total
}
  
function updateTotal(value) {
    var totalElement = document.getElementById("total");
    var currentTotal = parseFloat(totalElement.getAttribute("data-total")) || 0; // Default to 0 if data-total attribute is not set
    var newTotal = currentTotal + value;

    // Ensure the new total value is always positive
    if (newTotal < 0) {
        newTotal = 0;
    }

    totalElement.textContent = "R$ " + newTotal.toFixed(2);
    totalElement.setAttribute("data-total", newTotal);
}

function clearContents() {
    var totalElement = document.getElementById("total");
    totalElement.setAttribute("data-total", "0");
    totalElement.textContent = "R$ 0.00";

    var images = document.getElementsByClassName("image");
    for (var i = 0; i < images.length; i++) {
        var img = images[i];
        img.style.filter = "grayscale(100%)";
    }
}

