"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var assert = _interopRequire(require("assert"));

var YC = _interopRequire(require("./"));

var factorial = YC(function (fac) {
  return function (n) {
    return n <= 2 ? n : n * fac(n - 1);
  };
});

it("fj-yc", function () {
  assert.equal(factorial(5), 120);
});