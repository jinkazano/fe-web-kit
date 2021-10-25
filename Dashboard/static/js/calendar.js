document.addEventListener("DOMContentLoaded", function () {
    var initialLocaleCode = "en";
    var localeSelectorEl = document.getElementById("locale-selector");
    var calendarEl = document.getElementById("calendar");
    var kitClubCalendar = [
        {
            title: "Họp team WEB",
            start: "2020-04-21",
        },
        {
            title: "Họp team MOBILE",
            start: "2020-04-27",
        },
        {
            title: "Họp project WEB CLB",
            start: "2020-04-19T16:00:00",
        },
        {
            title: "Đi chơi",
            start: "2020-04-30T16:00:00",
        },
        {
            title: "Họp CLB ",
            start: "2020-04-31",
        },
    ];
    var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: ["interaction", "dayGrid", "timeGrid", "list"],
        header: {
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
        },
        locale: initialLocaleCode,
        buttonIcons: false, // show the prev/next text
        weekNumbers: true,
        navLinks: true, // can click day/week names to navigate views
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: kitClubCalendar,
    });
    calendar.render();

    // build the locale selector's options
    calendar.getAvailableLocaleCodes().forEach(function (localeCode) {
        var optionEl = document.createElement("option");
        optionEl.value = localeCode;
        optionEl.selected = localeCode == initialLocaleCode;
        optionEl.innerText = localeCode;
        localeSelectorEl.appendChild(optionEl);
    });

    // when the selected option changes, dynamically change the calendar option
    localeSelectorEl.addEventListener("change", function () {
        if (this.value) {
            calendar.setOption("locale", this.value);
        }
    });
});
