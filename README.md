# JSON Viewer

This project is a simple JSON viewer implemented in JavaScript. It allows you to input a JSON string and view it in a structured, easy-to-read format.

## Files

The main file in this project is `main.js`.

### main.js

This file contains all the logic for parsing and displaying the JSON data.

Here's a brief overview of the functions in `main.js`:

- `isJsonString(str)`: Checks if a string is a valid JSON string.
- `createObject(source, key)`: Creates a new object in the JSON viewer.
- `createList()`: Creates a new list item in the JSON viewer.
- `toggleElement(el)`: Toggles the visibility of an element in the JSON viewer.
- `createKeyElement(title, isObject)`: Creates a new key element in the JSON viewer.
- `createClosingTag()`: Creates a closing tag for an object in the JSON viewer.
- `createValueElement(value, type)`: Creates a new value element in the JSON viewer.
- `handleData(key, value, source)`: Handles a key-value pair from the JSON data.
- `iterateJson(source, obj)`: Iterates over a JSON object and handles its data.
- `createJsonViewer(json, source)`: Creates the JSON viewer.
- `onTextareaChange()`: Handles the event when the textarea's content changes.

## Usage

To use the JSON viewer, simply enter a valid JSON string into the textarea and click the submit button. The JSON data will then be displayed in a structured format below the textarea.

If the JSON string is not valid, the textarea will be highlighted in red.

## Development

This project is written in pure JavaScript and doesn't require any special tools for development. You can simply open `index.html` in your browser to start using the JSON viewer.