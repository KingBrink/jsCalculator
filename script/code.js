document.addEventListener("DOMContentLoaded", function() {
    var inputBox = document.getElementById("inputBox");
    var buttons = document.querySelectorAll("button");

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            var buttonText = this.textContent;
            if (buttonText === "AC") {
                inputBox.value = "";
            } else if (buttonText === "DEL") {
                inputBox.value = inputBox.value.slice(0, -1);
            } else if (buttonText === "=") {
                try {
                    inputBox.value = eval(inputBox.value);
                } catch (error) {
                    inputBox.value = "Error";
                }
            } else if (buttonText === "%") {
                inputBox.value = eval(inputBox.value) / 100;
            } else {
                inputBox.value += buttonText;
            }
        });
    });
});