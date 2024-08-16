module.exports = (plop) => {
  plop.setGenerator("page", require("./plop-scripts/page.cjs"));
  plop.setGenerator("module", require("./plop-scripts/module.cjs"));
  plop.setGenerator("element", require("./plop-scripts/element.cjs"));
  plop.setGenerator("organism", require("./plop-scripts/organism.cjs"));
};
