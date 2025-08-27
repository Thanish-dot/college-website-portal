
document.addEventListener('DOMContentLoaded', function () {
    const calendarGrid = document.querySelector('.calendar-grid');
    const monthYearEl = document.getElementById('month-year');
    const prevBtn = document.getElementById('prev-month');
    const nextBtn = document.getElementById('next-month');

    // --- Store academic events in a structured array ---
    const academicEvents = [
        { date: '2025-08-11', description: 'Start of Odd Sem', type: 'event' },
        { date: '2025-08-15', description: 'Independence Day', type: 'holiday' },
        { date: '2025-09-15', description: 'Internal Exam I Starts', type: 'exam' },
        { date: '2025-10-02', description: 'Gandhi Jayanti', type: 'holiday' },
        { date: '2025-10-27', description: 'Internal Exam II Starts', type: 'exam' },
        { date: '2025-11-24', description: 'End Sem Exam Starts', type: 'exam' },
        { date: '2025-12-08', description: 'End of Odd Sem', type: 'event' },
        { date: '2025-12-25', description: 'Christmas', type: 'holiday' },
        { date: '2026-01-22', description: 'Start of Even Sem', type: 'event' },
    ];

    let currentDate = new Date();

    function renderCalendar() {
        // Set the current date to the first day of the month
        const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        const month = date.getMonth();
        const year = date.getFullYear();

        monthYearEl.textContent = `${date.toLocaleString('default', { month: 'long' })} ${year}`;

        calendarGrid.innerHTML = ''; // Clear previous grid

        // --- Add day names (Sun, Mon, etc.) ---
        const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        dayNames.forEach(day => {
            const dayNameEl = document.createElement('div');
            dayNameEl.classList.add('day-name');
            dayNameEl.textContent = day;
            calendarGrid.appendChild(dayNameEl);
        });

        // --- Calculate days for grid ---
        const firstDayIndex = date.getDay(); // 0 for Sunday, 1 for Monday...
        const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
        const prevLastDay = new Date(year, month, 0).getDate();

        // --- Fill calendar grid ---
        let dayCounter = 1;
        // Loop 42 times for a 6x7 grid
        for (let i = 0; i < 42; i++) {
            const dayCell = document.createElement('div');
            dayCell.classList.add('day-cell');

            const dayNumberEl = document.createElement('div');
            dayNumberEl.classList.add('day-number');

            // Previous month's days
            if (i < firstDayIndex) {
                dayCell.classList.add('other-month');
                dayNumberEl.textContent = prevLastDay - firstDayIndex + i + 1;
            }
            // Current month's days
            else if (dayCounter <= lastDayOfMonth) {
                dayNumberEl.textContent = dayCounter;

                // --- Check for Today ---
                const today = new Date();
                if (dayCounter === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
                    dayCell.classList.add('current-day');
                }

                // --- Check for Events ---
                const cellDateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(dayCounter).padStart(2, '0')}`;
                const eventsForDay = academicEvents.filter(e => e.date === cellDateStr);

                if (eventsForDay.length > 0) {
                    const eventList = document.createElement('ul');
                    eventList.classList.add('event-list');
                    eventsForDay.forEach(event => {
                        const eventItem = document.createElement('li');
                        eventItem.classList.add('event', `type-${event.type}`);
                        eventItem.textContent = event.description;
                        eventList.appendChild(eventItem);
                    });
                    dayCell.appendChild(eventList);
                }

                dayCounter++;
            }
            // Next month's days
            else {
                dayCell.classList.add('other-month');
                dayNumberEl.textContent = dayCounter - lastDayOfMonth;
                dayCounter++;
            }

            dayCell.prepend(dayNumberEl);
            calendarGrid.appendChild(dayCell);
        }
    }

    prevBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    });

    nextBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    });

    renderCalendar(); // Initial render
});
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

