
let course = "BINTO1064U.LA_E21"
let regex = /(\w{4})(O)(1064)(.*)/;
/*
//opgave 1
console.log (/\w/.test(course))

//opgave 2
console.log (/\d/.test(course))

//opgave 3
console.log (/(BINT)/.exec(course))

//opgave 4
console.log (/(_)/.exec(course))

//opgave 5
console.log(course.replace("U.LA_E21", " "))
*/
//OPGAVE 6
console.log(course.replace(regex, "$1$3"));

//opgave 7
$n = "E22"
console.log(course.replace("E21", $n));