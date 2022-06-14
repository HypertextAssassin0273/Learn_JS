/* object destructuring */

const band = {
  bandName: "led zeppelin",
  famousSong: "stairway to heaven",
  year: 1968,
  anotherFamousSong: "kashmir",
};

let { bandName, year, ...restProps } = band;
console.log(bandName, year);
console.log(restProps);