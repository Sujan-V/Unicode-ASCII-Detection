function detectCharacter() {
    const characterInput = document.getElementById("characterInput");
    const resultContainer = document.getElementById("resultContainer");
    const characterDisplay = document.getElementById("characterDisplay");
    const charType = document.getElementById("charType");
    const unicodeValue = document.getElementById("unicodeValue");
    const utf8Value = document.getElementById("utf8Value");
    const htmlEntity = document.getElementById("htmlEntity");

    const character = characterInput.value;
    
    if (!character) {
        alert("Please enter a character");
        return;
    }

    // Display the character
    characterDisplay.textContent = character;
    
    // Check if ASCII or Unicode
    const codePoint = character.codePointAt(0);
    const isAscii = codePoint <= 127;
    
    // Set character type with detailed information
    if (isAscii) {
        charType.innerHTML = `
            <span class="ascii">
                ASCII Character (Code Point: ${codePoint})
                <br><small>Standard English characters, digits, and symbols</small>
            </span>
        `;
    } else {
        charType.innerHTML = `
            <span class="unicode">
                Unicode Character (Code Point: ${codePoint})
                <br><small>Extended characters, emojis, and special symbols</small>
            </span>
        `;
    }
    
    // Get Unicode code point
    unicodeValue.textContent = `U+${codePoint.toString(16).toUpperCase().padStart(4, '0')}`;
    
    // Get UTF-8 encoding
    const utf8 = getUTF8Encoding(character);
    utf8Value.textContent = utf8;
    
    // Get HTML entity
    const entity = getHTMLEntity(character);
    htmlEntity.textContent = entity;
    
    // Show results
    resultContainer.style.display = "block";
    
    // Smooth scroll to results
    resultContainer.scrollIntoView({ behavior: 'smooth' });
}

function getUTF8Encoding(character) {
    const codePoint = character.codePointAt(0);
    
    if (codePoint <= 0x7F) {
        return `0x${codePoint.toString(16).toUpperCase().padStart(2, '0')}`;
    } else if (codePoint <= 0x7FF) {
        const byte1 = 0xC0 | (codePoint >> 6);
        const byte2 = 0x80 | (codePoint & 0x3F);
        return `0x${byte1.toString(16).toUpperCase().padStart(2, '0')} 0x${byte2.toString(16).toUpperCase().padStart(2, '0')}`;
    } else if (codePoint <= 0xFFFF) {
        const byte1 = 0xE0 | (codePoint >> 12);
        const byte2 = 0x80 | ((codePoint >> 6) & 0x3F);
        const byte3 = 0x80 | (codePoint & 0x3F);
        return `0x${byte1.toString(16).toUpperCase().padStart(2, '0')} 0x${byte2.toString(16).toUpperCase().padStart(2, '0')} 0x${byte3.toString(16).toUpperCase().padStart(2, '0')}`;
    } else {
        const byte1 = 0xF0 | (codePoint >> 18);
        const byte2 = 0x80 | ((codePoint >> 12) & 0x3F);
        const byte3 = 0x80 | ((codePoint >> 6) & 0x3F);
        const byte4 = 0x80 | (codePoint & 0x3F);
        return `0x${byte1.toString(16).toUpperCase().padStart(2, '0')} 0x${byte2.toString(16).toUpperCase().padStart(2, '0')} 0x${byte3.toString(16).toUpperCase().padStart(2, '0')} 0x${byte4.toString(16).toUpperCase().padStart(2, '0')}`;
    }
}

function getHTMLEntity(character) {
    const codePoint = character.codePointAt(0);
    return `&#${codePoint};`;
}

function copyToClipboard(elementId) {
    const element = document.getElementById(elementId);
    const text = element.textContent;
    
    navigator.clipboard.writeText(text).then(() => {
        // Show temporary feedback
        const originalText = element.textContent;
        element.textContent = "Copied!";
        setTimeout(() => {
            element.textContent = originalText;
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

// Allow pressing Enter key to trigger detection
document.getElementById("characterInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        detectCharacter();
    }
});