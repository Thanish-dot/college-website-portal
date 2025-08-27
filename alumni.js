
// ======== Alumni Story Modal ========
function createModal(id, title, content) {
    let modal = document.createElement('div');
    modal.id = id;
    modal.style.position = 'fixed';
    modal.style.top = 0;
    modal.style.left = 0;
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.background = 'rgba(0,0,0,0.6)';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.zIndex = '9999';

    let modalContent = document.createElement('div');
    modalContent.style.background = '#fff';
    modalContent.style.padding = '20px';
    modalContent.style.borderRadius = '8px';
    modalContent.style.maxWidth = '500px';
    modalContent.style.width = '90%';
    modalContent.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
        <button id="close_${id}" style="margin-top:10px; background:#1e40af; color:white; border:none; padding:8px 12px; border-radius:4px; cursor:pointer;">Close</button>
    `;

    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    document.getElementById(`close_${id}`).addEventListener('click', () => modal.remove());
}

// ======== Join Alumni Form Modal ========
document.getElementById('joinBtn')?.addEventListener('click', function (e) {
    e.preventDefault();

    let formHtml = `
        <form id="alumniForm">
            <input type="text" placeholder="Full Name" required style="width:100%;margin-bottom:8px;padding:8px;">
            <input type="email" placeholder="Email" required style="width:100%;margin-bottom:8px;padding:8px;">
            <input type="text" placeholder="Batch (e.g., 2010 CSE)" required style="width:100%;margin-bottom:8px;padding:8px;">
            <textarea placeholder="Current Position" required style="width:100%;margin-bottom:8px;padding:8px;"></textarea>
            <button type="submit" style="background:#1e40af;color:white;padding:8px 12px;border:none;border-radius:4px;cursor:pointer;">Submit</button>
        </form>
    `;

    createModal('joinModal', 'Join Alumni Network', formHtml);

    document.getElementById('alumniForm').addEventListener('submit', function (ev) {
        ev.preventDefault();
        alert("✅ Thank you for joining the Alumni Network!");
        document.getElementById('joinModal').remove();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const storyLinks = document.querySelectorAll(".card .btn[data-story]");
    const modal = document.getElementById("storyModal");
    const storyName = document.getElementById("storyName");
    const storyBatch = document.getElementById("storyBatch");
    const storyContent = document.getElementById("storyContent");

    storyLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            // Get the parent card details
            const card = this.closest(".card");
            storyName.textContent = card.querySelector("h3").textContent;
            storyBatch.textContent = card.querySelector(".alumni-batch").textContent;
            storyContent.textContent = this.getAttribute("data-story");

            modal.style.display = "block";
        });
    });

    // Close modal on "X"
    document.getElementById("closeModal").addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close modal on outside click
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});
