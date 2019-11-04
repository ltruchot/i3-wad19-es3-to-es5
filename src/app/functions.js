console.log(document.querySelectorAll('#input'));
/*
var arr = [
  [1, [], 3],
  [4, 5, [8, [78, [1, [45], 89]]]],
];
function recurse(list, finalArray) {
  for (var el of list) {
    if (typeof el === 'object') {
      recurse(el, finalArray);
    } else {
      finalArray.push(el);
    }
  }
  return finalArray;
}
console.log(recurse(arr, []));
*/
/*
function toto(i) {
  if (i < 10) {
    i++;
    toto(i);
  }
}
toto(0);
/*
function for_each(arr, f) {
  for (var el of arr) {
    f(el);
  }
}
var direJaime = function (i) { console.log("j'adore le chiffre " + i); throw new Error(); };
for_each([1, 2, 4], direJaime);
*/
/*
function map(arr, f) {
  var newArr = [];
  for (var el of arr) {
    var newEl = f(el);
    newArr.push(newEl);
  }
  return newArr;
}

var a = [1, 2, 3];
var b = map(a, function (el) { return el * 2; });
console.log(a, b);
*/
/*
function taillerCrayon() { throw new Error(); }
function fabriquerCrayon() { taillerCrayon(); }
function lancerProgramme() { fabriquerCrayon(); }
// lancerProgramme();
taillerCrayon();
*/
