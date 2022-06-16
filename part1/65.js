/* splice method (imp.) */
// can be used to delete, insert or both for nth-elements (from a specific range) 

const myArray = ['item1', 'item2', 'item3'];

// delete:
// const deletedItem = myArray.splice(1, 2);
// console.log("deleted item:", deletedItem);

// insert:
// myArray.splice(1, 0,'inserted item');

// insert & delete:
const deletedItem = myArray.splice(1, 2, "inserted item1", "inserted item2");
console.log("deleted item:", deletedItem);

console.log(myArray);


/* future-work: */
// - need to figure how move semantics should be implemented in JS
// - below example is reason why:

// const someExistingArray = ['bla','blue', 'boom'];

// someExistingArray.push( ...deletedItem);
// copy constructs values from deletedItem

// but we need to move construct
// or atleast remove the previous duplicate pointed by deletedItem:
// delete deletedItem; // will work?

// what if we directly referred the returned array inside splice?:
// someExistingArray.push( ...myArray.splice(1, 2));

// will it move construct the whole array object?
// since there will be no reference pointing to returned array,
// so garbage-collector will/should destroy duplicate pointed by deletedItem.
// but still strings are copy construced or are they move-constructed 
// as a compliler optimization for primitives?

// console.log(someExistingArray);