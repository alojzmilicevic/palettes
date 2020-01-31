const types = {
  COMPLEMENT: 0,
  SIMILAR: 1,
  COMBO: 2,
};

const size = Object.keys(types).length;

function create_scheme(rotation) {
  const base = createRandomColor();

  let colors = [base];

  for (let i = 1; i < 4; ++i) {
    colors.push(new HSLColor((base.h + (rotation * i)) % 360, base.s, base.l, base.a));
  }
  return colors;
}

const make_complement = () => create_scheme(90);
const make_similar = () => create_scheme(30);

function make_combo() {
  const scheme = create_scheme(30);
  scheme[2].h += 30;
  scheme[3].h -= 30;
  return scheme;
}

function createRandomColor() {
  const hue = getRandomInt(0, 360);
  const saturation = getRandomInt(0, 100);
  const light = getRandomInt(45, 55);
  const alpha = getRandomInt(99, 100) / 100;

  return new HSLColor(hue, saturation, light, alpha);
}

function generate_scheme() {
  const type = getRandomInt(0, size - 1);
  let colors = null;

  switch (type) {
    case types.COMPLEMENT:
      console.log("Complement");
      colors = make_complement();
      break;

    case types.SIMILAR:
      console.log("Similar");
      colors = make_similar();
      break;

    case types.COMBO:
      console.log("Combo");
      colors = make_combo();
      break;

    default:
      console.error(`Could not find that type of color... ${type}`);
      colors = make_complement();

  }
  for (let i = 0; i < 4; ++i) {
    let elem = document.getElementById(`c${i + 1}`);
    elem.style.backgroundColor = colors[i].hslaString;
  }
}
