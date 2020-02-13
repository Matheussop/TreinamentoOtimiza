class Spacecraft{
    
    constructor(public propulsor: string){}

    jumpIntoHyperSpace(){
        console.log(`Entering hyperspace with ${this.propulsor}`)
    }
}

interface Containership{
    cargoContainer: number
}

export{Spacecraft,Containership}