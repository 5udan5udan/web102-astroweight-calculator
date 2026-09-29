// Write your JavaScript code here!
let planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
];
const dropDown = document.getElementById('planets');
const plutoCheckbox = document.getElementById('include-pluto');
const customName = document.getElementById('custom-planet-name');
const customMultiplier = document.getElementById('custom-planet-multiplier');
const addPlanetButton = document.getElementById('add-planet-button');
let sortedPlanets = [...planets].reverse();
function renderDropdown(includePluto) {
    dropDown.innerHTML = '';
    let believedPlanets = includePluto
      ? sortedPlanets
      : sortedPlanets.filter(planet => planet[0] !== 'Pluto');
    believedPlanets.forEach(function(planet) {
        let option = document.createElement('option');
        option.value = planet[0];
        option.innerText = planet[0];
        dropDown.appendChild(option);
    });
}
renderDropdown(plutoCheckbox.checked);
plutoCheckbox.addEventListener('change', function() {
    renderDropdown(plutoCheckbox.checked);
});
function handleAddPlanet() {
    let name = customName.value.trim();
    let multiplier = parseFloat(customMultiplier.value);
    if (name !== '' && !isNaN(multiplier)) {
        let newPlanet =[name, multiplier];
        planets.push(newPlanet);
        sortedPlanets.push(newPlanet);
        renderDropdown(plutoCheckbox.checked);
        dropDown.value = name;
        customName.value = '';
        customMultiplier.value = '';
    }
}
addPlanetButton.addEventListener('click', handleAddPlanet);
function calculateWeight(weight, planetName) {
    for (let i = 0; i < planets.length; i++) {
        if (planets[i][0] === planetName) {
            return weight * planets[i][1];
        }
    }
}
function handleClickEvent(e) {
    const userWeight = document.getElementById('user-weight').value;
    const planetName = document.getElementById('planets').value;
    const result = calculateWeight(userWeight, planetName);
    document.getElementById('output').innerText = "If you were on " + planetName + ", you would weigh " + result.toFixed(2) + "lbs!";
}
document.getElementById('calculate-button').onclick = handleClickEvent;
