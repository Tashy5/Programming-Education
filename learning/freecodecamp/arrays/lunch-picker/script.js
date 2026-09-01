let lunches = [];

function addLunchToEnd(lunchArray, lunchString) {
    lunchArray.push(lunchString)
    console.log(`${lunchString} added to the end of the lunch menu.`)
    return lunchArray;
}

function addLunchToStart(lunchArray, lunchString) {
    lunchArray.unshift(lunchString)
    console.log(`${lunchString} added to the start of the lunch menu.`)
    return lunchArray;
}

function removeLastLunch(lunchArray) {
    if (lunchArray.length === 0) {
        console.log("No lunches to remove.")
        return lunchArray;
    } else {
        let removedItem = lunchArray.pop()
        console.log(`${removedItem} removed from the end of the lunch menu.`)
        return lunchArray;
    };
}

