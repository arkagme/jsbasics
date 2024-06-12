const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a",
"b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", 
"6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1 = []
let password2 = []
let randint1
let randint2
let password_text_1 = document.getElementById("password-1")
let password_text_2 = document.getElementById("password-2")

let input
let inputlength

function exclude_number(){
    characters.splice(51 , 60 )
}

function exclude_alpha(){
    characters.splice(0 , 52 )
}

function exclude_char(){
    characters.splice(62 , 91)
}
function generate_rand(){
    input = document.getElementById("length-number").value
    inputlength = parseInt(input)
    for(let i=0 ; i<inputlength ; i++){
        randint1 = Math.floor(Math.random()*characters.length)
        randint2 = Math.floor(Math.random()*characters.length)
        let c1 = characters[randint1]
        let c2 = characters[randint2]
        password1.push(c1)
        password2.push(c2)
    }
    password_text_1.textContent = password1.join("")
    password_text_2.textContent = password2.join("")
    console.log(password1)
    password1 = []
    password2 = []
}

function copy1(){
    let copytext1 = document.getElementById("password-1").textContent
    navigator.clipboard.writeText(copytext1)
    alert("Password Copied")

}
function copy2(){
    let copytext2 = document.getElementById("password-2").textContent
    navigator.clipboard.writeText(copytext2)
    alert("Password Copied")

}
