const currentDateField = document.querySelector("#todaysdate");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
currentDateField.innerHTML = `<em>${fulldate}</em>`;


function toggleMenu(){
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}