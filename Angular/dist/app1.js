var message = "Hello World";
console.log(message);
var episode = 4;
//episode = 'teste';
console.log("This is episode " + 4);
episode = episode + 1;
console.log("Next episode is " + episode);
//let favoriteDroid
var favoriteDroid;
favoriteDroid = 'BB-8';
//favoriteDroid = 8; //possivel mudar o tipo da variavel
console.log("My favorite droid is " + favoriteDroid);
var isEnoughToBeatMF = function (parsecs) {
    return parsecs < 12;
};
var distance = 14;
console.log("Is " + distance + " parsecs enough to beat Millennium Falcon ? " + (isEnoughToBeatMF(distance) ? 'YES' : 'NO'));
var call = function (name) { return console.log("Do you copy, " + name + "?"); };
call('R2');
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log("inc (5,1) = " + inc(5, 1));
console.log("inc (5) = " + inc(5));
console.log("inc (5,2) = " + inc(5, 2));
