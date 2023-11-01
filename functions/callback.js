const teste = function (cb) {
  console.log("funcao teste");
  console.log(cb);
  typeof cb === "function" && cb(30);
};
// teste();

const fn = function (p) {
  console.log("funcao anonima de callback");
  console.log(p);
};

teste(fn);
