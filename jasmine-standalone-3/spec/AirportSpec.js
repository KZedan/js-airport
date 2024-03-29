'use strict';

describe('Airport', function(){
  var airport;
  var plane;
  var weather;

  beforeEach(function(){
    plane = jasmine.createSpy('plane');
    weather = jasmine.createSpyObj('weather', ['isStormy']);
    airport = new Airport(weather);
  });

  it('has no planes by default', function(){
    expect(airport.planes()).toEqual([]);
  });

  describe('under normal conditions', function() {
    beforeEach(function() {
      weather.isStormy.and.returnValue(false);
    });
    it('can clear planes for landing', function(){
      airport.clearForLanding(plane);
      expect(airport.planes()).toEqual([plane]);
    });
    it('can clear planes for takeoff', function(){
      airport.clearForLanding(plane);
      airport.clearForTakeoff(plane);
      expect(airport.planes()).toEqual([]);
    });
  });
  describe('under stormy conditions', function() {
    beforeEach(function() {
      weather.isStormy.and.returnValue(true);
    });
    it('does not clear planes for takeoff', function(){
      expect(function(){ airport.clearForTakeoff(plane); }).toThrowError('cannot takeoff during stormy');
    });
    it('does not let planes land', function(){
      expect(function(){ airport.clearForLanding(plane); }).toThrowError('cannot land during stormy');
    });
  });
});
