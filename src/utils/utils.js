module.exports = {
  getRandomInt (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  },

  getRandom(min, max) {
    return Math.random() * (max - min) + min;
  },

  decimalAdjust(type, value, exp) {
    // If the exp is undefined or zero...
    if (typeof exp === 'undefined' || +exp === 0) {
      return Math[type](value);
    }
    value = +value;
    exp = +exp;
    // If the value is not a number or the exp is not an integer...
    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
      return NaN;
    }
    // Shift
    value = value.toString().split('e');
    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
    // Shift back
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
  },

  round10(value, exp) {
    return this.decimalAdjust('round', value, exp);
  },

  floor10(value, exp) {
    return this.decimalAdjust('floor', value, exp)
  },

  ceil10(value, exp) {
    return this.decimalAdjust('ceil', value, exp)
  }
}
