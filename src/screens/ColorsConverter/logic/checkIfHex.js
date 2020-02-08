export function checkIfHex(hex) {
  let isHex = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(hex);
  return isHex;
}
