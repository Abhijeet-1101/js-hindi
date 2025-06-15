/*console.log(2>1);
console.log(2<=1);
console.log(3!=1);
*/
console.log("2">1);

console.log(null>0);
console.log(null==0);
console.log(null>=0);  //surprising part of null behaviour Because Comparison operators (>, >=) convert null to a number (0).But equality operator (==) doesn’t convert null to a number — it follows different rules.

console.log(undefined>0); //undefined change to NaN in comparator operators.
console.log(undefined==0); //false for all.
console.log(undefined>=0);

console.log("2"===2); //false
console.log("2"==2); //true

