## Next Steps (31/08/26)
Take the random number generated from "openChest()" to select a random object from the "lootTable" array.
Print the item's name and value
Then add the items value to the "totalLootValue" variable
Print "totalLootVariable" out.

## Issues Found
### Problem 1
I have had some issues trying to take the randomly generated number and make it select an object from the lootTable.
I have tried to log both openChest and randomNumber. randomNumber is in a function so it won't be defined and displayed an error. So I tried openChest and it came back as undefinied.

After doing some research I found that variables inside a function are called "local variables" and can only exist inside that function.
### Fix
The fix was done by using a "console.log" inside the "openChest" function which printed the lootTable followed by the value generated from randomNumber to target the array.
Outside the function, I then used openChest(). This was because the function already had a console.log command, so all I had to do was run the function but writing "openChest();" on line 15.

## Next Steps (01/09/26)
Create a random number between 1-5 which decides how many items are recieved. This is so the "lootChest" can have multiple items generate in one go which increase the totalLootValue. 
Then display all the items and the total value at the end.
