window.onload = function(){
    document.getElementById('fetchStock').addEventListener('click', getStockWithFetch);
    
  };
   

  function getStockWithFetch() {
    let stockSym = String(document.getElementById("stockName").value);
    let apiUrl = 'https://cloud.iexapis.com/beta/stock/'+stockSym+'/quote?token=pk_223dc52070594d9f95d352635fa8efcc';
    //console.log(apiUrl);
    fetch(apiUrl, {method: "GET", headers:{"Accept":"application/json"}})
    //define behavior for when response returns
    .then((response) => {
        //return unwrapped promise object for the next chained operation
        return response.json();
    })
    //utilize unwrapped promise as a JS object
    .then((data) => {
        console.log(data);
        document.getElementById('symbol').innerText = "Symbol: "+data.symbol;
        document.getElementById('sector').innerText = "Name: "+data.companyName;
        document.getElementById('price').innerText = "Current Price: $"+data.close;
        
    })
    .catch((error) => {
        return alert('Please enter a valid company stock symbol.');
        console.log(error);
    });
  }