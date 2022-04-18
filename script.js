let slider = document.getElementById("myRange");
let output = document.getElementById("output");
let amount = document.querySelector(".amount")
output.innerHTML = slider.value; // Display the default slider value

let toggleball = document.querySelector(".toggleball")
let discount = document.querySelector(".discount")
let toggle = document.getElementById("toggle");

toggle.addEventListener('click', () => {
    if(toggle.checked) {
        amount.innerHTML = `$${(slider.value * 0.16 * 12 * 0.75).toFixed(2)} `
    } else {
        amount.innerHTML = `$${(slider.value * 0.16).toFixed(2)} `
    }
})

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = slider.value;
  if(toggle.checked) {
    amount.innerHTML = `$${(slider.value * 0.16 * 12 * 0.75).toFixed(2)} `
} else {
    amount.innerHTML = `$${(slider.value * 0.16).toFixed(2)} `
}
//   amount.innerHTML = `$${(slider.value * 0.16).toFixed(2)} `
}

// toggle.oninput = function() {
//     if(toggleball.checked) {
//         console.log("checked")
//     } else {
//       console.log("unchecked")
//     }
// }

if(window.innerWidth > 550) {
    discount.innerHTML = "25% discount"
}





// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById("price-slider").addEventListener("mousedown", function() {
//       this.style.outlineWidth = "0";
//     });
  
//     document.getElementById("price-slider").addEventListener("mouseup", function() {
//       this.blur();
//       this.style.outlineWidth = "initial";
//     });
  
//     document.getElementById("price-slider").addEventListener("mouseleave", function() {
//       this.blur();
//       this.style.outlineWidth = "initial";
//     });
  
//     document.getElementById("price-slider").oninput = function() {
//       handleSliderChange(this.value);
  
//       var fillTrackPct = (this.value - this.min) / (this.max - this.min) * 100;
  
//       this.style.background = "linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) "
//                               + fillTrackPct + "%, hsl(224, 65%, 95%) " + fillTrackPct + "%, hsl(224, 65%, 95%) 100%)";
//     };
// });