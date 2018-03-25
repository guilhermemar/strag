module.exports = function strag (definition) {
  const container = window.document.createElement('container');

  container.innerHTML = definition;

  if (container.childElementCount === 1) {
    return container.children[0];
  }

  return container.children;
}
