$.ajax({
  url : "http://api.wunderground.com/api/7529ff1e9308aa2d/conditions/q/FL/orlando.json",
  dataType : "json",
  success : function(parsed_json){
         var icon = parsed_json['current_observation']['icon_url'];//Display the icon for the current conditions (observation)
        var weather = parsed_json['current_observation']['weather'];//Display weather
        var feelsLike =  parsed_json['current_observation']['feelslike_string']; //Display feels like temperature
         var temp_f = parsed_json['current_observation']['temp_f']; // Display temperature in Ferinheiths
       var relative_humidity = parsed_json['current_observation']['relative_humidity']; // Display relative humidity
         var wind_dir = parsed_json['current_observation']['wind_dir']; // Display wind direction
          var wind_mph = parsed_json['current_observation']['wind_mph']; //Display wind miles per hour

 $('#icon').attr('src',icon);
 $('#weather').append(weather);
 $('#feelsLike').append("feels like: "+feelsLike);
  $('#temp_f').append("temperature Ferinheiths: "+temp_f);
 $('#relative_humidity').append("relative humidity: "+relative_humidity);
  $('#wind_dir').append("wind direction: "+wind_dir);
 $('#wind_mph').append("wind miles per hour: "+wind_mph);


  } //closes function
}); //closes ajax


 //curly braces holds objects
//square braces holds arrays


$.ajax({
  url : "http://api.wunderground.com/api/7529ff1e9308aa2d/hourly/q/FL/orlando.json",
  dataType : "json",
  success : function(resp){
            for (var i=0; i<=23; i++){
                $("#lol1").append(resp['hourly_forecast'][i]['FCTTIME']['civil'] + "<br>"); //Display the Hourly 1-day forecast 
                $("#lol2").append(resp['hourly_forecast'][i]['temp']['english'] + "<br>");   //Display the condition for each hour
                $("#lol3").append(resp["hourly_forecast"][i]['condition'] + "<br>");  //Display the temperature for each hour
          }// closes for loop
         }//ajax function
  });//closes ajax




$.ajax({
  url : "http://api.wunderground.com/api/7529ff1e9308aa2d/forecast/q/FL/orlando.json",
  dataType : "json",
  success : function(resp2){
              for (var l=0; l<=9; l++){
                $("#icon2").attr('src', resp2['forecast']['simpleforecast']['forecastday'][l]['icon_url']); // Display the icon
                $("#dw").append(resp2['forecast']['simpleforecast']['forecastday'][l]['date']['pretty'] + "<br>"); // Display weather
                $("#dc").append(resp2['forecast']['simpleforecast']['forecastday'][l]['conditions'] + "<br>");  //Display conditions
                $("#dh").append("highs : " + resp2['forecast']['simpleforecast']['forecastday'][l]['high']['fahrenheit'] + "<br>"); // Display highs
                $("#dl").append("lows : " +resp2['forecast']['simpleforecast']['forecastday'][l]['low']['fahrenheit'] + "<br>"); //Display lows
 }
}
});

//i tried to set this up as a while loop but couldnt get to work


      
        
         // http://stackoverflow.com/questions/28143350/weather-underground-hourly-1-day-forecast
         //https://apicommunity.wunderground.com/weatherapi/topics/how_do_you_get_a_3_day_forecast_with_javascript
         



//Display the 7-day forecast 


    <!--This is an example. Use your own API key and city location.  Copy and paste the url in your browser. It will display the needed information in a JSON file.  Use the keys to display the information on your page-->  
  
    //  $.ajax({                  


    //http://api.wunderground.com/api/cf3709ab78bdbe3a/conditions/q/CA/San_Francisco.json
    
    //    url : "http://api.wunderground.com/api/YourAPIKeyHere/forecast/geolookup/conditions/q/MD/Baltimore.json",
    //    dataType : "json", 
    //          success : function(parsed_json) { 
    //              var location = parsed_json['location']['city']; 
    //              var temp_f = parsed_json['current_observation']['temp_f'];
    //                  $(".class").html("Current temperature in " + location + " is: " + temp_f+"ºF");
    //          } 
    //  }); 

