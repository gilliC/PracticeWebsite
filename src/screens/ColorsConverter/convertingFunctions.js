export function checkIfHex(hex) {
  let isHex = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(hex);
  return isHex;
}

export const getColorToHexErrors = color => {
  if (color[0] !== '#') return 'Hex code must start with # \n';
  if (color.length > 7) return "Hex code can't be more than 7 charcters";
  return '';
};
