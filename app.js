function reverseString() {
    const userInput = document.getElementById("str").value;
    const displayResult = document.getElementById("revstr");
    const revstr = userInput.split('').reverse().join('');
    displayResult.textContent = `Reversed string: ${revstr}`;
}

function checkPalindrome() {
    const userInput = document.getElementById("num").value;
    const displayResult= document.getElementById("result");
    const isPalindrome = userInput.toLowerCase() === userInput.split('').reverse().join('');
    displayResult.textContent = isPalindrome ? "Palindrome" : "Not a Palindrome";
}

function calculateTotal() {
    const subtotal = parseFloat(document.getElementById("totalInput").value);
    const tip = parseFloat(document.getElementById("tipInput").value);
    const displayResult = document.getElementById("totalAmount");
    const tipAmount = (subtotal * tip) / 100;
    const totalAmount = subtotal + tipAmount;
    displayResult.textContent = `Total Amount: $${totalAmount.toFixed(2)}`;
}
