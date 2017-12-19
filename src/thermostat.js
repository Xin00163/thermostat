function Thermostat (){
  const MIN_TEMP = 10;
  this.temperature = 20;
};

Thermostat.prototype.up = function(){
  this.temperature ++;
};

Thermostat.prototype.down = function(){
  if (this.temperature === 10){throw Error("The lowest temperature is 10")}
  this.temperature --;
};
