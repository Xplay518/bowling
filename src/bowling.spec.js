const Game = require('./bowling');

describe('Bowling game', () => {
  let g;

  beforeEach(() => {
    g = new Game();
  });

  const rollMany = (n, pins) => {
    for (let i = 0; i < n; i++) {
      g.roll(pins);
    }
  };

  test('Gutter game scores 0', () => {
    rollMany(20, 0);
    expect(g.score()).toBe(0);
  });

  test('All ones game scores 20', () => {
    rollMany(20, 1);
    expect(g.score()).toBe(20);
  });
});
