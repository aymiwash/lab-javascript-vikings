// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength
    };
    receiveDamage(damage) {
        this.health -= damage
    };
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name;
    }
    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        }
        else {
            return `${this.name} has died in act of combat`
        }
    };
    battleCry() {
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        }
        else {
            return `A Saxon has died in combat`
        }
    };

}

// War
let viking1 = new Viking("Ragnar", 1000, 55)

const getRandomIndex = function (array) {
    return Math.floor(Math.random() * array.length)
}


class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }
    addViking(vikingObject) {
        this.vikingArmy.push(vikingObject)
    };
    addSaxon(saxonObject) {
        this.saxonArmy.push(saxonObject)
    };
    vikingAttack() {
        const randomViking = this.vikingArmy[getRandomIndex(this.vikingArmy)]
        const randomSaxonIndex = getRandomIndex(this.saxonArmy)
        const randomSaxon = this.saxonArmy[randomSaxonIndex]
        const attackResult = randomSaxon.receiveDamage(randomViking.strength)
        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(randomSaxonIndex, 1)
        }
        return attackResult
    }
    saxonAttack() {
        const randomSaxon = this.saxonArmy[getRandomIndex(this.saxonArmy)]
        const randomVikingIndex = getRandomIndex(this.vikingArmy)
        const randomViking = this.vikingArmy[randomVikingIndex]
        const attackResult = randomViking.receiveDamage(randomSaxon.strength)
        if (randomViking.health <= 0) {
            this.vikingArmy.splice(randomVikingIndex, 1)
        }
        return attackResult
    }
    showStatus() {
        if(this.saxonArmy.length === 0){
            return `Vikings have won the war of the century!`
        }
        else if(this.vikingArmy.length === 0){
            return `Saxons have fought for their lives and survived another day...`
        }else{
            return `Vikings and Saxons are still in the thick of battle.`
        }

    }
}

