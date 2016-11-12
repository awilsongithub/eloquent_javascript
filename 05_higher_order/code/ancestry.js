var ANCESTRY_FILE = "[\n  " + [
  '{"name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel"}',
  '{"name": "Emma de Milliano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme"}',
  '{"name": "Maria de Rycke", "sex": "f", "born": 1683, "died": 1724, "father": "Frederik de Rycke", "mother": "Laurentia van Vlaenderen"}',
  '{"name": "Jan van Brussel", "sex": "m", "born": 1714, "died": 1748, "father": "Jacobus van Brussel", "mother": "Joanna van Rooten"}',
  '{"name": "Philibert Haverbeke", "sex": "m", "born": 1907, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"}',
  '{"name": "Jan Frans van Brussel", "sex": "m", "born": 1761, "died": 1833, "father": "Jacobus Bernardus van Brussel", "mother":null}',
  '{"name": "Pauwels van Haverbeke", "sex": "m", "born": 1535, "died": 1582, "father": "N. van Haverbeke", "mother":null}',
  '{"name": "Clara Aernoudts", "sex": "f", "born": 1918, "died": 2012, "father": "Henry Aernoudts", "mother": "Sidonie Coene"}',
  '{"name": "Emile Haverbeke", "sex": "m", "born": 1877, "died": 1968, "father": "Carolus Haverbeke", "mother": "Maria Sturm"}',
  '{"name": "Lieven de Causmaecker", "sex": "m", "born": 1696, "died": 1724, "father": "Carel de Causmaecker", "mother": "Joanna Claes"}',
  '{"name": "Pieter Haverbeke", "sex": "m", "born": 1602, "died": 1642, "father": "Lieven van Haverbeke", "mother":null}',
  '{"name": "Livina Haverbeke", "sex": "f", "born": 1692, "died": 1743, "father": "Daniel Haverbeke", "mother": "Joanna de Pape"}',
  '{"name": "Pieter Bernard Haverbeke", "sex": "m", "born": 1695, "died": 1762, "father": "Willem Haverbeke", "mother": "Petronella Wauters"}',
  '{"name": "Lieven van Haverbeke", "sex": "m", "born": 1570, "died": 1636, "father": "Pauwels van Haverbeke", "mother": "Lievijne Jans"}',
  '{"name": "Joanna de Causmaecker", "sex": "f", "born": 1762, "died": 1807, "father": "Bernardus de Causmaecker", "mother":null}',
  '{"name": "Willem Haverbeke", "sex": "m", "born": 1668, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}',
  '{"name": "Pieter Antone Haverbeke", "sex": "m", "born": 1753, "died": 1798, "father": "Jan Francies Haverbeke", "mother": "Petronella de Decker"}',
  '{"name": "Maria van Brussel", "sex": "f", "born": 1801, "died": 1834, "father": "Jan Frans van Brussel", "mother": "Joanna de Causmaecker"}',
  '{"name": "Angela Haverbeke", "sex": "f", "born": 1728, "died": 1734, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"}',
  '{"name": "Elisabeth Haverbeke", "sex": "f", "born": 1711, "died": 1754, "father": "Jan Haverbeke", "mother": "Maria de Rycke"}',
  '{"name": "Lievijne Jans", "sex": "f", "born": 1542, "died": 1582, "father":null, "mother":null}',
  '{"name": "Bernardus de Causmaecker", "sex": "m", "born": 1721, "died": 1789, "father": "Lieven de Causmaecker", "mother": "Livina Haverbeke"}',
  '{"name": "Jacoba Lammens", "sex": "f", "born": 1699, "died": 1740, "father": "Lieven Lammens", "mother": "Livina de Vrieze"}',
  '{"name": "Pieter de Decker", "sex": "m", "born": 1705, "died": 1780, "father": "Joos de Decker", "mother": "Petronella van de Steene"}',
  '{"name": "Joanna de Pape", "sex": "f", "born": 1654, "died": 1723, "father": "Vincent de Pape", "mother": "Petronella Wauters"}',
  '{"name": "Daniel Haverbeke", "sex": "m", "born": 1652, "died": 1723, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}',
  '{"name": "Lieven Haverbeke", "sex": "m", "born": 1631, "died": 1676, "father": "Pieter Haverbeke", "mother": "Anna van Hecke"}',
  '{"name": "Martina de Pape", "sex": "f", "born": 1666, "died": 1727, "father": "Vincent de Pape", "mother": "Petronella Wauters"}',
  '{"name": "Jan Francies Haverbeke", "sex": "m", "born": 1725, "died": 1779, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"}',
  '{"name": "Maria Haverbeke", "sex": "m", "born": 1905, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"}',
  '{"name": "Petronella de Decker", "sex": "f", "born": 1731, "died": 1781, "father": "Pieter de Decker", "mother": "Livina Haverbeke"}',
  '{"name": "Livina Sierens", "sex": "f", "born": 1761, "died": 1826, "father": "Jan Sierens", "mother": "Maria van Waes"}',
  '{"name": "Laurentia Haverbeke", "sex": "f", "born": 1710, "died": 1786, "father": "Jan Haverbeke", "mother": "Maria de Rycke"}',
  '{"name": "Carel Haverbeke", "sex": "m", "born": 1796, "died": 1837, "father": "Pieter Antone Haverbeke", "mother": "Livina Sierens"}',
  '{"name": "Elisabeth Hercke", "sex": "f", "born": 1632, "died": 1674, "father": "Willem Hercke", "mother": "Margriet de Brabander"}',
  '{"name": "Jan Haverbeke", "sex": "m", "born": 1671, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}',
  '{"name": "Anna van Hecke", "sex": "f", "born": 1607, "died": 1670, "father": "Paschasius van Hecke", "mother": "Martijntken Beelaert"}',
  '{"name": "Maria Sturm", "sex": "f", "born": 1835, "died": 1917, "father": "Charles Sturm", "mother": "Seraphina Spelier"}',
  '{"name": "Jacobus Bernardus van Brussel", "sex": "m", "born": 1736, "died": 1809, "father": "Jan van Brussel", "mother": "Elisabeth Haverbeke"}'
].join(",\n  ") + "\n]";

// This makes sure the data is exported in node.js —
// `require(./path/to/ancestry.js)` will get you the array.
if (typeof module != "undefined" && module.exports)
  module.exports = ANCESTRY_FILE;

var ancestry = JSON.parse(ANCESTRY_FILE);
var daFirstName = ancestry[0].name;
// console.log(daFirstName);


/* ===================================================
            MOTHER CHILD AGE DIFFERENCE
====================================================== */
// for each person find mother and log her object if it exists
// var nameFilter;
var difsArray = [];
ancestry.forEach(function(person){
    var childBorn = person.born;
    nameFilter = person.mother;
    var motherObject = ancestry.filter(getObjectFromName);
    // console.log(nameFilter);
    var motherBorn;
    if (motherObject[0]) {
        // console.log(motherObject[0].born);
        motherBorn = motherObject[0].born;
        var ageDif = childBorn - motherBorn;
        difsArray.push(ageDif);
    }
});
// console.log(difsArray);
var arraySum = difsArray.reduce(getSum);
var averageDif = arraySum / difsArray.length;
console.log('For cases where both both mother and child appear in the data, the average age of mothers when they had their child is ' + averageDif.toFixed(0) +
'.');

// helper function: get average of an array
function getSum(accumulator, value){
    return accumulator + value;
}

// helper function: gets an object by value of it's name property
function getObjectFromName(person){
    return person.name == nameFilter;
}

/* ===================================================
            HISTORICAL LIFE EXPECTANCY
====================================================== */

// object holding array of ages for each century
var agesByCentury = {
    century20Ages: [],
    century19Ages: [],
    century18Ages: [],
    century17Ages: [],
    century16Ages: []
};
var averageAgeByCentury = [];

// call the master function
historicalLifeExpectancy();

function historicalLifeExpectancy(){
    // get ages of people and put them into sub arrays by century of death
    ancestry.forEach(addAgeToSubArray);
    // console.log(agesByCentury);
    getAllAverages(agesByCentury);
    // console.log(averageAgeByCentury);
    logAverages(averageAgeByCentury);
}

// how old was person at death and when did they die?
function addAgeToSubArray(person){
    var died = person.died;
    var born = person.born;
    var age = died - born;
    if (died >= 1900 && died < 2000){
        agesByCentury.century20Ages.push(age);
    } else if (died >= 1800 && died < 1900){
        agesByCentury.century19Ages.push(age);
    } else if (died >= 1700 && died < 1800){
        agesByCentury.century18Ages.push(age);
    } else if (died >= 1600 && died < 1700){
        agesByCentury.century17Ages.push(age);
    } else if (died >= 1500 && died < 1600){
        agesByCentury.century16Ages.push(age);
    }
}

// get the average age for each century 
function getAllAverages(data){
    for (var key in agesByCentury){
        var agesArray = agesByCentury[key]; // the array (value of the key)
        var avg = getOneAverage(agesArray); // get array average
        averageAgeByCentury.push(avg);
    }
}

function logAverages(array){
    // iterate and give starting century
    var startingCentury = 20;
    for (var i=0; i<array.length; i++){
        // get value and output message
        var avg = array[i].toFixed(0);
        console.log('Average lifespan for the ' + startingCentury + 'th Century was ' + avg + ' years.');
        startingCentury -= 1;
    }
}

// get average from an array
function getOneAverage(array){
    // console.log(array);
    var sum = array.reduce(getSum); // sum of all nums in array
    var avg = sum / array.length;
    // console.log(avg);
    return avg;
}



/* ===================================================
                EVERY AND SOME
====================================================== */

// return true first time we get a true. if get false keep trying for a true.
function some(array, predicate){
    for (var i=0; i< array.length; i++){
        if (predicate(array[i])){
            return true;
        }
    }
    return false;
}
// return false first time we get a false. if all true return true.
function every(array, predicate){
    for (var i=0; i< array.length; i++){
        if (!predicate(array[i])){
            return false;
        }
    }
    return true;
}

var stringsArray = ['joe', 'bob', 'tim'];
var mixedArray = [3, 4, 5, 'bob'];
var numbersArray = [4, 5, 6];
function predicate(x){
    return typeof x == 'number';
}
console.log(some(stringsArray, predicate)); // false
console.log(some(numbersArray, predicate)); // true
console.log(every(mixedArray, predicate)); // false


/* ===================================================
                OTHER STUFF....
====================================================== */

// for each person in ancestry array, log name and year born
function logThis(item){
  ancestry.forEach(function(person){
     var introduction = person.name + ' was born in ' + person.born;
     console.log(introduction);
  });
}

// FILTER WITH HELPER FUNCTION
// pass a function variable as an argument to the filter method of an array
// helper function needs to specify a paramter name it can then operate on
var filteredAncestors = ancestry.filter(logNames);
// console.log(filteredAncestors);
function logNames(person){
    return person.born < 1900;
}

// MAP WITH HELPER FUNCTION
// array's map function maps each item to a new array
var mappedArray = ancestry.map(getNameOnly);
// console.log(mappedArray);
function getNameOnly(item){
    if (item.sex == 'm')
        return item.name + 'is a guy.';
    else {
        return item.name + 'is a gal.';
    }
}

window.onload = function(){
  var button1 = document.getElementById('buttonOne');
  button1.addEventListener('click', logThis);
};
