document.getElementById("processBtn").addEventListener("click", () => { // Get input and trim w3schools reference
  const input = document.getElementById("textInput").value.trim(); // trim to remove extra spaces at start and end

  const numberList = document.getElementById("numberList"); // Get the number and word list elements
  const wordList = document.getElementById("wordList"); // Clear previous results

  numberList.innerHTML = ""; // Clear previous results cont
  wordList.innerHTML = ""; // Clear previous results cont

  if (!input) return; // If input is empty, do nothing

  const words = input.split(" ");

  let numbers = []; // Separate numbers and non-numbers
  let nonNumbers = []; // for loop to separate numbers and non-numbers

  // forEach BONUS (Used parseFloat for decimal numbers)
  words.forEach(word => {
    if (!word.includes(",") && !isNaN(word)) {
      numbers.push(parseFloat(word));
    } else {
      nonNumbers.push(word.toLowerCase());
    }
  });

  // Sorting
  numbers.sort((a, b) => a - b);
  nonNumbers.sort();

  // map BONUS (w3schools reference for map method)
  numberList.innerHTML = numbers
    .map(num => `<li>${num}</li>`)
    .join("");

  wordList.innerHTML = nonNumbers
    .map(word => `<li>${word}</li>`)
    .join("");
});