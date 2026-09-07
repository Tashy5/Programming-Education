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
    };

    for (let i = 0; i < cycles; i++) {
        for (let phases of config.phases) {
            if (phases.duration <= 0) {
            console.log("Invalid phase detected");
            } else {
            console.log(`Switching to ${phases.color} for ${phases.duration} s`)
            }
        }
    }
};

function generateTimeline(config,cycles) {

let elapsedTime =0;
let array =[];

for (let i = 0; i < cycles; i++) {
  for (let phase of config.phases) {
    elapsedTime += phase.duration;
    array.push(elapsedTime);
  }
};
return array;
};

runSequence(config1,1)
generateTimeline(config1,2)