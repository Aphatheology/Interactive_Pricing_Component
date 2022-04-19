const rangeInputs = document.querySelectorAll('input[type="range"]')
let slider = document.getElementById("range");
let output = document.getElementById("output");
let amount = document.querySelector(".amount")
let toggleball = document.querySelector(".toggleball")
let discount = document.querySelector(".discount")
let toggle = document.getElementById("toggle");

output.innerHTML = slider.value; 
slider.oninput = function() {
    output.innerHTML = slider.value;
    if(toggle.checked) {
      amount.innerHTML = `$${(slider.value * 0.16 * 12 * 0.75).toFixed(2)} `
  } else {
      amount.innerHTML = `$${(slider.value * 0.16).toFixed(2)} `
  }
  }


function handleInputChange(e) {
  let target = e.target
  if (e.target.type !== 'range') {
    target = document.getElementById('range')
  } 
  const min = target.min
  const max = target.max
  const val = target.value
  
  target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
}

rangeInputs.forEach(input => {
  input.addEventListener('input', handleInputChange)
})

toggle.addEventListener('click', () => {
    if(toggle.checked) {
        amount.innerHTML = `$${(slider.value * 0.16 * 12 * 0.75).toFixed(2)} `
    } else {
        amount.innerHTML = `$${(slider.value * 0.16).toFixed(2)} `
    }
})

if(window.innerWidth > 550) {
    discount.innerHTML = "25% discount"
}