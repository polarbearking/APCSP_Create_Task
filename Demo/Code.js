let main_health = 100
let boss_health = 200
let damage = 0

function attack() {
  damage = Math.floor((Math.random() * 23) + 7);
}

function trial()  {
  console.log(damage)
}
