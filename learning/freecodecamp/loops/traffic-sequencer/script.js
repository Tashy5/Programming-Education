const config1 = {
  fault: false,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 4 }
  ]
};

const config2 = {
  fault: false,
  phases: [
    { color: "red", duration: 3 },
    { color: "yellow", duration: -2 },
    { color: "green", duration: 6 }
  ]
};

const config3 = {
  fault: true,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 6 }
  ]
};

const config4 = {
  fault: false,
  phases: []
};

function runSequence(config,cycles) {
    if (config.phases.length === 0) {
        console.log("No phases found");
        return;
    } else if (config.fault === true) {
        console.log("Faulted phase!");
        return;
    }

    for (let i = 0; i < cycles; i++) {
        for (let phases of config.phases) {
            if (phases.duration <= 0) {
            console.log("Invalid phase detected");
            } else {
            console.log(`Switching to ${phases.color} for ${phases.duration} s`)
            }
        }
    }
}
runSequence(config1,2)


// Record the cumulative elapsed time after each phase across the cycles into an array, adding each phase's duration to the running total as you iterate.
//Process all faulted and invalid phases without validation, even if config.fault is true or duration <= 0.
//Return the array of cumulative timestamps.
//For example, generateTimeline(config1, 1) should return the array [5, 7, 11].


function generateTimeline(config,cycles) {

}
