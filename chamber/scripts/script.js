const currentDateField = document.querySelector("#todaysdate");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
currentDateField.innerHTML = `<em>${fulldate}</em>`;