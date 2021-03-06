/*var playerInfo = {
  name: window.prompt("What is your robot's name?"),
  health: 100,
  attack: 10,
  money: 10,
  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  }, // comma!
  refillHealth: function() {
    this.health += 20;
    this.money -= 7;
  }, // comma!
  upgradeAttack: function() {
    this.attack += 6;
    this.money -= 7;
  }
};

var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10, 14)
  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14)
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10, 14)
  }
];*/
//move this to the bottom 

//function to start a new game 
var startGame = function() {
  // reset player stats
  playerInfo.reset();

  
 // fight each enemy robot by looping over them and fighting them one at a time
 for (var i = 0; i < enemyInfo.length; i++) {
  // if player is still alive, keep fighting
  if (playerInfo.health > 0) {
    
    window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

    // pick new enemy to fight based on the index of the enemy.names array
    var pickedEnemyObj = enemyInfo[i];

    pickedEnemyObj.health = randomNumber(40, 60);

     console.log(pickedEnemyObj);

    // pass the pickedenemy.name variable's value into the fight function, where it will assume the value of the enemy parameter
    fight(pickedEnemyObj);
  }
  
  // if player is not alive, break out of the loop and let endGame function run
  else {
    break;
  }
 }
 endGame();
};
// function to end the entire game
var endGame = function() {
  window.alert("The game has now ended. Let's see how you did!");
  // if player is still alive, player wins!
 if (playerInfo.health > 0) {
  window.alert("Great job, you've survived the game! You now have a score of" + playerInfo.money + '.');
} else {
  window.alert("You've lost your robot in battle!");
}

 var playAgainConfirm = window.confirm('Would you like to play again?');

  if (playAgainConfirm) {
    startGame();
  } else {
    window.alert('Thank you for playing Battlebots! Come back soon!');
  }
};

var fight = function (enemy) {
  // repeat and execute as long as the enemy robot is alive 
  while (enemy.health > 0  && playerInfo.health > 0) {

  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

  // if player choses to skip
 if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm user wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    // if yes (true), leave fight
    if (confirmSkip) {
    window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
    // subtract money from playerInfo.money for skipping
    playerInfo.money = Math.max(0, playerInfo.money - 10);
    shop();
    break;
    }
   }
// generate random damage value based on player's attack power
  var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

  enemy.health = Math.max(0, enemy.health - damage);

  console.log(
     playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
   );
   // check enemy's health
   if (enemy.health <= 0) {
    window.alert(enemy.name + " has died!");
    //award player money for winning
    playerInfo.money = playerInfo.money + 20;
    // ask if user wants to use the store before next round
   var storeConfirm = window.confirm('The fight is over, visit the store before the next round?');

   // if yes, take them to the store() function
   if (storeConfirm) {
   shop();
  
   }
    //leave while()loop since enemy is dead
    break;
   } else {
    window.alert(enemy.name + " still has " + enemy.health + " health left.");
   }

  // remove player's health by subtracting the amount set in the enemy.attack variable
  var damage = randomNumber(enemy.attack - 3, enemy.attack);

 playerInfo.health = Math.max(0, playerInfo.health - damage);

   console.log(
    enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
  );

  // check player's health
  if (playerInfo.health <= 0) {
    window.alert(playerInfo.name + "has died!");
    //leave while() loop if player is dead
    break;
  } else {
    window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
   }
  } 
};

var shop = function() {
  // ask player what they'd like to do
   
   var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
   );

   // use switch to carry out action
   switch (shopOptionPrompt) {
    case "REFILL":
      case "refill":
        playerInfo.refillHealth();
        break;
      case "UPGRADE":
      case "upgrade":
        playerInfo.upgradeAttack();
        break;
        case "LEAVE": 
        case "leave":
        window.alert("Leaving the store.");
        break;
        default:
        window.alert("You did not pick a valid option. Try again.");
        shop();
        break;
   }
  };
  var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min) + min);
    return value;
  };
  //end game

  var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
      this.health = 100;
      this.money = 10;
      this.attack = 10;
    }, // comma!
    refillHealth: function() {
      window.alert("Refilling player's health by 20 for 7 dollars.");
      this.health += 20;
      this.money -= 7;
    }, // comma!
    upgradeAttack: function() {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
      this.attack += 6;
      this.money -= 7;
    }
  };
  
  var enemyInfo = [
    {
      name: "Roborto",
      attack: randomNumber(10, 14)
    },
    {
      name: "Amy Android",
      attack: randomNumber(10, 14)
    },
    {
      name: "Robo Trumble",
      attack: randomNumber(10, 14)
    }
  ];

console.log(enemyInfo);
console.log(enemyInfo[0]);
console.log(enemyInfo[0].name);
console.log(enemyInfo[0]['attack']);

//start game new
startGame();

