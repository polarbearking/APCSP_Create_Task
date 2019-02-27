let main_health = 100;
let boss_health = 150;
let p_damage = 0;
let b_damage = 0;
let special = 0;

function p_attack() {
  p_damage = Math.floor((Math.random() * 23) + 7);
  boss_health = boss_health - p_damage;
  special = special + 1;
}
function b_attack() {
  b_damage = Math.floor((Math.random() * 6) + 10);
  main_health = main_health - b_damage
}
  function sattack() {
    if (special >= 4) {
      boss_health = boss_health - 30;
      special = 0
    } else {
      alert("You do not have enough special energy.")
    }
  }

function trial()  {
  console.log(p_damage);
  console.log(boss_health);
  console.log(special);
}
