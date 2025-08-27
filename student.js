
        // Get login data from localStorage
        const studentName = localStorage.getItem("studentName");
        const studentRoll = localStorage.getItem("studentRoll");
        const studentDOB = localStorage.getItem("studentDOB");

        // Department mapping
        const departmentMap = {
            "CSE": "Computer Science and Engineering",
            "IT": "Information Technology",
            "ECE": "Electronics and Communication Engineering",
            "EEE": "Electrical and Electronics Engineering",
            "MECH": "Mechanical Engineering",
            "CIVIL": "Civil Engineering"
        };

        // Extract department code from roll number
        let deptCode = studentRoll.substring(2, studentRoll.length - 3).toUpperCase();
        let studentDept = departmentMap[deptCode] || "Unknown Department";

        // Function to generate random integer in range
        function randomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        // Random address generator
        const addresses = [
            "123, Green Street, Chennai",
            "45, Lake View Road, Coimbatore",
            "67, MG Road, Bangalore",
            "89, Anna Salai, Madurai",
            "22, Park Avenue, Trichy"
        ];

        // Random remarks
        const remarksList = [
            "Excellent performance",
            "Good progress",
            "Needs improvement in core subjects",
            "Outstanding in academics",
            "Consistent learner"
        ];

        // Random achievements
        const achievementsList = [
            "Won 1st Prize in Coding Hackathon",
            "Represented college in National Level Sports",
            "Best Project Award in Final Year",
            "Paper Published in IEEE Journal",
            "Member of Robotics Club"
        ];

        // Scholarship types
        const scholarshipTypes = ["Government Scholarship", "Management Quota"];

        // Generate semester marks and CGPA
        let currentSem = randomInt(4, 8);
        let semMarks = [];
        let totalMarks = 0;

        for (let i = 1; i <= currentSem; i++) {
            let marks = randomInt(65, 95);
            semMarks.push({ semester: i, marks: marks });
            totalMarks += marks;
        }

        let cgpa = (totalMarks / currentSem / 10).toFixed(2);
        let resultYear = 2025 + randomInt(0, 1);

        // Build HTML output
        document.getElementById("studentOutput").innerHTML = `
    <h2>Welcome, ${studentName}</h2>
    <p><strong>Roll No:</strong> ${studentRoll}</p>
    <p><strong>Date of Birth:</strong> ${studentDOB}</p>
    <p><strong>Address:</strong> ${addresses[randomInt(0, addresses.length - 1)]}</p>
    <p><strong>Department:</strong> ${studentDept}</p>
    <p><strong>Scholarship:</strong> ${scholarshipTypes[randomInt(0, scholarshipTypes.length - 1)]}</p>
    <p><strong>Quota:</strong> ${Math.random() > 0.5 ? "Government" : "Management"}</p>
    <p><strong>Fees Details:</strong> ₹${randomInt(50000, 150000)} per year</p>
    <h3>Academic Records:</h3>
    <ul>
        ${semMarks.map(s => `<li>Semester ${s.semester}: ${s.marks}%</li>`).join('')}
    </ul>
    <p><strong>CGPA:</strong> ${cgpa}</p>
    <p><strong>Result:</strong> Passed in ${resultYear}</p>
    <p><strong>Remarks:</strong> ${remarksList[randomInt(0, remarksList.length - 1)]}</p>
    <p><strong>Achievements:</strong> ${achievementsList[randomInt(0, achievementsList.length - 1)]}</p>
`;
