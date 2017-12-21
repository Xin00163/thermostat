$( document ).ready(function(){

  var thermostat = new Thermostat()

  function updateTemperature(){
    $("#current_temp").text(thermostat.gettingCurrentTemperature())
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


  })
