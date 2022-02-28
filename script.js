// Create a class called pokemon with a constructer that takes in a name, type, and attack
// Create a method for this class that console logs that the pokemon used its attack ex: "Pickachu, used Thunderbolt"
// Instantiate 2 new pokemon then use the attack method for both of them.
// You can upload a zip file of this code or push it to a github repo


class Pokemon {
    constructor(name, type, attack) {
        this.name = name,
        this.type = type,
        this.attack = attack

    }

    usedAttack() {
        return(`${this.name} used ${this.attack}`)
    }
}

const Pickachu = new Pokemon("Pickachu", "Electric", "Thunderbolt")
const Charmander = new Pokemon("Charmander", "Fire", "Flamethrower")
const Squirtle = new Pokemon("Squirtle", "Water", "Aqua Jet")

console.log(Pickachu.usedAttack())
console.log(Charmander.usedAttack())
console.log(Squirtle.usedAttack())