#! /usr/bin/env node
//  JS Object literal, and prototype example


// Constructor function for river
function River( name, riverLocation, length, source, estuary) {
   if(name  === "" || riverLocation === "" || length  === "" || source === "" || estuary === "") {
      throw "No name or riverLocation or length or source or estuary";
   }
   else {
      this.name = name;
      this.riverLocation = riverLocation;
      this.length = length;
      this.source = source;
      this.estuary = estuary;
   }
}


River.prototype.toString = function () {
   return "River: " + this.name + ", " + this.riverLocation + ", " + this.length + ", " + this.source + ", " + this.estuary
};

var myRivers = (function () {
  // private
  var rivers = [];
  var isRiver = function(r) {
    for(var idx=0; idx <= (rivers.length -1); idx++) { 
        if(r == rivers[idx].name)
          return idx;
    }
  }
  var getRiver = function(r) {
    var river = rivers[r]
    var result = river.toString();
    return result;
  }; 
  // public API
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
    },
    getRiverStats: function(r) {
      var idx;
      idx = isRiver(r)
      if (idx != null )
        return getRiver(idx);
      else
        return (r + " is not a recorded river")
    }	 
  };
})();

//  Test

myRivers.riverNew(new River("Skagit", "S.W. British Columbia  N.W. Washington", "150 miles", "Allison Pass", "Skagit Bay"));
myRivers.riverNew(new River("Stillaguamish", "NorthWest Washington", "67 miles", "North Cascades", "Port Susan"));
myRivers.riverNew(new River("Nooksack", "Whatcom County", "68 miles", "North Cascades", "Skagit Bay") );
myRivers.riverNew(new River("Snohomish", "Central West Washington", "81  miles", "Nisqually Glacier", "Puget Sound"));
myRivers.riverNew(new River("Green", "King County", "98 miles", "Central Cascades", "Puget Sound"))
console.log(myRivers.getRivers());
console.log(myRivers.getRiverStats("Snake"));
console.log(myRivers.getRiverStats("Nooksack"));
console.log(myRivers.getRiverStats("Stillaguamish"));
console.log(myRivers.getRiverStats("Skagit"));
console.log(myRivers.getRiverStats("Snohomish"));
console.log( myRivers.getRiverStats("Green") );
