function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

class HSLColor {
  constructor(h, s, l, a = 1) {
    this.h = h;
    this.s = s;
    this.l = l;
    this.a = a;
  }

  get hslString() {
    return `hsl(${this.h},${this.s},${this.l})`;
  }

  get hslaString() {
    return `hsla(${this.h},${this.s}%,${this.l}%,${this.a})`;
  }
}
