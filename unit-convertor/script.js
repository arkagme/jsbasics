const btn_test = document.getElementById("btn")
const input_fld = document.getElementById("input-fld")
const length_text = document.getElementById("length")
const volume_text = document.getElementById("volume")
const mass_text = document.getElementById("mass")
const dark_mode = document.getElementById("dark-mode-btn")

btn_test.addEventListener("click" , function(){
    let number = input_fld.value 
    calculate_length(number)
    calculate_volume(number)
    calculate_mass(number)

})

dark_mode.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    document.getElementById("footer").classList.toggle("dark-mode");
    const insideContents = document.querySelectorAll("#inside-content");
    insideContents.forEach(content => {
        content.classList.toggle("dark-mode");
    });
    const h3Elements = document.querySelectorAll("h3");
    h3Elements.forEach(h3 => {
        h3.classList.toggle("dark-mode");
    });
    const h4Elements = document.querySelectorAll("h4");
    h4Elements.forEach(h4 => {
        h4.classList.toggle("dark-mode");
    });
});

function calculate_length(number){
    let feet = number*3.281
    let meter = number/3.281
    length_text.innerHTML = `${number} meter = ${feet.toFixed(2)} feet | ${number} feet = ${meter.toFixed(2)} meter`
}
function calculate_volume(number){
    let liter = number*0.264
    let gallon = number/0.264
    volume_text.innerHTML = `${number} liter = ${liter.toFixed(2)} gallon | ${number} gallon = ${gallon.toFixed(2)} liter`
}
function calculate_mass(number){
    let kilo = number*2.204
    let pound = number/2.204
    mass_text.innerHTML = `${number} kilograms = ${kilo.toFixed(2)} pounds | ${number} pounds = ${pound.toFixed(2)} kilograms`
}
