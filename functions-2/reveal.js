const calcRevealPattern = (function () {
  let n = 0;

  function _checkNumber(n) {
    if (typeof n !== "number") {
      throw TypeError("A variavel precisa ser do tipo numero");
    }
  }

  function somar(_n) {
    _checkNumber(_n);
    n += _n;
    return this;
  }

  function subtrair(_n) {
    _checkNumber(_n);
    n -= _n;
    return this;
  }

  function log() {
    console.log(n);
  }

  return {
    somar,
    subtrair,
    log,
  };
})();

calcRevealPattern.somar(5).somar(7).subtrair(3).log();
