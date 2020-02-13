let message: string = "Hello World";
console.log(message);

let episode:number = 4;
//episode = 'teste';
console.log("This is episode " + 4);
episode = episode + 1;
console.log("Next episode is " + episode);
//let favoriteDroid
let favoriteDroid: string;
favoriteDroid = 'BB-8';
//favoriteDroid = 8; //possivel mudar o tipo da variavel
console.log("My favorite droid is " + favoriteDroid);


let isEnoughToBeatMF = function (parsecs: number): boolean {
    return parsecs < 12
}

let distance = 14

console.log(`Is ${distance} parsecs enough to beat Millennium Falcon ? ${isEnoughToBeatMF(distance) ? 'YES':'NO'}`)

let call = (name: string) => console.log(`Do you copy, ${name}?`);
call('R2');

function inc (speed: number,inc: number = 1): number {
    return speed + inc;
}

console.log(`inc (5,1) = ${inc(5,1)}`);
console.log(`inc (5) = ${inc(5)}`);
console.log(`inc (5,2) = ${inc(5,2)}`);