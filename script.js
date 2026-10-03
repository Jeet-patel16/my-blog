const themeButton = document.getElementById("themeButton");

let darkMode = true;

themeButton.addEventListener("click", function () {

    if (darkMode) {

        document.body.style.background = "#f8fafc";
        document.body.style.color = "#111827";

        themeButton.innerHTML = "☀️";

        darkMode = false;

    } else {

        document.body.style.background = "#0b1120";
        document.body.style.color = "#f8fafc";

        themeButton.innerHTML = "🌙";

        darkMode = true;
    }

});
