// Array of Chinese zodiac animals in order
const zodiacAnimals = [
    "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake",
    "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"
];

// Function to calculate Chinese zodiac based on birth year
function calculateZodiac(year) {
    const startYear = 1900; // The year of the Rat
    const zodiacIndex = (year - startYear) % 12; // Calculate zodiac based on 12-year cycle
    return zodiacAnimals[zodiacIndex];
}

// Event listener for form submission
document.getElementById('zodiacForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page refresh on form submission
    const dob = new Date(document.getElementById('dob').value);
    
    if (dob.getTime()) {
        const birthYear = dob.getFullYear();
        const zodiac = calculateZodiac(birthYear);
        document.getElementById('result').textContent = `Your Chinese Zodiac is: ${zodiac}`;
    } else {
        document.getElementById('result').textContent = 'Please enter a valid date.';
    }
});
