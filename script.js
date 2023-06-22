// Function that handles the image color change as well as updating the data clicks
function changeColor(img) {
    // Gets the custom value from the image data-value
    var value = parseFloat(img.getAttribute("data-value")); 
    // Removes the image grayscale filter
    img.style.filter = "none"; 
    // Updates the caption text
    var caption = img.nextElementSibling;
    // Defaults to 0 if the data click count is not set
    var clickCount = parseInt(img.getAttribute("data-click-count")) || 0; 
    // Inscreases the click count by one
    clickCount++;
    img.setAttribute("data-click-count", clickCount);
    // Adds the click count to the right of the item name between parenthesis
    caption.textContent = caption.textContent.replace(/\(\d+\)$/, "") + " (" + clickCount + ")";
    // Updates the total value
    updateTotal(value);
    // Find the corresponding price tag element
    var priceTag = img.nextElementSibling.nextElementSibling;

    // Find the corresponding price tag element
    var priceTag = img.nextElementSibling.nextElementSibling;
    // Toggle the "colored" class on the price tag
    if (priceTag) {
        priceTag.classList.add("colored");
    }
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

        // Reset the caption text
        var caption = img.nextElementSibling;
        caption.textContent = caption.textContent.replace(/\(\d+\)$/, "");
        img.setAttribute("data-click-count", 0);
    }

    var priceElements = document.getElementsByClassName("price-tag");
    for (var i = 0; i < priceElements.length; i++) {
        priceElements[i].classList.remove("colored");
    }
}
