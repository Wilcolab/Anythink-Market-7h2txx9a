function toCamelCase(str) {
  return str
    .toLowerCase()
    .replace(/[_\s-]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''));
}

// Test cases:
console.log(toCamelCase("first name"));      // Output: firstName
console.log(toCamelCase("user_id"));         // Output: userId
console.log(toCamelCase("SCREEN_NAME"));     // Output: screenName
console.log(toCamelCase("mobile-number"));   // Output: mobileNumber
