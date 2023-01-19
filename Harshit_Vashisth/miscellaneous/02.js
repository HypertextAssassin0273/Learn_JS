/* defining type-strict comparison operators for string & number classes */

// >  : gt()   [greater than]
// <  : lt()   [lesser than]
// >= : gte()  [greater than or equals to]
// <= : lte()  [lesser than or equals to]


function gt(o) { return (typeof this.valueOf() === typeof o) && (this > o); }
function lt(o) { return (typeof this.valueOf() === typeof o) && (this < o); }
function gte(o) { return (typeof this.valueOf() === typeof o) && (this >= o); }
function lte(o) { return (typeof this.valueOf() === typeof o) && (this <= o); }

String.prototype.gt = Number.prototype.gt = gt;
String.prototype.lt = Number.prototype.lt = lt;
String.prototype.gte = Number.prototype.gte = gte;
String.prototype.lte = Number.prototype.lte = lte;

// testing:
// console.log("15" > 11); // true
// console.log("15".gt(11)); // false
// console.log((15).gt("11")); // false


/*Notes: 
    - arrow functions will not work when referencing to classes using prototype
      since, they don't provide 'this' object-feature inside them
    - use only when there is a chance of having 2 different types in comparison
      (i.e. string & number: "5" > 4 => gives true instead of false)
*/