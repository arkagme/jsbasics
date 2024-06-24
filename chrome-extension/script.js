let myleads = []
const inputel = document.getElementById("input-el")
const inputbtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const delbtn = document.getElementById("delete-btn")
const tabbtn = document.getElementById("tab-btn")


const lead_from_local_storage = JSON.parse(localStorage.getItem("myleads"))
if(lead_from_local_storage){
    myleads = lead_from_local_storage
    render(myleads)
}


tabbtn.addEventListener("click" , function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myleads.push(tabs[0].url)
        localStorage.setItem("myleads", JSON.stringify(myleads))
        render(myleads)
    })
})

delbtn.addEventListener("dblclick",function(){
    myleads = []
    localStorage.clear()
    render(myleads)
})

inputbtn.addEventListener("click" , function(){
    myleads.push(inputel.value)
    inputel.value = ""
    localStorage.setItem("myleads" , JSON.stringify(myleads) )
    console.log( localStorage.getItem("myleads"))
    render(myleads)
    render_mybutton(myleads)
})

function render(leads){
    let listItems = ""
    for(let i=0;i<leads.length ; i++){
        listItems += `<li><a target='_blank' href='${leads[i]}'>${leads[i]}</a></li>`
    }
    ulEl.innerHTML = listItems
}

