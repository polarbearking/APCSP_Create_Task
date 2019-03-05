let main_health = 100;
let boss_health = 150;
let p_damage = 0;
let b_damage = 0;
let special = 0;
let potions = 4;

// (Boss functions)
function b_attack() {
  b_damage = Math.floor((Math.random() * 6) + 10);
  main_health = main_health - b_damage;
  console.log("The Boss did " + b_damage + " damage.");
  if (main_health <= 0) {
    console.log("You lose.")
  } else {
      display();
  }
}

// (Player Functions)
function p_attack() {
  p_damage = Math.floor((Math.random() * 23) + 7);
  boss_health = boss_health - p_damage;
  special = special + 1;
  console.log("You did " + p_damage + " damage.");
  if (boss_health <= 0){
    console.log("You have acheived the victory royale.")
  } else {
    b_attack(); 
  }
}
function sattack() {
    if (special >= 4) {
      boss_health = boss_health - 30;
      special = 0;
      b_attack();
    } else {
      console.log("You do not have enough special energy.");
    }
  }
function potion() {
  if (potions > 0) {
    main_health = main_health + 30;
    potions = potions - 1;
    b_attack();
  } else {
    console.log("You do not have enough potions.");
  }
}
function display()  {
  console.log("Health:",main_health);
  console.log("Potions:",potions)
  console.log("Special Meter:",special);
  console.log("Boss Health:",boss_health);
}
