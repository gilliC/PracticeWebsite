import {xtermColorsTable} from './colorsConstants';
export function checkIfHex(hex) {
  let isHex = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(hex);
  return isHex;
}
export function fromHextoXterm(hex) {
  let myColor = fromHexToRGB(hex);
  let closest = [-1, null];
  const colorsTable = xtermColorsTable.concat();
  for (let i = 0; i < colorsTable.length; i++) {
    let checkColor = fromHexToRGB('#' + colorsTable[i]);
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
export function fromHexToRGB(hex, type = 'full') {
  let c;
  if (checkIfHex(hex)) {
    c = hex.substring(1).split('');
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = '0x' + c.join('');
    let color = [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',');
    if (type === 'full') return 'rgb(' + color + ')';
    if (type === 'cleanRGBA') return '(' + color + ',1)';
    return 'rgb(' + color + ')';
  }
  throw new Error('Bad Hex:' + hex);
}
export function fromHexToHSL(hex) {
  // Algorithm from https://en.wikipedia.org/wiki/HSL_and_HSV#Conversion_RGB_to_HSL/HSV_used_commonly_in_software_programming
  if (checkIfHex(hex)) {
    let h,
      l,
      r,
      g,
      b,
      max,
      min,
      temp,
      s = -1;
    let arr = getRGBVals(fromHexToRGB(hex));
    r = arr[0] / 255;
    g = arr[1] / 255;
    b = arr[2] / 255;
    max = Math.max(r, g, b);
    min = Math.min(r, g, b);
    l = (max + min) / 2;
    switch (max) {
      case min:
        temp = 0;
        s = 0;
        break;
      case r:
        temp = (g - b) / (max - min);
        break;
      case g:
        temp = (b - r) / (max - min) + 2;
        break;
      case b:
        temp = (r - g) / (max - min) + 4;
        break;
      default:
        throw new Error('Something went wrong in switch');
    }
    h = Math.round(temp * 60);
    if (h < 0) h += 360;
    if (s === -1) {
      temp = Math.min(l, 1 - l);
      s = (max - l) / temp;
    }
    s = Math.round(s * 100);
    l = Math.round(l * 100);
    return '(' + h + ', ' + s + '%, ' + l + '%)';
  } else throw new Error('Bad Hex:' + hex);
}
export function lightOrDark(color) {
  //function from https://awik.io/determine-color-bright-dark-using-javascript/
  let hsp;
  if (checkIfHex(color)) {
    let arrColors = getRGBVals(fromHexToRGB(color));
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
