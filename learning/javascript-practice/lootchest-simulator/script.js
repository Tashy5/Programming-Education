let totalLootValue = 0;

let lootTable = [
    { name: "Coins", value: 5000},
    { name: "Magic Orb", value: 38500},
    { name: "Dragon Eye", value: 100000}
];

function openChest() {
    console.log('You Received:')
    let itemChance = Math.floor(Math.random() * 5) + 1;

        for(let itemAmmount = 0; itemAmmount<itemChance; itemAmmount++){

            let randomNumber = Math.floor(Math.random() * lootTable.length);
            let item = lootTable[randomNumber].name;
            totalLootValue = totalLootValue + lootTable[randomNumber].value;
            console.log(item);
        };
    console.log('Total Value: ' + totalLootValue);
};
openChest();

