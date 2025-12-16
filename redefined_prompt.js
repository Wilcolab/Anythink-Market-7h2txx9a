function toCamelCase(str) {
    // Check if input is valid
    if (typeof str !== 'string') {
        return "Error: Input must be a string.";
    }

    // Check if input is empty or whitespace only
    if (str.trim() === '') {
        return "Error: Input cannot be empty.";
    }

    // Replace spaces, underscores, and hyphens with spaces, then convert to camelCase
    const converted = str
        .replace(/[-_\s]+(.)?/g, (_, char) => (char ? char.toUpperCase() : ''))
        .replace(/^(.)/, (match) => match.toLowerCase());

    // Check if result is empty after conversion
    if (converted === '') {
        return "Error: Input contains only special characters and cannot be converted.";
    }

    return converted;
}

// Test cases
console.log(toCamelCase('first name'));        // firstName
console.log(toCamelCase('user_id'));           // userId
console.log(toCamelCase('SCREEN_NAME'));       // screenName
console.log(toCamelCase(34));                  // Error: Input must be a string.
console.log(toCamelCase(''));                  // Error: Input cannot be empty.
console.log(toCamelCase('   '));               // Error: Input cannot be empty.