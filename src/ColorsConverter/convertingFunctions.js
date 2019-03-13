import {xtermColorsTable} from './colorsConstants';
export function checkIfHex(hex) {
  let isOk = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(hex);
  return isOk;
}
export function fromHextoXterm(hex) {
  let myColor = hexToRGB(hex);
  let closest = [-1, null];
  const colorsTable = xtermColorsTable.concat();
  for (let i = 0; i < colorsTable.length; i++) {
    let checkColor = hexToRGB('#' + colorsTable[i]);
    let distance = getDistanceBetweenColors(myColor, checkColor);
    if (closest[1] > distance || closest[1] === null) {
      closest[0] = i;
      closest[1] = distance;
      if (distance === 0) break;
    }
  }
  return closest[0];
}
function getDistanceBetweenColors(color1, color2) {
  let color1Vals = getRGBVals(color1);
  let color2Vals = getRGBVals(color2);
  let sum = 0;
  for (let i = 0; i < color1Vals.length; i++) {
    sum += Math.abs(color1Vals[i] - color2Vals[i]);
  }
  return sum;
}
function getRGBVals(rgb) {
  let cleanColor = rgb.split('rgb(')[1].split(')')[0];
  let colorsArr = cleanColor.split(',');
  return colorsArr;
}
export function hexToRGB(hex) {
  let c;
  if (checkIfHex(hex)) {
    c = hex.substring(1).split('');
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = '0x' + c.join('');
    return 'rgb(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ')';
  }
  throw new Error('Bad Hex:' + hex);
}
export function lightOrDark(color) {
  //function from https://awik.io/determine-color-bright-dark-using-javascript/
  let hsp;
  if (checkIfHex(color)) {
    let arrColors = getRGBVals(hexToRGB(color));
    let r = arrColors[0];
    let g = arrColors[1];
    let b = arrColors[2];
    hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));
    if (hsp < 127.5) {
      return 'dark';
    }
    if (hsp > 240) return 'super light';
    return 'light';
  }
}
