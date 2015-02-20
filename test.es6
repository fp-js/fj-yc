import assert from 'assert';
import YC from './';

let factorial = YC((fac) => (n) => n <= 2 ? n : n * fac(n - 1));

it('fj-yc', () => {
  assert.equal(factorial(5), 120);
});
