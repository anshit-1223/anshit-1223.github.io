const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){
        toggleBtn.textContent = "☀️";
    } else {
        toggleBtn.textContent = "🌙";
    }
});

const form = document.getElementById("contact-form");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    message.textContent = "Message sent successfully!";
    message.style.color = "#38bdf8";

    form.reset();
});
