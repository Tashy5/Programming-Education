let player = {
    stats: {
        health: 20,
        atk: 10,
        defence: 1000
    }
}

let enemy = {
    stats: {
        health: 12,
        atk: 5,
        defence: 10
    }
}

function atkEnemy() {
    let num = Math.floor(Math.random() * 100)

    if (num <= 70) {
        console.log(`Attacking Enemy!`)
        let damageReturn = defenceDamageReduction( player, enemy );
        enemy.stats.health -= damageReturn;
        console.log(`Enemies health is now ${enemy.stats.health}`)
    } else {
        console.log(`Attack Missed`);
    }
    
    randomEnemyChoice()
}

function displayStats(character) {
    return character.stats;
}

function randomEnemyChoice() {
    let num = Math.floor(Math.random() * 100);

    if (num <= 55) {
        console.log(`Enemy attacking for ${enemy.stats.atk}`)
        let damageReturn = defenceDamageReduction( enemy, player );
        player.stats.health -= damageReturn;
        console.log(`Your health is now ${player.stats.health}`)
    } else {
        console.log(`Enemies Attack Missed`)
    }
}

function defenceDamageReduction(player,enemy) {
    let reduction = enemy.stats.defence / (enemy.stats.defence + 100)
    let damageReturn = Math.floor(player.stats.atk * (1 - reduction))
    if (damageReturn === 0) {
        console.log(`Attack Blocked!`)
        return damageReturn;
    } else {
        return damageReturn;  
    } 
}



atkEnemy()
