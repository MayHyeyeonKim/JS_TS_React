function getForecast(){
    let zipcode = document.getElementById("zip").value;
    console.log(zipcode)
    let xhr = new XMLHttpRequest();
    console.log(xhr)
    xhr.addEventListener("load", responseReceivedHandler); //addEventListener (specifying the string representing the event type, specifying the callback function to execute when the event occurs)
    xhr.open("GET", "https://wp.zybooks.com/weather.php?zip=" + zipcode);
    xhr.responseType = "json";
    xhr.send();
}

function responseReceivedHandler() {
    if(this.status != 200){ //이 함수는 이벤트 핸들러로서 호출되었기 때문에 this는 이벤트를 발생시킨 요소 또는 객체, 즉, 이 경우에는 XMLHttpRequest 객체를 가리킴.
        console.log(this.status);
        alert("Error making HTTP request");
    }
    let html = "";
    if(this.response.success) {
        console.log(this.response)
        html += "<h1> May's Forecast </h1>";
        html += "<ol>";
        for (let day of this.response.forecast){
            html += `<li> ${day.desc}: high is ${day.high}, low is ${day.low} </li>`
        }
        html += "</ol>";
    } else {
        console.log("Error: ", this.response);
        console.log("Error: ", this.response.error);
        html = `<h1> Error: ${this.response.error} </h1>`
    }
}
document.getElementById("search").addEventListener("click", getForecast);

/*
{success: true,…}
forecast: [{high: 97, low: 77, desc: "mostly sunny"}, {high: 84, low: 77, desc: "sunny"},…]
success: true


{success: false, error: 'ZIP code not found'}
error: "ZIP code not found"
success: false
[[Prototype]]: Object
*/