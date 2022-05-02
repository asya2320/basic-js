const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let str_1 = "";
  let current_value = str[0];
  let current_count = 1;
  for (let i = 1; i < str.length; i++) {
    if (current_value === str[i]) {
      current_count++;
    } else {
      str_1 += current_value;
      current_value = str[i];
      current_count = 1;
    }
    if (str[i + 1] != str[i]) {
      if (current_count > 1) {
        str_1 += +current_count;
      }
      str_1 += str[i];
      current_value = str[i + 1];
      current_count = 0;
    }
  }
  return str_1;
}

module.exports = {
  encodeLine,
};
