# 🔍 Character Inspector

**Character Inspector** is a simple, stylish web app that allows users to input a single character and view detailed information such as:

- Character type (ASCII or Unicode)
- Unicode code point
- UTF-8 encoding
- HTML entity
- Copy to clipboard functionality

## 🌐 Live Demo

[Click here to try it out!](#) <!-- Replace # with your GitHub Pages or live URL -->

---

## 🚀 Features

- 🎨 Beautiful UI with modern CSS styling
- 🧠 Intelligent detection of character type (ASCII/Unicode)
- 🔢 Displays Unicode code point and UTF-8 bytes
- 🌐 Shows HTML entity representation
- 📋 Copy values easily to clipboard with tooltips
- ⌨️ Keyboard support (press Enter to analyze)
- 📱 Fully responsive design

---

## 📁 Project Structure

```plaintext
Character-Inspector/
├── index.html          # Main HTML file
├── style.css           # Styles and layout
├── script.js           # JavaScript logic
└── README.md           # This file

```


🛠️ How to Use


Clone this repository:
```bash
git clone https://github.com/yourusername/character-inspector.git
cd character-inspector
```
Open index.html in any web browser.

Type or paste a single character in the input field and click Analyze Character.

🔧 How It Works

Uses String.prototype.codePointAt() to fetch Unicode code point.

Converts it to:

UTF-8 bytes manually

HTML entity (e.g., &#128512;)

Determines if the character is within the ASCII range (<= 127).

 Example Characters to Try

 | Character | Meaning            | Unicode |
| --------- | ------------------ | ------- |
| A         | Uppercase A        | U+0041  |
| €         | Euro Sign          | U+20AC  |
| 😄        | Smiling Face Emoji | U+1F604 |
| 你         | Chinese "You"      | U+4F60  |
| Ω         | Greek Omega        | U+03A9  |


Provides dynamic feedback with smooth animations and tooltips.
