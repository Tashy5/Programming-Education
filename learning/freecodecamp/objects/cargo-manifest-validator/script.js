let cargo = {
    containerId: 5,
    destination: "London",
    weight: 250,
    unit: "lb",
    hazmat: true
}

function normalizeUnits(manifest) {
    let normalizedManifest = {
        containerId: manifest.containerId,
        destination: manifest.destination,
        weight: manifest.weight,
        unit: manifest.unit,
        hazmat: manifest.hazmat
    }
    if (manifest.unit === "lb") {
        normalizedManifest.weight = (manifest.weight * 0.45)
        normalizedManifest.unit = "kg";
        return normalizedManifest;
    } 
    return normalizedManifest;
}

function validateManifest(manifest) {
    let errorManifest = {};
    if (manifest.containerId === undefined) {
        errorManifest.containerId = "Missing";
    } else if (!Number.isInteger(manifest.containerId) || manifest.containerId <= 0) {
        errorManifest.containerId = "Invalid";
    }
    if (manifest.destination === undefined) {
        errorManifest.destination = "Missing";
    } else if (typeof manifest.destination !== "string" || manifest.destination.trim() === "") {
        errorManifest.destination = "Invalid";
    }
    if (manifest.weight === undefined) {
        errorManifest.weight = "Missing";
    } else if (typeof manifest.weight !== "number" || Number.isNaN(manifest.weight) || manifest.weight <= 0) {
        errorManifest.weight = "Invalid";
    }
    if (manifest.unit === undefined) {
        errorManifest.unit = "Missing";
    } else if (manifest.unit !== "kg" && manifest.unit !== "lb") {
        errorManifest.unit = "Invalid";
    }
    if (manifest.hazmat === undefined) {
        errorManifest.hazmat = "Missing";
    } else if (typeof manifest.hazmat !== "boolean") {
        errorManifest.hazmat = "Invalid";
    }
    return errorManifest;
}

function processManifest(manifest) {
        let validationResult = validateManifest(manifest);

    if (Object.keys(validationResult).length === 0) {
        let normalizedManifest = normalizeUnits(manifest);

        console.log(`Validation success: ${manifest.containerId}`);
        console.log(`Total weight: ${normalizedManifest.weight} kg`);
    } else {
        console.log(`Validation error: ${manifest.containerId}`);
        console.log(validationResult);
    }
}

console.log(cargo)
console.log(processManifest(cargo))