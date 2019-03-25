window.onload = function() {
    
    document.getElementById("coinButt").addEventListener("click",function(){
        sendAjaxGet('https://api.coinranking.com/v1/public/coins', showCoin)
    });
}

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
    //console.log(coinObj);
    let myCoin = coinObj.data.coins.slice(0, 50);
    let coinName = document.getElementById("coinName").value;
    let found = false
    console.log(myCoin);
    for (let i = 0; i < myCoin.length; i++){
        if(myCoin[i].name == coinName){
            document.getElementById("name").innerText = "Name: "+coinObj.data.coins[i].name;
            document.getElementById("symbol").innerText = "Symbol: "+coinObj.data.coins[i].symbol;
            document.getElementById("price").innerText = "Current Price: $"+coinObj.data.coins[i].price;
            document.getElementById("image").innerHTML = "<a href="+"'"+coinObj.data.coins[i].websiteUrl+"'"+"><img src="+"'"+coinObj.data.coins[i].iconUrl+"'"+"></a>";
            found = true;
            break;
        } 
        
        }
        if(!found){
            return alert('Please enter in a correct Cryptocurrency name. Capitalization Matters!')
        }
    
    

    }
     
    

    