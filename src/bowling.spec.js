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

  const rollSpare = () => {
    g.roll(5);
    g.roll(5);
  };

  const rollStrike = () => {
    g.roll(10);
  };

  test('Gutter game scores 0', () => {
    rollMany(20, 0);
    expect(g.score()).toBe(0);
  });

  test('All ones game scores 20', () => {
    rollMany(20, 1);
    expect(g.score()).toBe(20);
  });

  test('One spare game scores 16', () => {
    rollSpare();
    g.roll(3);
    rollMany(17, 0);
    expect(g.score()).toBe(16);
  });

  test('One strike game scores 24', () => {
    rollStrike();
    g.roll(3);
    g.roll(4);
    rollMany(16, 0);
    expect(g.score()).toBe(24);
  });

  test('Perfect game scores 300', () => {
    rollMany(12, 10);
    expect(g.score()).toBe(300);
  });
});
