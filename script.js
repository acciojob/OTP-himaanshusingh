//your JS code here. If required.
// Select all input fields with the class 'code'
const codes = document.querySelectorAll(".code");

// Automatically focus the first input field on page load
codes[0].focus();

codes.forEach((code, idx) => {
  // Add event listener for keydown events
  code.addEventListener("keydown", (e) => {
    // Allow only numeric keys (0-9) and prevent others
    if (e.key >= 0 && e.key <= 9) {
      // Clear the field before entering the new digit
      codes[idx].value = "";
      // Move to the next input field after a short delay
      setTimeout(() => {
        if (idx < codes.length - 1) {
          codes[idx + 1].focus();
        }
      }, 10);
    } else if (e.key === "Backspace") {
      // Move to the previous input field on backspace
      setTimeout(() => {
        if (idx > 0) {
          codes[idx - 1].focus();
        }
      }, 10);
    }
  });

  // Add event listener to handle pasting a code
  code.addEventListener("paste", (e) => {
    e.preventDefault();
    const paste = (e.clipboardData || window.clipboardData).getData("text");

    // Ensure pasted data contains only digits
    if (!/^\d+$/.test(paste)) {
      return;
    }

    const digits = paste.split("");
    // Distribute pasted digits across the input fields
    digits.forEach((digit, i) => {
      if (idx + i < codes.length) {
        codes[idx + i].value = digit;
      }
    });

    // Determine the next field to focus
    const nextFocusIndex = Math.min(idx + digits.length, codes.length - 1);
    codes[nextFocusIndex].focus();
  });
});
