// Faculty Data
const departments = {
    "Computer Science Engineering": [
        { name: "Dr. John Smith", role: "Professor & HOD", subjects: "AI, ML", img: "https://randomuser.me/api/portraits/men/11.jpg" },
        { name: "Dr. Sarah Johnson", role: "Associate Professor", subjects: "Cloud Computing, Big Data", img: "https://randomuser.me/api/portraits/women/12.jpg" },
        { name: "Prof. Michael Chen", role: "Asst. Professor", subjects: "Cybersecurity, Software Engg.", img: "https://randomuser.me/api/portraits/men/13.jpg" },
        { name: "Dr. Priya Sharma", role: "Mentor", subjects: "Data Structures, Algorithms", img: "https://randomuser.me/api/portraits/women/14.jpg" },
        { name: "Mr. Raj Kumar", role: "Staff", subjects: "Lab Sessions", img: "https://randomuser.me/api/portraits/men/15.jpg" }
    ],
    "Information Technology": [
        { name: "Dr. Anil Gupta", role: "Professor & HOD", subjects: "Networks, IoT", img: "https://randomuser.me/api/portraits/men/21.jpg" },
        { name: "Ms. Kavya Menon", role: "Associate Professor", subjects: "Web Dev, Databases", img: "https://randomuser.me/api/portraits/women/22.jpg" },
        { name: "Mr. Suresh Babu", role: "Asst. Professor", subjects: "AI, Data Science", img: "https://randomuser.me/api/portraits/men/23.jpg" },
        { name: "Ms. Aisha Khan", role: "Mentor", subjects: "Java, Python", img: "https://randomuser.me/api/portraits/women/24.jpg" },
        { name: "Mr. Rohit Nair", role: "Staff", subjects: "IT Lab", img: "https://randomuser.me/api/portraits/men/25.jpg" }
    ],
    "Electronics & Communication": [
        { name: "Dr. Meera Rao", role: "Professor & HOD", subjects: "VLSI, Digital Circuits", img: "https://randomuser.me/api/portraits/women/31.jpg" },
        { name: "Mr. Ramesh Iyer", role: "Associate Professor", subjects: "Communication Systems", img: "https://randomuser.me/api/portraits/men/32.jpg" },
        { name: "Ms. Shalini", role: "Asst. Professor", subjects: "Signals, DSP", img: "https://randomuser.me/api/portraits/women/33.jpg" },
        { name: "Mr. Deepak Joshi", role: "Mentor", subjects: "Embedded Systems", img: "https://randomuser.me/api/portraits/men/34.jpg" },
        { name: "Mr. Arvind Rao", role: "Staff", subjects: "Lab Assistance", img: "https://randomuser.me/api/portraits/men/35.jpg" }
    ],
    "Electrical & Electronics": [
        { name: "Dr. Neha Patil", role: "Professor & HOD", subjects: "Power Systems", img: "https://randomuser.me/api/portraits/women/41.jpg" },
        { name: "Mr. Sunil Verma", role: "Associate Professor", subjects: "Control Systems", img: "https://randomuser.me/api/portraits/men/42.jpg" },
        { name: "Ms. Ritu Sharma", role: "Asst. Professor", subjects: "Electrical Machines", img: "https://randomuser.me/api/portraits/women/43.jpg" },
        { name: "Mr. Manish Mehta", role: "Mentor", subjects: "Circuit Theory", img: "https://randomuser.me/api/portraits/men/44.jpg" },
        { name: "Mr. Ajay Yadav", role: "Staff", subjects: "Lab Maintenance", img: "https://randomuser.me/api/portraits/men/45.jpg" }
    ],
    "Mechanical Engineering": [
        { name: "Dr. Vivek Singh", role: "Professor & HOD", subjects: "Thermodynamics", img: "https://randomuser.me/api/portraits/men/51.jpg" },
        { name: "Mr. Arjun Das", role: "Associate Professor", subjects: "Manufacturing", img: "https://randomuser.me/api/portraits/men/52.jpg" },
        { name: "Ms. Pooja Roy", role: "Asst. Professor", subjects: "Fluid Mechanics", img: "https://randomuser.me/api/portraits/women/53.jpg" },
        { name: "Mr. Karan Thakur", role: "Mentor", subjects: "AutoCAD", img: "https://randomuser.me/api/portraits/men/54.jpg" },
        { name: "Mr. Dinesh Kumar", role: "Staff", subjects: "Workshop", img: "https://randomuser.me/api/portraits/men/55.jpg" }
    ],
    "MBA Department": [
        { name: "Dr. Shreya Nair", role: "Professor & HOD", subjects: "Business Strategy", img: "https://randomuser.me/api/portraits/women/61.jpg" },
        { name: "Mr. Abhishek Sen", role: "Associate Professor", subjects: "Finance", img: "https://randomuser.me/api/portraits/men/62.jpg" },
        { name: "Ms. Rekha Pillai", role: "Asst. Professor", subjects: "Marketing", img: "https://randomuser.me/api/portraits/women/63.jpg" },
        { name: "Mr. Harish Jain", role: "Mentor", subjects: "HR Management", img: "https://randomuser.me/api/portraits/men/64.jpg" },
        { name: "Ms. Sonia Kapoor", role: "Staff", subjects: "Admin Support", img: "https://randomuser.me/api/portraits/women/65.jpg" }
    ]
};

// Render Faculty Cards
const container = document.getElementById('facultyContainer');
for (let dept in departments) {
    const section = document.createElement('div');
    section.classList.add('department-section');
    section.innerHTML = `<h2 class="department-title">${dept}</h2>
                         <div class="faculty-grid">
                            ${departments[dept].map((f, i) => `
                                <div class="faculty-card">
                                    <img src="${f.img}" alt="${f.name}">
                                    <div class="faculty-info">
                                        <div class="faculty-name">${f.name}</div>
                                        <div class="faculty-position">${f.role}</div>
                                        <a href="#" class="btn" onclick="openModal('${f.name}','${dept}','${f.role}','${f.subjects}')">View Profile</a>
                                    </div>
                                </div>
                            `).join('')}
                         </div>`;
    container.appendChild(section);
}

// Modal Functions
function openModal(name, dept, role, subjects) {
    document.getElementById('modalName').innerText = name;
    document.getElementById('modalDept').innerText = dept;
    document.getElementById('modalRole').innerText = role;
    document.getElementById('modalSubjects').innerText = subjects;
    document.getElementById('facultyModal').style.display = 'flex';
}
function closeModal() {
    document.getElementById('facultyModal').style.display = 'none';
}
window.onclick = function (e) {
    if (e.target == document.getElementById('facultyModal')) {
        closeModal();
    }
}
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});
