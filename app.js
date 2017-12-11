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
        let today = new Date()
        let dayTemp = new Date(today)
        dayTemp.setDate(today.getDate() - 31)

        for(var i=0; i<30; i++){
          dayTemp.setDate(dayTemp.getDate() + 1)
          let jsonTemp = JsonPreMoData.bpi[`2017-${("0"+(dayTemp.getMonth()+1)).slice(-2)}-${("0"+dayTemp.getDate()).slice(-2)}`]          
          // console.log(dayTemp)
          $("#info_month").append(`<p><ul><li>2017-${("0"+(dayTemp.getMonth()+1)).slice(-2)}-${("0"+dayTemp.getDate()).slice(-2)} USD: $ ${jsonTemp}</li></ul></p>`)
        }
        // let keyDate = "JsonPreMoData.bpi.2017-11-09";
  		// // $("#info_month").append(`<p><ul><li>2017-11-10 USD: $ ${JsonPreMoData.bpi["2017-11-10"]}</li></ul></p>`)
    //   $("#info_month").append(`<p><ul><li>2017-11-11 USD: $ ${JsonPreMoData.bpi["2017-11-11"]}</li></ul></p>`)
    //   $("#info_month").append(`<p><ul><li>2017-11-12 USD: $ ${JsonPreMoData.bpi["2017-11-12"]}</li></ul></p>`)
    //   $("#info_month").append(`<p><ul><li>2017-11-13 USD: $ ${JsonPreMoData.bpi["2017-11-13"]}</li></ul></p>`)
    //   $("#info_month").append(`<p><ul><li>2017-11-14 USD: $ ${JsonPreMoData.bpi["2017-11-14"]}</li></ul></p>`)
    //   $("#info_month").append(`<p><ul><li>2017-11-15 USD: $ ${JsonPreMoData.bpi["2017-11-15"]}</li></ul></p>`)
    //   $("#info_month").append(`<p><ul><li>2017-11-16 USD: $ ${JsonPreMoData.bpi["2017-11-16"]}</li></ul></p>`)
    //   $("#info_month").append(`<p><ul><li>2017-11-17 USD: $ ${JsonPreMoData.bpi["2017-11-17"]}</li></ul></p>`)
    //   $("#info_month").append(`<p><ul><li>2017-11-18 USD: $ ${JsonPreMoData.bpi["2017-11-18"]}</li></ul></p>`)
    //   $("#info_month").append(`<p><ul><li>2017-11-19 USD: $ ${JsonPreMoData.bpi["2017-11-19"]}</li></ul></p>`)
    //   $("#info_month").append(`<p><ul><li>2017-11-20 USD: $ ${JsonPreMoData.bpi["2017-11-20"]}</li></ul></p>`)
    //   $("#info_month").append(`<p><ul><li>2017-11-21 USD: $ ${JsonPreMoData.bpi["2017-11-21"]}</li></ul></p>`)
    //   $("#info_month").append(`<p><ul><li>2017-11-22 USD: $ ${JsonPreMoData.bpi["2017-11-22"]}</li></ul></p>`)
    //   $("#info_month").append(`<p><ul><li>2017-11-23 USD: $ ${JsonPreMoData.bpi["2017-11-23"]}</li></ul></p>`)
      // $("#info_month").append(`<p><ul><li>2017-11-24 USD: $ ${JsonPreMoData.bpi["2017-11-24"]}</li></ul></p>`)
      // $("#info_month").append(`<p><ul><li>2017-11-25 USD: $ ${JsonPreMoData.bpi["2017-11-25"]}</li></ul></p>`)
      // $("#info_month").append(`<p><ul><li>2017-11-26 USD: $ ${JsonPreMoData.bpi["2017-11-26"]}</li></ul></p>`)
      // $("#info_month").append(`<p><ul><li>2017-11-27 USD: $ ${JsonPreMoData.bpi["2017-11-27"]}</li></ul></p>`)
      // $("#info_month").append(`<p><ul><li>2017-11-28 USD: $ ${JsonPreMoData.bpi["2017-11-28"]}</li></ul></p>`)
      // $("#info_month").append(`<p><ul><li>2017-11-29 USD: $ ${JsonPreMoData.bpi["2017-11-29"]}</li></ul></p>`)
      // $("#info_month").append(`<p><ul><li>2017-11-30 USD: $ ${JsonPreMoData.bpi["2017-11-30"]}</li></ul></p>`)
      // $("#info_month").append(`<p><ul><li>2017-12-01 USD: $ ${JsonPreMoData.bpi["2017-12-01"]}</li></ul></p>`)
      // $("#info_month").append(`<p><ul><li>2017-12-02 USD: $ ${JsonPreMoData.bpi["2017-12-02"]}</li></ul></p>`)
      // $("#info_month").append(`<p><ul><li>2017-12-03 USD: $ ${JsonPreMoData.bpi["2017-12-03"]}</li></ul></p>`)
      // $("#info_month").append(`<p><ul><li>2017-12-04 USD: $ ${JsonPreMoData.bpi["2017-12-04"]}</li></ul></p>`)
      // $("#info_month").append(`<p><ul><li>2017-12-05 USD: $ ${JsonPreMoData.bpi["2017-12-05"]}</li></ul></p>`)
      // $("#info_month").append(`<p><ul><li>2017-12-06 USD: $ ${JsonPreMoData.bpi["2017-12-06"]}</li></ul></p>`)
      // $("#info_month").append(`<p><ul><li>2017-12-07 USD: $ ${JsonPreMoData.bpi["2017-12-07"]}</li></ul></p>`)
      // $("#info_month").append(`<p><ul><li>2017-12-08 USD: $ ${JsonPreMoData.bpi["2017-12-08"]}</li></ul></p>`)
      // $("#info_month").append(`<p><ul><li>2017-12-09 USD: $ ${JsonPreMoData.bpi["2017-12-09"]}</li></ul></p>`)
      // $("#info_month").append(`<p><ul><li>2017-12-10 USD: $ ${JsonPreMoData.bpi["2017-12-10"]}</li></ul></p>`)


  	}
  	

  })

  $.ajax({
    url: "https://api.coindesk.com/v1/bpi/historical/close.json?start=2016-12-01&end=2017-12-01",
    method: "GET",
    success: function(preYrData) {
      let JsonPreYrData = JSON.parse(preYrData);
    	console.log("success preYeardata");
    	console.log(JsonPreYrData)
      
    }

  })



});