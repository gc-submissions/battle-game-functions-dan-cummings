"use strict";

// TODO - write your code here.
const randomDamage = () => Math.floor(Math.random() * 10 + 1);

const chooseOption = (opt1, opt2) => {
  const randNum = Math.round(Math.random());

  return randNum ? opt2 : opt1;
};

const attackPlayer = function (health) {
  return health - randomDamage();
};

const logHealth = (player, health) =>
  console.log(`${player} health: ${health}`);

const logDeath = (winner, loser) => console.log(`${winner} defeated ${loser}`);

const isDead = (health) => health <= 0;

function fight(player1, player2, player1Health, player2Health) {
  while (true) {
    let attacker = chooseOption(player1, player2);

    if (attacker === player1) {
      player2Health = attackPlayer(player2Health);
      logHealth(player2, player2Health);
      if (isDead(player2Health)) {
        logDeath(player1, player2);
        break;
      }
    } else {
      player1Health = attackPlayer(player1Health);
      logHealth(player1, player1Health);
      if (isDead(player1Health)) {
        logDeath(player2, player1);
        break;
      }
    }
  }
}

fight("Mitch", "Adam", 100, 100);

const getGrade = (score) => {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
};

const prioritize = (urgent, important) => {
  if (urgent && important) {
    return 1;
  } else if (important && !urgent) {
    return 2;
  } else if (urgent && !important) {
    return 3;
  } else {
    return 4;
  }
};

const calculatePay = (wage, hours) => {
  if (hours > 40) {
    return wage * 40 + wage * 1.5 * (hours - 40);
  } else {
    return wage * hours;
  }
};
