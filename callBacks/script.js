let firstValue = document.getElementById("first");
let secondValue = document.getElementById("second");
let heading = document.getElementById("heading");
let add = document.getElementById("add");
let sub = document.getElementById("sub");
let mul = document.getElementById("mul");

// doing it via normal way
// document.addEventListener("click", (event)=>{
//     let action = event.target.id
//     let first = +(firstValue.value)
//     let second = +(secondValue.value)
//     if(action == "add"){
//         heading.innerHTML = first+second
//     }else if(action == "sub"){
//         heading.innerHTML = first-second
//     }else if(action == "mul"){
//         heading.innerHTML = first*second
//     }else{
//         heading.innerHTML = "Result : --"
//     }
// })

// doing it via callback function

add.addEventListener("click", () => {
  let first = +firstValue.value;
  let second = +secondValue.value;
  heading.innerHTML = first + second;
});
sub.addEventListener("click", () => {
  let first = +firstValue.value;
  let second = +secondValue.value;
  heading.innerHTML = first - second;
});
mul.addEventListener("click", () => {
  let first = +firstValue.value;
  let second = +secondValue.value;
  heading.innerHTML = first * second;
});
