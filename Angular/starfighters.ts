import {Spacecraft,Containership} from './base-ships'

export class MilleniumFalcon extends Spacecraft implements Containership{
    cargoContainer: number
    constructor(){
        super('hyperdrive');
        this.cargoContainer = 4;
    }

    jumpIntoHyperSpace(){
        if(Math.random() >= 0.5){
            super.jumpIntoHyperSpace();
        }else{
            console.log('Failed to jump into hyperspace');
        }
    }
}