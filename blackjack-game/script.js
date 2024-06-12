let cards = [] 
let sum = 0
let hasblackjack = false
let isAlive = false
let gamestate = false
let message = ""
let message_el = document.getElementById("message-el")
let sum_el = document.getElementById("sum-el")
let cards_el = document.getElementById("cards-el")

let player = {
    name : "Arka" ,
    chips : 1490 ,
}

let PlayerEl = document.getElementById("player-el")
PlayerEl.textContent = player.name +" : "+ "₹" + player.chips

function getrandomcard(){
    let randomnumber = Math.floor(Math.random()* 13)+1
    if(randomnumber === 1){
        return 11
    }
    else if(randomnumber > 10){
        return 10
    }
    else{
    return randomnumber
    }
}
function startgame(){
    if(gamestate==false){
    gamestate = true
    isAlive = true
    firstnumber = getrandomcard()
    secondnumber = getrandomcard()
    sum = firstnumber + secondnumber
    cards.push(firstnumber , secondnumber)
    console.log(cards)
    rendergame()
    }
}
function rendergame(){
    cards_el.textContent = "cards :"
    for(let i=0 ; i<cards.length ; i++){
        cards_el.textContent += cards[i]+ " "
    }
    sum_el.textContent = "Sum : " + sum

    if( sum <= 20){
        message = "you wanna draw a new card ?"
    }
    else if(sum === 21){
        message = "you win"
        hasblackjack = true
    }
    else{
        message = "you loose"
        isAlive = false
    }

    message_el.textContent = message
}

function new_card(){
    if(isAlive === true && hasblackjack === false){
        console.log("new card")
        let card = getrandomcard()
        console.log(card)
        sum += card
        cards.push(card)
        console.log(cards)
        rendergame()
    }
}




