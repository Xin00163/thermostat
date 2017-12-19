function Thermostat (){
  const MIN_TEMP = 10;
  this.MAX_TEMP_PS_ON = 25;
  this.MAX_TEMP_PS_OFF = 32;
  this.temperature = 20;
  this.powerSaving = true;
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
  if (this.temperature === 10){throw Error("The lowest temperature is 10")}
  this.temperature --;
};
