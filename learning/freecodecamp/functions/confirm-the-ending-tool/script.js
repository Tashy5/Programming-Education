const string = "Balloon";
const target = "of";

function confirmEnding(string, target) {
    let newLength = string.length - target.length;
    let newstring = string.slice(newLength);
    if (newstring === target) {
        console.log(true);
    } else {
        console.log(false);
    }
}

confirmEnding(string, target)