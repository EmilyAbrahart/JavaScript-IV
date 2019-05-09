/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

class GameObject {
  constructor(gameData) {
    this.createdAt = gameData.createdAt;
    this.name = gameData.name;
    this.dimensions = gameData.dimensions;
  }

  destroy() {
    return `${this.name} was removed from the game.`;
  }
}

/*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */

class CharacterStats extends GameObject {
  constructor(gameData) {
    super(gameData);
    this.healthPoints = gameData.healthPoints;
  }

  takeDamage() {
    return `${this.name} took damage.`;
  }
}

/*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
class Humanoid extends CharacterStats {
  constructor(gameData) {
    super(gameData);
    this.team = gameData.team;
    this.weapons = gameData.weapons;
    this.language = gameData.language;
  }

  greet() {
    return `${this.name} offers a greeting in ${this.language}.`;
  }
}
/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

// Test you work by un-commenting these 3 objects and the list of console logs below:

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 5,
  name: "Bruce",
  team: "Mage Guild",
  weapons: ["Staff of Shamalama"],
  language: "Common Tongue"
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 15,
  name: "Sir Mustachio",
  team: "The Round Table",
  weapons: ["Giant Sword", "Shield"],
  language: "Common Tongue"
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: "Lilith",
  team: "Forest Kingdom",
  weapons: ["Bow", "Dagger"],
  language: "Elvish"
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

// Stretch task:
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!

// Hero  ==========================================================================================================

class Hero extends Humanoid {
  constructor(gameData) {
    super(gameData);
    this.attackPower = gameData.attackPower; // Base damage done
    this.critStrike = gameData.critStrike; // Has a chance for an attack to do double damage
    this.armor = gameData.armor; // Flat % damage reduction
  }

  hDamageDone() {
    // Random number is generated to determine whether the attack will trigger a critical strike for double damage.
    let critRand = Math.random();
    if (critRand > 1 - this.critStrike / 10) {
      return this.attackPower * 2;
    } else {
      return this.attackPower;
    }
  }

  hDamageTaken(dmgTaken) {
    let damage = Math.round(dmgTaken - (dmgTaken / 100) * this.armor); // Calculate damage reduction from armor
    this.healthPoints = this.healthPoints - damage; // Re-calculate HP after hit
    console.log(
      `${this.name} took ${damage} damage! They have ${
        this.healthPoints
      }HP remaining...`
    );
  }
}

// Villain   ========================================================================================================

class Villain extends Humanoid {
  constructor(gameData) {
    super(gameData);
    this.attackPower = gameData.attackPower; // Base damage done
    this.strength = gameData.strength; // Flat % dmg increase
    this.leech = gameData.leech; // Has a chance to heal when taking damage for their leech amount.
  }

  vDamageDone() {
    return this.attackPower + (this.attackPower / 100) * this.strength;
  }

  vDamageTaken(dmgTaken) {
    let damage = dmgTaken;
    // Random number is generated to determine whether the hit will trigger their leech effect.
    let leechRand = Math.random();
    if (leechRand > 1 - this.leech / 10) {
      damage = Math.round(dmgTaken - this.leech);
    }
    this.healthPoints = this.healthPoints - damage;
    console.log(
      `${this.name} took ${damage} damage! They have ${
        this.healthPoints
      }HP remaining...`
    );
  }
}

// Characters created =================================================================================================

const SuperDave = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 100,
  name: "SuperDave",
  team: "PowerPuff Girls",
  weapons: ["Staff of Friendship"],
  language: "Common Tongue",
  attackPower: 4,
  critStrike: 4,
  armor: 7
});

const EvilErik = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 100,
  name: "EvilErik",
  team: "Order of the Wrong Side Pedestrian",
  weapons: ["Club of Clubbing", "Bulwark of a Silent Front"],
  language: "Common Tongue",
  attackPower: 4,
  strength: 6,
  leech: 3
});

// FIGHT!!

function epicBattle(fighter1, fighter2) {
  console.log(
    `${fighter1.name} and ${
      fighter2.name
    } are ready to battle! 3... 2.... 1...... FIGHT!`
  );
  let winner = "";
  while (fighter1.healthPoints > 0 && fighter2.healthPoints > 0) {
    f1DmgDone = fighter1.hDamageDone();
    fighter2.vDamageTaken(f1DmgDone);
    f2DmgDone = fighter2.vDamageDone();
    fighter1.hDamageTaken(f2DmgDone);
  }
  winner = fighter1.healthPoints > 0 ? fighter1.name : fighter2.name;
  console.log(`${winner} has defeated their opponent! They are the winner!`);
}
