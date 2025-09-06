function darkMode() {
    const mode1 = document.querySelector("nav");
    const modea = document.querySelectorAll(".li");
    const mode3 = document.querySelector("header");
    const mode4 = document.querySelector("main");
    const mode5 = document.querySelectorAll(".career");
    const mode5a = document.querySelectorAll(".tools");
    const mode5b = document.querySelectorAll(".language");
    const mode6 = document.querySelector(".certification");
    const mode7 = document.querySelector(".site");
    const mode8 = document.querySelector("footer");
    const mode9 = document.querySelectorAll("site ul li a");
    if (mode1) mode1.classList.toggle("dark");
    modea.forEach(el => el.classList.toggle("dark1"));
    if (mode3) mode3.classList.toggle("darka");
    if (mode4) mode4.classList.toggle("dark2");
    mode5.forEach(el => el.classList.toggle("dark3"));
    mode5a.forEach(el => el.classList.toggle("dark3"));
    mode5b.forEach(el => el.classList.toggle("dark3"));
    if (mode6) mode6.classList.toggle("dark3");
    if (mode7) mode7.classList.toggle("dark3");
    if (mode8) mode8.classList.toggle("dark4");
    mode9.forEach(el => el.classList.toggle("dark1"));
    const modeButton = document.querySelector(".mode");
    modeButton.textContent = modeButton.textContent === "Dark Mode" ? "Light Mode" : "Dark Mode";
}


