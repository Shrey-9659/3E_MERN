let quote = document.getElementById("text-area")
let start = document.getElementById("start")

start.addEventListener("click", function(){
    fetch("https://meowfacts.herokuapp.com/")
.then((res)=>{
    return res.json();
}).then((response)=>{
    quote.innerHTML = response["data"]
})

})



