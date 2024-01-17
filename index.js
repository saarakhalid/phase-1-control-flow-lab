// index.js

// Function to determine the greeting based on distance
function scuberGreetingForFeet(someValue) {
  if (someValue <= 400) {
    return 'This one is on me!';
  } else if (someValue > 2000 && someValue <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else if (someValue > 2500) {
    return 'No can do.';
  } else {
    return 'This one is on me!';
  }
}

// Function to check the city using a ternary operator
function ternaryCheckCity(city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

// Function to determine response based on tip generosity using a switch statement
function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}



// Example test cases:
console.log(scuberGreetingForFeet(199)); // Output: 'This one is on me!'
console.log(ternaryCheckCity('NYC')); // Output: 'Ok, sounds good.'
console.log(switchOnCharmFromTip('generous')); // Output: 'Thank you so much.'
