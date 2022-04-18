let slider = document.getElementById("myRange");
let output = document.getElementById("output");
let amount = document.querySelector(".amount")
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = slider.value;
  amount.innerHTML = `$${(slider.value * 0.16).toFixed(2)} `
}