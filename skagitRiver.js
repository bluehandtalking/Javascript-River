#! /usr/bin/env node
//  JS Object literal, and prototype example


function River( name, location, length, source, estuary) {
   if(name  === "" || location === "" || length  === "" || source === "" || estuary === "") {
      throw "No name or location or length or source or estuary";
   }
   else {
      this.name = name;
      this.location = location;
      this.length = length;
      this.source = source;
      this.estuary = estuary;
   }
}



River.prototype.toString = function () {
   return "River: " + this.name + ", " + this.location + ", " + this.length + ", " + this.source + ", " + this.estuary
};

var myRivers = (function () {
   var rivers = [];
   getRiver = function(r) {
      return rivers[r];
   }; 
   return {
      riverNew: function(river) {
	 rivers.push(river);
      },
      getRivers: function() {
	 var allRivers = "";
	 for (var i = 0; i < rivers.length; i++) {
	    allRivers += getRiver(i).toString() + "\n";
	 }
	 return allRivers;
      }

   };
})();

//  Test

myRivers.riverNew(new River("Skagit", "S.W. British Columbia / N.W. Washington", "150 miles", "Allison Pass", "Skagit Bay"));

myRivers.riverNew(new River("Stillaguamish", "NorthWest Washington", "67 miles", "North Cascades", "Port Susan"));

myRivers.riverNew(new River("Nisqually", "Central West Washington", "81  miles", "Nisqually Glacier", "Puget Sound"));

console.log("Rivers: ")
console.log(myRivers.getRivers());
