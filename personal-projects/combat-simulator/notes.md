## Project Overview
I wanted to create a battle simulator which runs a program through two enemies fighting. The properties would include:
### Stats:
- Attack
- Defence
- Health
- Dodge Potential
### Equipment:
- Armour
- Weapons
- Charms
- Jewelery
### Skills
- Stat buffs
- Attack Skills
- Deflect skills
- Defence Skills

## Project Timeline
### Day 1
I started by creating two objects, a player and an enemy. This would be the object to include all information about said entity. Inside would be a "stats" object which would have nested objects such as health and atk in there. 

I wanted to just get the base attack function down today. So I made the program able to run through a sequence which would affect the entitys health if attack and also use a Math.random number function to decide if the enemies attack lands or not.

### Day 2
#### Tasks
- Make a defence stat
    - The defence stat needs to create a ratio/percentage based change to the incoming damage [x]
    - Create the formula reduction = ( Defence / (Defence + 100)) [x]
- Redesign the entire codebase. Have:
    - playerTurn()
        - checkHit()
        - calculateDamage()
        - applyDamage()
        - displayResult()
    - enemyTurn()
        - checkHit()
        - calculateDamage()
        - applyDamage()
        - displayResult()