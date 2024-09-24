import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase , ref , push , onValue , update} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL : "https://endorsment-b8395-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const endorsmentDB = ref(database , "endorsements")

const publishButton = document.getElementById("publish-btn")
const inputField = document.getElementById("input-fld")
const endorsmentList = document.getElementById("endors-list")
const fromValue = document.getElementById("from-input")
const toValue = document.getElementById("to-input")


publishButton.addEventListener("click", function(){
    let inputFieldValue = inputField.value 
    let fromInputValue = fromValue.value
    let toInputValue = toValue.value 
    push(endorsmentDB , { message : inputFieldValue , from: fromInputValue , to : toInputValue , likecount : 0})
    console.log("Pushed to database")
    inputField.value = ""
    fromValue.value = ""
    toValue.value = ""
})


onValue(endorsmentDB , function(snapshot){
    endorsmentList.innerHTML = ""
    let snapcontent = Object.entries(snapshot.val())
    console.log(snapcontent)
    for(let i=0; i<snapcontent.length ; i++){
        let endorsContent = snapcontent[i]
        let key = endorsContent[0];
        let endorsContentValue = endorsContent[1]
        let endorsContentMessage = endorsContentValue.message
        let endorsContentFrom = endorsContentValue.from
        let endorsContentTo = endorsContentValue.to
        let endorsContentLike = endorsContentValue.likecount
        render_endorsment(endorsContentMessage , endorsContentFrom , endorsContentTo , key , endorsContentLike )
    }
})



endorsmentList.addEventListener("click" , function(event){
    if(event.target && event.target.id === "like-btn"){
        let key = event.target.getAttribute("data-key")
        let currentLikes = parseInt(event.target.getAttribute("data-likes"))
        likefunction(key, currentLikes)
    }

})

function likefunction(key , likes){
    let likedComments = JSON.parse(localStorage.getItem('likedComments')) || []
    if (likedComments.includes(key)) {
        alert("You have already liked this comment")
        console.log("You have already liked this comment")
        return;
    }
    let endorsContentLikeNew = likes + 1
    update(ref(database , `endorsements/${key}`),{likecount : endorsContentLikeNew})
    likedComments.push(key)
    localStorage.setItem('likedComments', JSON.stringify(likedComments))
}




function render_endorsment(message , from , to , key , likes){
    endorsmentList.innerHTML += 
    `<div id="message">
        <div id="first-part">
            <h5>From ${from}</h5>
            <p>${message}</p>
            <h5>To ${to}</h5>
        </div>
        <div id="second-part">
            <button id ="like-btn" data-key="${key}" data-likes="${likes}"><i class="fa-solid fa-heart"><i>${likes}</i></i></button>
        </div>
    </div>`
}










