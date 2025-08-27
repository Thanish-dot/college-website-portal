document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".btn");
  const content = document.getElementById("dynamic-content");

  buttons.forEach(button => {
    button.addEventListener("click", function (e) {
      const text = this.textContent.trim();
      if (this.getAttribute("href") === "#") e.preventDefault();

      content.style.display = "block";

      if (text === "View Calendar") {
        content.innerHTML = `
          <h2>Academic Calendar</h2>
          <ul>
            <li><strong>Semester Start:</strong> July 15, 2024</li>
            <li><strong>Mid Exams:</strong> September 10–14, 2024</li>
            <li><strong>Model Exams:</strong> October 20–25, 2024</li>
            <li><strong>Final Exams:</strong> November 10–20, 2024</li>
            <li><strong>Holidays:</strong> August 15, October 2, December 25</li>
          </ul>
        `;
      }

      else if (text === "Visit Library") {
        content.innerHTML = `
          <h2>Digital Library - Book Reels</h2>
          <div style="display: flex; flex-wrap: wrap; gap: 15px;">
            <div style="width: 160px; text-align: center;">
              <img src="https://placehold.co/160x220?text=Python+101" alt="Book 1"><br><strong>Python 101</strong>
            </div>
            <div style="width: 160px; text-align: center;">
              <img src="https://placehold.co/160x220?text=HTML+&+CSS" alt="Book 2"><br><strong>HTML & CSS</strong>
            </div>
            <div style="width: 160px; text-align: center;">
              <img src="https://placehold.co/160x220?text=Machine+Learning" alt="Book 3"><br><strong>Machine Learning</strong>
            </div>
            <div style="width: 160px; text-align: center;">
              <img src="https://placehold.co/160x220?text=Database+Design" alt="Book 4"><br><strong>Database Design</strong>
            </div>
          </div>
        `;
      }

      else if (text === "Student Login") {
        content.innerHTML = `
          <h2>Student Login</h2>
          <form id="loginForm">
            <label>Name: <input type="text" id="name" required></label><br><br>
            <label>Roll No: <input type="text" id="roll" required></label><br><br>
            <label>DOB: <input type="date" id="dob" required></label><br><br>
            <button type="submit">Login</button>
          </form>
          <div id="student-details" style="margin-top: 20px;"></div>
        `;

        document.getElementById("loginForm").addEventListener("submit", function (event) {
          event.preventDefault();

          const name = document.getElementById("name").value;
          const roll = document.getElementById("roll").value;
          const dob = document.getElementById("dob").value;

          document.getElementById("student-details").innerHTML = `
            <h3>Welcome, ${name}!</h3>
            <p><strong>Roll No:</strong> ${roll}</p>
            <p><strong>Date of Birth:</strong> ${dob}</p>
            <h4>Academic Records:</h4>
            <ul>
              <li><strong>Semester:</strong> 5</li>
              <li><strong>Marks:</strong> 78%</li>
              <li><strong>Result:</strong> Passed with Distinction</li>
            </ul>
          `;
        });
      }
    });
  });

  /* Slider Controls */
  const slidesContainer = document.querySelector('.slides');
  const totalSlides = document.querySelectorAll('.slide').length;
  let currentIndex = 0;

  function showSlide(index) {
    currentIndex = (index + totalSlides) % totalSlides;
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  document.querySelector('.prev').addEventListener('click', () => {
    showSlide(currentIndex - 1);
  });

  document.querySelector('.next').addEventListener('click', () => {
    showSlide(currentIndex + 1);
  });

  setInterval(() => {
    showSlide(currentIndex + 1);
  }, 4000);

  /* Logo Dropdown */
  document.getElementById("logoMenuToggle").addEventListener("click", function () {
    const dropdown = document.getElementById("logoDropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
  });

  document.addEventListener("click", function (event) {
    const logo = document.getElementById("logoMenuToggle");
    const dropdown = document.getElementById("logoDropdown");
    if (!logo.contains(event.target) && !dropdown.contains(event.target)) {
      dropdown.style.display = "none";
    }
  });
});
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
});
