
function togglePassword() {
    const passField = document.getElementById("password");
    passField.type = (passField.type === "password") ? "text" : "password";
}

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("fullName").value.trim();
    const roll = document.getElementById("rollNumber").value.trim().toUpperCase();
    const dob = document.getElementById("dob").value;
    const password = document.getElementById("password").value.trim();

    // Roll number format check
    const rollPattern = /^21(CSE|IT|ECE|EEE|MECH|CIVIL)\d{3}$/;
    if (!rollPattern.test(roll)) {
        alert("Invalid Roll Number! Please use format like 21CSE021.");
        return;
    }

    // Password format check
    const passPattern = /^\d{6}$/;
    if (!passPattern.test(password)) {
        alert("Password must be exactly 6 digits!");
        return;
    }

    // Map department from roll number
    let deptCode = roll.match(/(CSE|IT|ECE|EEE|MECH|CIVIL)/)[0];
    let departmentMap = {
        "CSE": "Computer Science Engineering",
        "IT": "Information Technology",
        "ECE": "Electronics and Communication Engineering",
        "EEE": "Electrical and Electronics Engineering",
        "MECH": "Mechanical Engineering",
        "CIVIL": "Civil Engineering"
    };
    let department = departmentMap[deptCode] || "Unknown Department";

    // Store in localStorage
    localStorage.setItem("studentName", name);
    localStorage.setItem("studentRoll", roll);
    localStorage.setItem("studentDOB", dob);
    localStorage.setItem("studentPassword", password);
    localStorage.setItem("studentDept", department);

    window.location.href = "student.html";
});

