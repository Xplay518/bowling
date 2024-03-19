const Game = require('./bowling');

describe('Bowling game', () => {
  test('Gutter game scores 0', () => {
    const g = new Game();
    for (let i = 0; i < 20; i++) {
      g.roll(0);
    }
    expect(g.score()).toBe(0);
  });
});
