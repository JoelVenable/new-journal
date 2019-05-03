function buildDOMElement(
  tagName,
  parentElement,
  textContent,
  classArray,
  elementID,
  attributesObject
) {
  let element = document.createElement(tagName);
  if (elementID) element.id = elementID;


  if (classArray) {
    classArray.forEach(cls => {
      element.classList.add(cls);
    });
  }
  if (!!attributesObject) {
    for (const key of Object.keys(attributesObject)) {
      element.setAttribute(key, attributesObject[key]);
    }
  }
  element.textContent = textContent;
  return parentElement.appendChild(element);
};


function buildRowDiv(parent) {
  return buildDOMElement("div", parent, null, ["row"]);
};

function buildButton(parent, textContent, id, buttonFunction) {
  let button = buildDOMElement("button", parent, textContent, null, id);
  button.addEventListener("click", buttonFunction);
  return button;
}

function clearContainer(containerToClear) {
  while (containerToClear.firstChild) {
    containerToClear.removeChild(containerToClear.firstChild);
  }
}


module.exports = {
  buildDOMElement: buildDOMElement,
  buildRowDiv: buildRowDiv,
  buildButton: buildButton,
  clearContainer: clearContainer
}