import {Spacecraft,Containership} from './base-ships'
import {MilleniumFalcon} from './starfighters'
import {get_class} from './nameClass'

import * as teste from 'lodash'
console.log(teste.pad("Typescript Examples",40,"="))

let ship = new Spacecraft('hyperdrive');
ship.jumpIntoHyperSpace();

let falcon = new MilleniumFalcon();
falcon.jumpIntoHyperSpace();


let goodForTheJob = (ship: Containership) => ship.cargoContainer > 2
console.log(`Is ${get_class(falcon)} good for the job? ${goodForTheJob(falcon)? 'YES':'NO'}`);

