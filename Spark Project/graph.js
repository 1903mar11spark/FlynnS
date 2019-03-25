window.onload = function() {
    document.getElementById("coinButt").addEventListener("click",function(){
        //let coinName = document.getElementById("coinName").innerText;
        //sendAjaxGet('https://api.coinranking.com/v1/public/coin/:coin_'+coinName+'', showCoin)
        //sendAjaxGet('https://api.coinranking.com/v1/public/coins', showCoin)
        sendAjaxGet('https://api.coinranking.com/v1/public/coin/1/history/1y', showCoin)
    });
}

// url represents resource being requested
// func represents the callback function to be invoked upon successful completion of request
function sendAjaxGet(url, func) {
    // step 1: obtain xhr (note: IE 5,6 do not have this)
    let xhr = new XMLHttpRequest() || new ActiveXObject("Microsoft.HTTPRequest");
    // step 2: define onreadystatechange function
    xhr.onreadystatechange = function(){
        // readyState of 4 means request is complete
        // status of 200 means OK
        if (this.readyState == 4 && this.status == 200) {
            func(this);
        }
    };
    // step 3: prepare the request with open()
    xhr.open("GET", url, true);
    // step 4: send the request
    xhr.send();
}

function showCoin(xhr) {
    let coinObj = JSON.parse(xhr.responseText);
    console.log(coinObj);
    console.log(coinObj.data.history[100].price);
    //let first = parseFloat(coinObj.data.history[0].price);
    //let second = parseFloat(coinObj.data.history[100].price);
    let ctx = document.getElementById("myCanvas").getContext("2d");
    let data = {
        labels: [],
        datasets:[
            {
                label: "Bitcoin Graph",
                fillColor: "rgba(220,220,220,0.8)",
                strokeColor: "rgba(220,220,220,0.8)",
                highlightFill: "rgba(220,220,220,0.75)",
                highlightStroke: "rgba(220,220,220,1)",
                data: coinObj.data.history.price
           
          }
        ]
        }
    let myFirstChart = new Chart(ctx).Line(data);
    }
   
