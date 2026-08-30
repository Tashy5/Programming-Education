let totalLootValue = 0;

let lootTable = [
    { name: "Coins", value: 5000},
    { name: "Magic Orb", value: 38500},
    { name: "Dragon Eye", value: 100000}
];

function openChest() {
    let randomNumber = Math.floor(Math.random() * lootTable.length);

    console.log(randomNumber);
}

openChest();