const codes = document.querySelectorAll(".code");
      codes[0].focus();
      codes.forEach((code, index) => {
        code.addEventListener("input", (e) => {
          const value = e.target.value;
          if (value.length > 1) e.target.value = value.slice(0, 1);
          if (value.length === 1 && index < codes.length - 1)
            codes[index + 1].focus();
        });
        code.addEventListener("keydown", (e) => {
          if (e.key === "Backspace") {
            if (e.target.value === "" && index > 0) {
              e.preventDefault();
              codes[index - 1].focus();
            } else e.target.value = "";
          }
        });
      });