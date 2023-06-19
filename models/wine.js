const wines = [
  {
    name: 'Provence Rose',
    type: 'Pink',
    origin: 'France',
    description: 'This pink wine dances with elegance and charm, captivating the senses with its delicate hue and refreshing character. Delightfully pale pink, it exudes a subtle radiance, reminiscent of a sunset over a summer horizon.',
    img: 'images/rose.jpeg'
  },
  {
    name: 'Bosco',
    type: 'Red',
    origin: 'Spain',
    description: 'This robust red wine is a masterpiece of boldness and depth. Its deep crimson hue glimmers in the glass, hinting at the concentration of flavors that await.',
    img: 'images/red.jpeg'
  },
  {
    name: 'Cava',
    type: 'White',
    origin: 'Italy',
    description: 'This white wine is a sublime expression of elegance and freshness. Its pale golden hue glistens in the glass, hinting at the radiant flavors that await. As you raise the glass to your nose, a captivating aroma unfolds, filling the air with a symphony of enticing scents.',
    img: 'images/white.jpeg'
  }
];

module.exports = {
  getWines
};

function getWines() {
  return wines;
}
