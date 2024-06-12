let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    let randint1 = Math.floor(Math.random()*fighters.length)
    let randint2 = Math.floor(Math.random()*fighters.length)
    stageEl.textContent = fighters[randint1] + " VS " + fighters[randint2]
    console.log("Success")
})
