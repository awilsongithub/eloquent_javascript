
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
// 1. assign 3 properties, 2 using defineProperty 1 of which should be nonenumerable.
// 2. log all non-enumerable properties. then log all properties.
Object.prototype.enumerateMe = 'hello from prototype!'; // enumerable in self and instances
Object.prototype.readyOrNot = 'careful, folks can see me. Im hiding in your prototype'; // enumerable in self and instances
// defineProperty gives us a choice
Object.defineProperty(Object.prototype, 'dontEnumerateMe', {enumerable: false, value: 'on the DL'});
Object.defineProperty(Object.prototype, 'definedAndProud', {enumerable: true, value: 'out of the shadows'});
Object.defineProperty(woofer, 'wooferHidden', {enumerable: false, value: 'shhhhh'});
Object.defineProperty(woofer, 'wooferEnumerate', {enumerable: true, value: 'hello all!'});

// constructor given, hello everybody, hello all,
for (var key in woofer){
    // console.log(key); // will include
}
// make an object without any prototype. a clean, lonely new thing.
var noRoots = Object.create(null);
noRoots.justMine = 'this is only mine';
for (var item in noRoots){
    console.log(item);
}

// DEFINING A GETTER SYNTAX ALLOWING RETRIEVAL BY NAME
var d = Date.prototype;
console.log(d);
Object.defineProperty(d, 'year', {
    get: function(){
        return this.getFullYear();
    }
});
var now = new Date();
console.log(now.year);

/*===========================================
DEREK BANAS OBJ ORIENTED JS
=============================================*/
var customer = {
    name: "tom",
    telephone: '708-805-5853',
    speak: function(){
        return "my name is " + this.name;
    },
    address: {
        street: '1212 michigan',
        city: 'Chicago',
        state: 'IL'
    },
    set telSet(telNum){
        this.telephone = telNum;
        console.log(this.telephone);
    },
    get telGet(){
        return this.telephone;
    }
};
// call setter with a new number
customer.telSet = '708-524-0872'; // set like a property don't call like a function
console.log(customer.telGet); // call like a prop, not like a function




customer.address.country ='U.S.';
document.write(customer.speak() + '<br/>');

function Person(name, street){
    var secretNum = 75; // private variable
    this.guessNum = function(guess){ // clues to guesser
        if (guess > 75){
            return 'Lower';
        } else if (guess < 75){
            return 'Higher';
        } else {
            return 'Correct!';
        }
    }
    this.name = name;
    this.street = street;
    this.info = function(){
        return this.name + ' lives on ' + this.street;
    };
}
var bobSmith = new Person('Bob Smith', 'Wabash');
console.log(bobSmith.guessNum(75));
document.write(bobSmith.info() + '<br/>' + (bobSmith instanceof Person) + '<br/>');

// DEPRECATED BUT COMMON WAY TO DEFINE SETTER, GETTER ON prototype
// args = target, new prop, value(s)
Object.__defineSetter__.call(Person.prototype, 'setStreet', function(streetInput){
    this.street = streetInput;
});
// test the setter
bobSmith.setStreet = '123 main street';
console.log(bobSmith);

// DEFINE A NICE CLEAN MINIMAL CONSTRUCTOR FOR A CIRCLE W JUST 1 PROP: RADIUS
// ADD SET AND GET RADIUS METHODS TO IT'S PROTOYPE AND A GET AREA THAT USES PI*R2D
// INSTANTIATE A CIRCLE Object, SET ITS RADIUS, DOC.WRITE ITS AREA
function Circle(radius){
    this._radius = radius;
}
Circle.prototype = {
    set radius(radius) { this._radius = radius },
    get radius() { return this._radius },
    get area() { return Math.PI * (this._radius * this._radius) }
};
var myCircle = new Circle(5);
myCircle.radius = 10;
console.log(myCircle.radius + ' ' + myCircle.area.toFixed(2));







function getSum(num1, num2){
    return num1 + num2;
}
document.write('number of args in getSum: ' + getSum.length + '<br/>');
Person.prototype.sound = 'Grrrrrr';
Person.prototype.makeSound = function(){
    return this.name + ' says ' + this.sound + '<br/>';
}
document.write( bobSmith.makeSound() + '<br/>');
// bracket notation needed in loop as prop variable must be evaluted and then run thru .toString() (prop is itself not the name of any properties)
for (var prop in bobSmith){
    // console.log(prop + ': ' + bobSmith[prop] + '<br/>');
}
console.log(bobSmith.hasOwnProperty("enumerateMe")); // false, prototype has it
