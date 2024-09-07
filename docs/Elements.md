# roseview Elements

## html Object Functions

### `CreateLayout`

Creates a special div which has options allowing you to define the position of its children.

- **Parameters:**
  - `type` (string): The type of container (e.g., 'div', 'section').
  - `options` (object): Options to define the container's properties (e.g., style, class).
  - `parent` (html): The parent element to which the container will be appended.

- **Returns:**
  - `htmlContainer`: A new `htmlContainer` instance.

### `Button`

Creates a button element.

- **Parameters:**
  - `parent` (html): The parent element to which the button will be appended.
  - `text` (string): The text content of the button.

- **Returns:**
  - `htmlButton`: A new `htmlButton` instance.

### `Image`

Creates an image element.

- **Parameters:**
  - `parent` (html): The parent element to which the image will be appended.
  - `sources` (string|string[]): The source(s) of the image(s).

- **Returns:**
  - `htmlImage`: A new `htmlImage` instance.

### `Text`

Creates a text element.

- **Parameters:**
  - `parent` (html): The parent element to which the text will be appended.
  - `text` (string): The text content.

- **Returns:**
  - `htmlText`: A new `htmlText` instance.

### `List`

Creates a list element.

- **Parameters:**
  - `parent` (html): The parent element to which the list will be appended.
  - `list` (string[]): An array of list items.

- **Returns:**
  - `htmlList`: A new `htmlList` instance.

### `Label`

Creates a label element.

- **Parameters:**
  - `parent` (html): The parent element to which the label will be appended.
  - `text` (string): The text content of the label.

- **Returns:**
  - `htmlLabel`: A new `htmlLabel` instance.

### `Video`

Creates a video element.

- **Parameters:**
  - `parent` (html): The parent element to which the video will be appended.
  - `sources` (string|string[]): The source(s) of the video file(s). Default is an empty array.

- **Returns:**
  - `htmlVideo`: A new `htmlVideo` instance.

### `Audio`

Creates an audio element.

- **Parameters:**
  - `parent` (html): The parent element to which the audio will be appended.
  - `sources` (string|string[]): The source(s) of the audio file(s). Default is an empty array.

- **Returns:**
  - `htmlAudio`: A new `htmlAudio` instance.

### `Textarea`

Creates a textarea element.

- **Parameters:**
  - `parent` (html): The parent element to which the textarea will be appended.
  - `value` (string): The initial text value of the textarea. Default is an empty string.

- **Returns:**
  - `htmlTextarea`: A new `htmlTextarea` instance.

### `Fieldset`

Creates a fieldset element.

- **Parameters:**
  - `parent` (html): The parent element to which the fieldset will be appended.
  - `legendText` (string): The text for the fieldset's legend. Default is an empty string.

- **Returns:**
  - `htmlFieldset`: A new `htmlFieldset` instance.

### `Datalist`

Creates a datalist element.

- **Parameters:**
  - `parent` (html): The parent element to which the datalist will be appended.
  - `options` (string[]): An array of options for the datalist. Default is an empty array.

- **Returns:**
  - `htmlDatalist`: A new `htmlDatalist` instance.

### `Input`

Creates an input element.

- **Parameters:**
  - `parent` (html): The parent element to which the input will be appended.
  - `type` (string): The type of input (e.g., 'text', 'checkbox').

- **Returns:**
  - `htmlInput`: A new `htmlInput` instance.

### `Progress`

Creates a progress element.

- **Parameters:**
  - `parent` (html): The parent element to which the progress element will be appended.
  - `value` (number): The initial value of the progress element.

- **Returns:**
  - `htmlProgress`: A new `htmlProgress` instance.

### `Div`

Creates a div element.

- **Parameters:**
  - `parent` (html): The parent element to which the div will be appended.

- **Returns:**
  - `htmlDiv`: A new `htmlDiv` instance.

### `Paragraph`

Creates a paragraph element.

- **Parameters:**
  - `parent` (html): The parent element to which the paragraph will be appended.
  - `text` (string): The text content of the paragraph.

- **Returns:**
  - `htmlParagraph`: A new `htmlParagraph` instance.

### `Header`

Creates a header element.

- **Parameters:**
  - `parent` (html): The parent element to which the header will be appended.
  - `level` (number): The level of the header (e.g., 1 for `<h1>`, 2 for `<h2>`).
  - `text` (string): The text content of the header.

- **Returns:**
  - `htmlHeader`: A new `htmlHeader` instance.
  
### Form

Creates a form element.

### Parameters

- **parent** (`html`): The parent element to which the form will be appended.

### Returns

- **htmlForm**: A new `htmlForm` instance.
