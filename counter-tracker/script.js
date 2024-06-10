

let console_count = document.getElementById("count-el")
let save_text = document.getElementById("save-text")



let count = 0
function increment(){
    console.log("Arka1")
    count += 1
    console_count.textContent = count 
}

function save(){
    console.log("Arka2")
    save_text.textContent += " "+count+" / "
    count = 0
    console_count.textContent = 0 
    
}

function cleartext(){
    console.log("Arka3")
    save_text.textContent = "Previous Entries : "
    console_count.textContent = 0 
    count = 0;
}
