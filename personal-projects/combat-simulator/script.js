let player = {
    stats: {
        health: 20,
        atk: 10
    }
}

let enemy = {
    stats: {
        health: 12,
        atk: 5
    }
}

function atkEnemy() {
    let num = Math.floor(Math.random() * 100)

    if (num <= 70) {
        console.log(`Attacking Enemy for ${player.stats.atk} damage!`)
        enemy.stats.health -= player.stats.atk;
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
        player.stats.health -= enemy.stats.atk;
        console.log(`Your health is now ${player.stats.health}`)
    } else {
        console.log(`Enemies Attack Missed`)
    }
}



atkEnemy()
