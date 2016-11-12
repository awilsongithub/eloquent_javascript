
/* ===========================
GET TO THE ROOT
AND BE EFFICIENT
WITH THE POWER OF
PROTOTYPICAL INHERITANCE!
============================== */
console.log( Object.getPrototypeOf([]) == Array.prototype ); // T
// define a functin and give it an object literal
function speak(noise){
    var sound = this.type + ' says ' + noise;
    console.log(sound);
}
var protoRabbit = {
    speak: speak
};
var evilRabbit = Object.create(protoRabbit); // create obj using arg as prototype
console.log(evilRabbit); // it's _proto_ prop is an Object with a speak property
evilRabbit.type = 'evil'; // give an instance a new property with a value
evilRabbit.speak('boogaboogabooga!'); // call a method with an argument

function Dog(breed, size, age){
    this.breed = breed;
    this.size = size;
    this.age = age;
    this.speak = speak;
}
var woofer = new Dog('mastiff', '150 lbs', 1);
console.log(woofer); // object with properties
console.log(Object.getPrototypeOf(Dog)); // Function.prototype ??? what in prototype property???
console.log(Object.getPrototypeOf(woofer)); // an object with TWO! properties: 1. constructor: Dog 2. _proto_: Object (with all the methods of an object. This Object itself has a constructor property of "Object()") and so on many levels deep.

/* ==================================
ENUMERABLE vs. NONENUMERABLE PROPERTIES
YOU HAVE A CHOICE!
ENUMERATE: "to mention one by one as in a list"
===================================== */
// if you want them mentioned as props of instances
Object.prototype.enumerateMe = 'hello everybody!';
// if you don't, use defineProperty
Object.defineProperty(Object.prototype, 'dontEnumerateMe', {enumerable: false, value: 'on the DL'});
for (var key in evilRabbit){
    console.log(key); // will include
}
