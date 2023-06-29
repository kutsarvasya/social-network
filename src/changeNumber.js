export function changeNumber(s) {
  function reverseString(s) {
    return s.split("").reverse().join("");
  }
  s = reverseString(s);
  s = s.match(/\d{2,3}/g).join(",");
  s = reverseString(s);
  return s;
}
