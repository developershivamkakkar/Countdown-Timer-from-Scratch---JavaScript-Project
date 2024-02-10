const endDate = "20 Feb 2024 10:00 AM";
document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");

function clock() {
  const end = new Date(endDate);
  const now = new Date();
  const diff = (end - now) / 1000;

  if (diff < 0) return;
  inputs[0].value = Math.floor(diff / 3600 / 24); // Convert into days
  inputs[1].value = Math.floor(diff / 3600) % 24; // Calcuate Remaing Hours
  inputs[2].value = Math.floor(diff / 60) % 60; // Calcuate Remaing Minutes
  inputs[3].value = Math.floor(diff) % 60; // Calculate Remaining Seconds
}

//Initial call
clock();

setInterval(() => {
  clock();
}, 1000);

//  1 day =24 hours
//  1 hour =60 minutes
// 1 hour =3600 seconds
