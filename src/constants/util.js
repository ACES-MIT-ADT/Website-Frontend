const MIN_RADIUS = 7.5;
const MAX_RADIUS = 15;
const DEPTH = 2;
const LEFT_COLOR = "FFFFFF";
const RIGHT_COLOR = "8b5cf6";
const NUM_POINTS = 2500;
const LETTER_SPACING = 1.5; // Adjust the spacing between letters

const letters = {
  A: [
    [0, 3],
    [-1, 2],
    [1, 2],
    [-2, 1],
    [2, 1],
    [-3, 0],
    [3, 0],
    [-2, -1],
    [2, -1],
    [-1, -2],
    [1, -2],
  ],
  C: [
    [1, 2],
    [0, 3],
    [-1, 3],
    [-2, 2],
    [-3, 1],
    [-3, 0],
    [-3, -1],
    [-3, -2],
    [-2, -3],
    [-1, -3],
    [0, -3],
    [1, -2],
  ],
  E: [
    [3, 3],
    [2, 3],
    [1, 3],
    [0, 3],
    [-1, 3],
    [-2, 3],
    [-3, 3],
    [-3, 2],
    [-3, 1],
    [-3, 0],
    [-2, 0],
    [-1, 0],
    [0, 0],
    [-3, -1],
    [-3, -2],
    [-3, -3],
    [-2, -3],
    [-1, -3],
    [0, -3],
    [1, -3],
    [2, -3],
    [3, -3],
  ],
  S: [
    [2, 3],
    [1, 3],
    [0, 3],
    [-1, 3],
    [-2, 3],
    [-3, 2],
    [-3, 1],
    [-2, 0],
    [-1, 0],
    [0, 0],
    [1, 0],
    [2, -1],
    [3, -2],
    [2, -3],
    [1, -3],
    [0, -3],
    [-1, -3],
    [-2, -3],
    [-3, -2],
  ],
};

const calculateColor = (x) => {
  const maxDiff = MAX_RADIUS * 2;
  const distance = x + MAX_RADIUS;

  const ratio = distance / maxDiff;

  return getGradientStop(ratio);
};

const getGradientStop = (ratio) => {
  ratio = ratio > 1 ? 1 : ratio < 0 ? 0 : ratio;

  const c0 = LEFT_COLOR.match(/.{1,2}/g).map(
    (oct) => parseInt(oct, 16) * (1 - ratio)
  );
  const c1 = RIGHT_COLOR.match(/.{1,2}/g).map(
    (oct) => parseInt(oct, 16) * ratio
  );
  const ci = [0, 1, 2].map((i) => Math.min(Math.round(c0[i] + c1[i]), 255));
  const color = ci
    .reduce((a, v) => (a << 8) + v, 0)
    .toString(16)
    .padStart(6, "0");

  return `#${color}`;
};

const generateParticlesForLetter = (letter, offsetX) => {
  return letters[letter].map(([x, y]) => {
    const adjustedX = x + offsetX;
    const z = randomFromInterval(-DEPTH, DEPTH);
    const color = calculateColor(adjustedX);

    return {
      position: [adjustedX * MAX_RADIUS * LETTER_SPACING, y * MAX_RADIUS, z],
      color,
    };
  });
};

const randomFromInterval = (min, max) => {
  return Math.random() * (max - min) + min;
};

export const pointsInner = [
  ...generateParticlesForLetter("A", -10),
  ...generateParticlesForLetter("C", -4),
  ...generateParticlesForLetter("E", 2),
  ...generateParticlesForLetter("S", 8),
];

// Optionally, add outer points for more depth or a surrounding effect.
export const pointsOuter = Array.from(
  { length: NUM_POINTS / 4 },
  (v, k) => k + 1
).map((num) => {
  const randomRadius = randomFromInterval(MIN_RADIUS / 2, MAX_RADIUS * 2);
  const angle = Math.random() * Math.PI * 2;

  const x = Math.cos(angle) * randomRadius;
  const y = Math.sin(angle) * randomRadius;
  const z = randomFromInterval(-DEPTH * 10, DEPTH * 10);

  const color = calculateColor(x);

  return {
    idx: num,
    position: [x, y, z],
    color,
  };
});
