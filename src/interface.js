$( document ).ready(function(){

  var thermostat = new Thermostat()

  function updateTemperature(){
    $("#current_temp").text(thermostat.gettingCurrentTemperature() +  String.fromCharCode(176) + "C")
    $("#current_temp").attr('class', thermostat.energyUsage())
  }

  $("#temperature").text("Current temperature: ")
  updateTemperature()

  $("#power-saving-status").text(thermostat.isPowerSavingOn())

  $("#temperature_up").click(function(){
    thermostat.up()
    updateTemperature()
  })

  $("#temperature_down").click(function(){
    thermostat.down()
    updateTemperature()
  })

  $("#reset").click(function(){
    thermostat.reset()
    updateTemperature()
  })

  $("#powersavingon").click(function(){
    thermostat.powerSavingOn()
    $("#power-saving-status").text(thermostat.isPowerSavingOn())
  })

  $("#powersavingoff").click(function(){
    thermostat.powerSavingOff()
    $("#power-saving-status").text(thermostat.isPowerSavingOn())
  })

   $.get("http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=47c1b6aeef267b6a8f2431fad83b01e4", function(weatherLondon){
     var temp = Math.round(weatherLondon.main.temp - 273.15) + String.fromCharCode(176) + "C"
     $("#city_name").text("London Current Temperature: ")
     $("#city_temp").text(temp)
  // <p>°C =&nbsp;(°F − 32) x&nbsp;5/9</p>

  })


  })
