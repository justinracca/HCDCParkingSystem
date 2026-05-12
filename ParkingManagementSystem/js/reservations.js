const reservationForm = document.getElementById("reservationForm");
const reservationsList = document.getElementById("reservations-list");
const parkingSpaceSelect = document.getElementById("parkingSpace");

const parkingSpots = [];

for (let i = 1; i <= 15; i++) {
  const status = i % 2 === 0 ? "occupied" : "available";
  parkingSpots.push({id: `A${i}`, status: status});
}

for (let i = 1; i <= 15; i++) {
  const status = i % 3 === 0 ? "occupied" : "available";
  parkingSpots.push({id: `B${i}`, status: status});
}

parkingSpots.forEach(spot => {
  if(spot.status === "available") {
    const option = document.createElement("option");
    option.value = spot.id;
    option.textContent = spot.id;
    parkingSpaceSelect.appendChild(option);
  }
});

reservationForm.addEventListener("submit", function(e){

  e.preventDefault();

  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const plate = document.getElementById("plateNumber").value;
  const parkingSpace = document.getElementById("parkingSpace").value;

  if(!date || !time || !plate || !parkingSpace) {
    alert("Please fill all fields");
    return;
  }

  const reservationCard = document.createElement("div");

  reservationCard.className = "card";

  reservationCard.innerHTML = `
    <h3>${plate}</h3>
    <p><strong>Parking Space:</strong> ${parkingSpace}</p>
    <p><strong>Date:</strong> ${date}</p>
    <p><strong>Time:</strong> ${time}</p>
  `;

  reservationsList.appendChild(reservationCard);

  reservationForm.reset();

  alert("Reservation Added!");

});