console.log('js is linked');

$(document).ready(function() {
  // indentation
  console.log("document is loaded")
   
  $.ajax({
  	url: "https://api.coindesk.com/v1/bpi/currentprice.json",
  	method: "GET",
  	success: function(currentData) {
  		console.log("success currentdata");
  		let JsonCurrentData = JSON.parse(currentData);

  		$("#info_today").append(`<p>
        <ul>
          <li>${JsonCurrentData["bpi"]["EUR"].code}: ${JsonCurrentData["bpi"]["EUR"].symbol}${JsonCurrentData["bpi"]["EUR"].rate}</li>
          <li>${JsonCurrentData["bpi"]["GBP"].code}: ${JsonCurrentData["bpi"]["GBP"].symbol} ${JsonCurrentData["bpi"]["GBP"].rate}</li>
          <li>${JsonCurrentData["bpi"]["USD"].code}: ${JsonCurrentData["bpi"]["USD"].symbol} ${JsonCurrentData["bpi"]["USD"].rate}</li>
        </ul>
      </p>`);
  	}

  })

  $.ajax({
  	url: "https://api.coindesk.com/v1/bpi/historical/close.json",
  	method: "GET",
  	success: function(preMoData) {
  		console.log("success pre month data");

      // indentation – you indented too far here
        let JsonPreMoData = JSON.parse(preMoData);
        let today = new Date();
        let dayTemp = new Date(today);
        dayTemp.setDate(today.getDate() - 31);

        for(var i=0; i<30; i++){
          dayTemp.setDate(dayTemp.getDate() + 1)
          let jsonTemp = JsonPreMoData.bpi[`2017-${("0"+(dayTemp.getMonth()+1)).slice(-2)}-${("0"+dayTemp.getDate()).slice(-2)}`]          
          $("#info_month").append(`<p><ul><li>2017-${("0"+(dayTemp.getMonth()+1)).slice(-2)}-${("0"+dayTemp.getDate()).slice(-2)} USD: $ ${jsonTemp}</li></ul></p>`)
        }
  	}
  })

  $.ajax({
    url: "https://api.coindesk.com/v1/bpi/historical/close.json?start=2016-12-01&end=2017-12-01",
    method: "GET",
    success: function(preYrData) {
      let JsonPreYrData = JSON.parse(preYrData);
    	console.log("success preYeardata");
      // You are not putting the data on the page anywhere (e.g. #info_year)
    }
  });
});