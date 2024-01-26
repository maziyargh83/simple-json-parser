// FILEPATH: /Users/maziyargh83/Downloads/json-viewer/main.js

const resultTag = document.getElementById("result");
const textArea = document.getElementById("textarea");
const submitBtn = document.getElementById("submit-btn");

function isJsonString(str) {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
}

function createObject(source, key) {
  const ul = document.createElement("ul");

  const openingTag = createKeyElement(key, true);
  source.appendChild(openingTag);
  source.appendChild(ul);
  const closingTag = createClosingTag();
  source.appendChild(closingTag);
  return ul;
}

function createList() {
  return document.createElement("li");
}

const toggleElement = (el) => {
  el.classList.toggle("json-viewer-object-close");
};

function createKeyElement(title, isObject = false) {
  const key = document.createElement("span");
  key.classList.add(isObject ? "json-viewer-object-start" : "key");

  const keyText = title ? `"${title}": ` : "";
  key.innerText = `${keyText}${isObject ? "{" : ""}`;
  if (isObject) key.addEventListener("click", () => toggleElement(key));

  return key;
}

function createClosingTag() {
  const closingTag = document.createElement("span");
  closingTag.classList.add("json-viewer-object-end");
  closingTag.innerText = "}";
  return closingTag;
}

function createValueElement(value, type) {
  const key = document.createElement("span");
  key.classList.add(`value-${type}`);
  key.innerText = type === "string" ? `"${value}"` : value;

  return key;
}

function handleData(key, value, source) {
  const list = createList();
  switch (typeof value) {
    case "object":
      const ul = createObject(list, key);

      iterateJson(ul, value);
      break;
    default:
      const keyEl = createKeyElement(key);
      const valueEl = createValueElement(value, typeof value);
      list.appendChild(keyEl);
      list.appendChild(valueEl);
      break;
  }
  source.appendChild(list);
  return source;
}

function iterateJson(source, obj) {
  for (let key in obj) {
    handleData(key, obj[key], source);
  }
  return source;
}

function createJsonViewer(json, source) {
  let ul = createObject(source);

  iterateJson(ul, JSON.parse(json));
}

function onTextareaChange() {
  const textAreaValue = textArea.value;
  resultTag.innerHTML = "";
  if (!isJsonString(textAreaValue)) {
    textArea.classList.add("has-error");
    return;
  }

  const root = createObject(resultTag, undefined, false);
  root.appendChild(document.createElement("li"));
  iterateJson(root, JSON.parse(textAreaValue));
  textArea.classList.remove("has-error");
}

submitBtn.addEventListener("click", onTextareaChange);
