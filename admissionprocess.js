
const form = document.getElementById("registrationForm");
const details = document.getElementById("studentDetails");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const program = document.getElementById("program").value;

    if (!name || !email || !phone || !program) {
        alert("Please fill all fields.");
        return;
    }

    const message = `Hello, I am ${name}. I have applied for the ${program} program. Email: ${email}, Phone: ${phone}`;
    const encodedMessage = encodeURIComponent(message);
    const emailBody = encodeURIComponent(`Hello ${name},\n\nThank you for registering for the ${program} program.\n\nWe will contact you soon.\n\nRegards,\nAdmin`).replace(/%0A/g, '%0D%0A');

    details.innerHTML = `
        <h2>Registration Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>WhatsApp:</strong> ${phone}</p>
        <p><strong>Applied Program:</strong> ${program}</p>
        <h3>Send Notifications:</h3>
        <ul>
          <li>
            <a href="mailto:${email}?subject=Application Confirmation&body=${emailBody}" target="_blank">
              📧 Send Email Confirmation
            </a>
          </li>
          <li>
            <a href="https://wa.me/${phone}?text=${encodedMessage}" target="_blank">
              💬 Send WhatsApp Message
            </a>
          </li>
        </ul>
      `;
});
