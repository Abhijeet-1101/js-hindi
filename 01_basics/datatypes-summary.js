//primitive
//JavaScript is dynamically typed.Dynamically typed means you don't need to declare variable types. The type is determined at runtime based on the value assigned.
//7 Types: String,NumberBoolean,null,undefined,Symbol,BigInt

/*const score=100
const scoreValue=100.3
const isLoggedIn=false
const outsideTemp=null
let userEmail; //undefined automatically
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId);

*/

//Reference(Non primitive)

// Array,Objects,Functions



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(Primitive)=> copy,Heap(Non-primitve)=>Refernce

let youtubeName="abhijeetkumardotcome"
let anotherName=youtubeName
anotherName="chaiAurCode"
console.log(youtubeName);
console.log(anotherName);

let user1={
    email:"user@google.com",       //key value pair always separated by comma except the last one
    upi:"user@ybl"
}
let user2=user1
user2.email="abhijeet@gmail.com"
console.log(user1.email);
console.log(user2.email);
