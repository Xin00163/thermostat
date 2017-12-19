function Thermostat (){
  const MIN_TEMP = 10;
  const MAX_TEMP_POWERSAVING = 25;
  this.temperature = 20;
  this.powerSaving = true;
};

Thermostat.prototype.up = function(){
  //console.log(this.powerSaving)
  console.log(this.MAX_TEMP_POWERSAVING)
  if(this.powerSaving && this.temperature === this.MAX_TEMP_POWERSAVING){ throw Error("Max temperature is 25 when power saving is on") }
  this.temperature ++;
};

Thermostat.prototype.down = function(){
  if (this.temperature === 10){throw Error("The lowest temperature is 10")}
  this.temperature --;
};
