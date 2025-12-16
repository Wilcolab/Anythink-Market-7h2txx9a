function toSnakeCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .replace(/[\s\-]+/g, '_')
    .toLowerCase();
}

// Test cases:
console.log(toSnakeCase("firstName"));     // Output: first_name
console.log(toSnakeCase("SCREEN NAME"));   // Output: screen_name
console.log(toSnakeCase("mobile-number")); // Output: mobile_number
console.log(toSnakeCase("userId"));        // Output: user_id
