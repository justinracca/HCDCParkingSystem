// Get form, reservation display area, and dropdown
const reservationForm = document.getElementById("reservationForm");
const reservationsList = document.getElementById("reservations-list");
const parkingSpaceSelect = document.getElementById("parkingSpace");

// Array to store all parking spots
const parkingSpots = [];


// GENERATE PARKING AREA A (A1–A15)
for (let i = 1; i <= 15; i++) {

  // Even numbers = occupied, odd numbers = available
  const status = i % 2 === 0 ? "occupied" : "available";

  // Store each parking spot object
  parkingSpots.push({
    id: `A${i}`,
    status: status
  });
}


// GENERATE PARKING AREA B (B1–B15)
for (let i = 1; i <= 15; i++) {

  // Every 3rd spot is occupied, others are available
  const status = i % 3 === 0 ? "occupied" : "available";

  // Store each parking spot object
  parkingSpots.push({
    id: `B${i}`,
    status: status
  });
}


// ADD ONLY AVAILABLE SPOTS TO DROPDOWN
parkingSpots.forEach(spot => {

  // Check if spot is available
  if (spot.status === "available") {

    // Create option element for dropdown
    const option = document.createElement("option");

    // Set option value (data sent)
    option.value = spot.id;

    // Set visible text in dropdown
    option.textContent = spot.id;

    // Add option to select element
    parkingSpaceSelect.appendChild(option);
  }
});


// HANDLE FORM SUBMISSION
reservationForm.addEventListener("submit", function(e) {

  // Prevent page reload on submit
  e.preventDefault();

  // Get input values from form
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const plate = document.getElementById("plateNumber").value;
  const parkingSpace = document.getElementById("parkingSpace").value;

  // Validate if all fields are filled
  if (!date || !time || !plate || !parkingSpace) {
    alert("Please fill all fields");
    return;
  }

  // CREATE RESERVATION CARD
  const reservationCard = document.createElement("div");

  // Add styling class to card
  reservationCard.className = "card";

  // Fill card with reservation details
  reservationCard.innerHTML = `
    <h3>${plate}</h3>
    <p><strong>Parking Space:</strong> ${parkingSpace}</p>
    <p><strong>Date:</strong> ${date}</p>
    <p><strong>Time:</strong> ${time}</p>
  `;

  // Add card to reservations list
  reservationsList.appendChild(reservationCard);

  // Clear form after submission
  reservationForm.reset();

  // Show success message
  alert("Reservation Added!");
});
