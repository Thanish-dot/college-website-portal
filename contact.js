
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent reload

    let name = document.getElementById("name").value.trim();

    // Show confirmation message
    document.getElementById("formResponse").innerText =
        "✅ Thank you, " + name + "! Your message has been sent.";

    // Reset the form fields
    this.reset();
});
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});
