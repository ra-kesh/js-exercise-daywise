/** (*)
 * Return a new array that transforms the element's average altitude into their orbital periods.
 * The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
 * You can read about orbital periods on wikipedia.
 * The values should be rounded to the nearest whole number. The body being orbited is Earth.
 * The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
 */
// function orbitalPeriod(arr) {
//   const GM = 398600.4418;
//   const earthRadius = 6367.4447;
// }
// orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

const GM = 398600.4418; // in km3s-2
const earthRadius = 6367.4447; // in km

const getOrbitalPeriod = (sizeOfOrbit) =>
  Math.round(2 * Math.PI * Math.sqrt(sizeOfOrbit ** 3 / GM));

function orbitalPeriod(satellitesMotions) {
  return satellitesMotions.map((satellite) => {
    const sizeOfOrbit = satellite.avgAlt + earthRadius;

    return {
      name: satellite.name,
      orbitalPeriod: getOrbitalPeriod(sizeOfOrbit),
    };
  });
}

module.exports = orbitalPeriod;
