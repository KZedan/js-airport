'use strict';

function Airport(){
  this._hangar = [];
}
Airport.prototype.planes = function(){ return this._hangar; };
Airport.prototype.clearForLanding = function(plane) {
  if(this.isStormy()) {
    throw new Error('cannot land during stormy');
  }
  this._hangar.push(plane);
};
Airport.prototype.clearForTakeoff = function(plane) {
  if(this.isStormy()) {
    throw new Error('cannot takeoff during stormy');
  }
  this._hangar = [];
};
Airport.prototype.isStormy = function() {
  return false;
};
