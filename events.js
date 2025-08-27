    function generateAutoEvents(days = 5) {
      const events = [];
      const today = new Date();

      for (let i = 1; i <= days; i++) {
        let eventDate = new Date(today);
        eventDate.setDate(today.getDate() + i);

        events.push({
          title: `Tech Event Day ${i}`,
          date: eventDate.toLocaleDateString(),
          location: `Hall ${i}`
        });
      }
      return events;
    }

    function showEvents() {
      const events = generateAutoEvents(5);
      let contentArea = document.getElementById('content-area');
      contentArea.style.display = 'block';

      let html = `<h2>Upcoming Tech Fest Events</h2>`;
      events.forEach(ev => {
        html += `
          <div class="event-item">
            <strong>${ev.title}</strong><br>
            Date: ${ev.date}<br>
            Location: ${ev.location}
          </div>
        `;
      });

      contentArea.innerHTML = html;
    }