const codes = document.querySelectorAll(".code");
codes[0].focus();

codes.forEach((code, index) => {
  code.required = "true";

  code.addEventListener("input", (evt) => {
    const value = evt.target.value;
    code.value = value;
    if (index < codes.length - 1) codes[index + 1].focus();
  });

  code.addEventListener("keydown", (evt) => {
    if (evt.key === "Backspace") {
      evt.preventDefault();
      evt.target.value = "";
      if (index > 0) codes[index - 1].focus();
    }
  });
});
