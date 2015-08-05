// USAGE: is-defined(@some-variable);

function getIsDefinedFunction(less) {

  return function (variable) {
    return variable != null;
  };
}

module.exports = {
  install: function (less) {
    less.functions.functionRegistry.add(
      "is-defined",
      getIsDefinedFunction(less)
    );
  }
};
