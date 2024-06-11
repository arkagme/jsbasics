let score = 0
let score_guest = 0
let fetchscore = document.getElementById("scoreb")
let fetchscore_guest = document.getElementById("scoreb-guest")

function increment1(){
    score+=1
    fetchscore.textContent = score
    console.log("score")
}

function increment2(){
    score+=2
    fetchscore.textContent = score
    console.log("score")
    
}

function increment3(){
    score+=3
    fetchscore.textContent = score
    console.log("score")
    
}



function increment1_guest(){
    score_guest+=1
    fetchscore_guest.textContent = score_guest
    console.log("score")
}

function increment2_guest(){
    score_guest+=2
    fetchscore_guest.textContent = score_guest
    console.log("score")
    
}

function increment3_guest(){
    score_guest+=3
    fetchscore_guest.textContent = score_guest
    console.log("score")
    
}
function reset(){
    score = 0
    fetchscore.textContent = 0
    fetchscore_guest.textContent = 0
    
}

let countdowntime = 719
let x ;
function countdown(){
    x =  setInterval(count_time, 1)
}
function count_time(){
    let minutes = Math.floor(countdowntime/60)
    let seconds = (countdowntime%60)
    countdowntime--
    document.getElementById("countdown").textContent = minutes + " : " + seconds
    if ( countdowntime < 0){
        clearInterval(x)
        document.getElementById("Times-Up").textContent = "Times-Up!!"
    }
}


function reset_timer(){
    countdowntime = 720
    document.getElementById("countdown").textContent = "00 : 00"
    document.getElementById("Times-Up").textContent = ""
}

function pause_timer(){
    clearInterval(x)
}

function savescore(){
    const para = document.createElement("p")
    const node = document.createTextNode("Home : " + score +" "+ "Guest : "+score_guest)
    para.appendChild(node)
    const element = document.getElementById("score-store")
    element.appendChild(para)
}

function clr_text(){
    document.getElementById("score-store").textContent = ""
}