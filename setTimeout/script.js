let heading = document.getElementById("heading");
let change = document.getElementById("change");
let stop = document.getElementById("stop");
let changeText;
change.addEventListener("click", function(){
    changeText = setTimeout(()=>{
        heading.innerHTML = "Text has been changed"
        console.log("Text has been changed")
    }, 1500)
})

stop.addEventListener("click", function(){
    clearTimeout(changeText)
    heading.innerHTML = "Click the change button"
});