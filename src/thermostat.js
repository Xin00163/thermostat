function Thermostat (){
  this.MIN_TEMP = 10;
  this.MAX_TEMP_PS_ON = 25;
  this.MAX_TEMP_PS_OFF = 32;
  this.temperature = 20;
  this.powerSaving = true;
  this.lowEnergyUsage = 18;
  this.mediumEnergyUsage = 25;
};

Thermostat.prototype.powerSavingOn = function(){
  this.powerSaving = true;
};

Thermostat.prototype.powerSavingOff = function(){
  this.powerSaving = false;
};

Thermostat.prototype.up = function(){
  //console.log(this.powerSaving)
  // console.log(this.MAX_TEMP_POWERSAVING)
  if(this.powerSaving && this.temperature === this.MAX_TEMP_PS_ON ){ throw Error("Max temperature is 25 when power saving is on") }
  if(!this.powerSaving && this.temperature === this.MAX_TEMP_PS_OFF){ throw Error("Max temperature is 32 when power saving is off") }
  this.temperature ++;
};

Thermostat.prototype.down = function(){
  if (this.temperature < this.MIN_TEMP){throw Error("The lowest temperature is 10")}
  this.temperature --;
};

Thermostat.prototype.reset = function(){
  this.temperature = 20;
};

Thermostat.prototype.energyUsage = function(){

  if (this.temperature < this.lowEnergyUsage){
    return ("low-usage");
  } if (this.temperature >= this.lowEnergyUsage && this.temperature <= this.mediumEnergyUsage){
    return "medium-usage";
  }
    return "high-usage";
  };
