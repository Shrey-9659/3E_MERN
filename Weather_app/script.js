let searchArea = document.getElementById("search-field");
let searchButton = document.getElementById("submit");
let celcius = document.getElementById("celcius")
let fer = document.getElementById("temp_f")
let condition = document.getElementById("condition")
let citydetails = document.getElementById("cityInfo")
let city;

searchButton.addEventListener("click", function(){
    // console.log(condition.innerHTML)
    city = searchArea.value;
    let url = `http://api.weatherapi.com/v1/current.json?key=e884e49500a94e69811163154241309&q=${city}`
    fetch(url).then((rawData)=>{
        return rawData.json();
    }).then((data)=>{
        celcius.innerHTML = Math.round(data["current"]["temp_c"])
        fer.innerHTML = Math.round(data["current"]["temp_f"])
        condition.innerHTML = data["current"]["condition"]["text"]
        citydetails.innerHTML = `${data["location"]["name"]}, ${data["location"]["region"]}, ${data["location"]["country"]}`
    })
})