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
let dropDown = document.getElementById('planets');
planets.reverse().forEach(function(planet) {
    let option = document.createElement('option');
    option.value = planet[0];
    option.innerText = planet[0];
    dropDown.appendChild(option);
})
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
