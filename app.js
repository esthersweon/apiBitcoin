console.log('js is working');

$(document).ready(function() {
    console.log("Let's get coding!")
   

  $.ajax({
  	url: "https://api.coindesk.com/v1/bpi/currentprice.json",
  	method: "GET",
  	success: function(currentData) {
  		console.log("success currentdata");
  		// console.log(currentData);
  		// console.log(JSON.parse(currentData));
  		let JsonCurrentData = JSON.parse(currentData);

  		$("#info_today").append(`<p><ul><li>${JsonCurrentData["bpi"]["EUR"].code}: ${JsonCurrentData["bpi"]["EUR"].symbol}${JsonCurrentData["bpi"]["EUR"].rate}<li/><li>${JsonCurrentData["bpi"]["GBP"].code}: ${JsonCurrentData["bpi"]["GBP"].symbol} ${JsonCurrentData["bpi"]["GBP"].rate}</li><li>${JsonCurrentData["bpi"]["USD"].code}: ${JsonCurrentData["bpi"]["USD"].symbol} ${JsonCurrentData["bpi"]["USD"].rate}</li></ul></p>`)
  	}

  })

  $.ajax({
  	url: "https://api.coindesk.com/v1/bpi/historical/close.json",
  	method: "GET",
  	success: function(preMoData) {
  		console.log("success pre month data");
  		console.log(JSON.parse(preMoData))

        let JsonPreMoData = JSON.parse(preMoData);
        // let keyDate = "JsonPreMoData.bpi.2017-11-09";
  		$("#info_month").append(`<p><ul><li>${JsonPreMoData["time"].updated}</li></ul></p>`)
  	}
  	

  })

  $.ajax({
    url: "https://api.coindesk.com/v1/bpi/historical/close.json?start=2016-12-01&end=2017-12-01",
    method: "GET",
    success: function(preYrData) {
    	// console.log("success preYeardata");
    	// console.log(preYrData)
    }

  })



});