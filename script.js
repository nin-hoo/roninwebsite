let currentDate = new Date();
let selectedDate = null;

function renderCalendar() {
    const monthYear = document.getElementById("monthYear");
    const dates = document.getElementById("dates");

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const today = new Date();

    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    monthYear.textContent = currentDate.toLocaleString("default", {
        month: "long",
        year: "numeric"
    });

    dates.innerHTML = "";

    for (let i = 0; i < firstDay; i++) {
        dates.appendChild(document.createElement("div"));
    }

    for (let day = 1; day <= lastDate; day++) {
        const dateDiv = document.createElement("div");
        dateDiv.textContent = day;

        // highlight today
        if (
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
        ) {
            dateDiv.classList.add("today");
        }

        // selectable date
        dateDiv.addEventListener("click", () => {
            if (selectedDate) {
                selectedDate.classList.remove("selected");
            }
            dateDiv.classList.add("selected");
            selectedDate = dateDiv;
        });

        dates.appendChild(dateDiv);
    }
}

function nextMonth() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    selectedDate = null;
    renderCalendar();
}

function prevMonth() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    selectedDate = null;
    renderCalendar();
}

document.getElementById("nextBtn").addEventListener("click", nextMonth);
document.getElementById("prevBtn").addEventListener("click", prevMonth);

renderCalendar();
