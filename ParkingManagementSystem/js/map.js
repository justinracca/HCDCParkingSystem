// Get the parking grid container from HTML where all parking buttons will be displayed
const parkingGrid = document.getElementById("parking-grid");

// Get the section where selected parking spot details will be shown
const spotDetails = document.getElementById("spot-details");

// Create an empty array to store all parking spots
const parkingSpots = [];

// Generate parking spots for row A (A1 to A15)
for (let i = 1; i <= 15; i++) {
  parkingSpots.push({
    id: `A${i}`, // Example: A1, A2, A3...
    status: i % 2 === 0 ? "occupied" : "available" // Even numbers = occupied, odd = available
  });
}

// Generate parking spots for row B (B1 to B15)
for (let i = 1; i <= 15; i++) {
  parkingSpots.push({
    id: `B${i}`, // Example: B1, B2, B3...
    status: i % 3 === 0 ? "occupied" : "available" // Every 3rd spot is occupied
  });
}

// Loop through all parking spots and create buttons for each one
parkingSpots.forEach(spot => {

  // Create a button element for each parking spot
  const button = document.createElement("button");

  // Add CSS classes: base class + status (available/occupied)
  button.className = `parking-spot ${spot.status}`;

  // Set the text inside the button (e.g., A1, B5)
  button.innerText = spot.id;

  // Add click event to show spot details when clicked
  button.addEventListener("click", () => {

    // Get the "no selection" placeholder (if it exists)
    const noSelection = document.getElementById("no-selection");

    // Display selected spot information in the details section
    spotDetails.innerHTML = `
      <h3>Spot ${spot.id}</h3>
      <p><strong>Status:</strong> ${spot.status.charAt(0).toUpperCase() + spot.status.slice(1)}</p>
      <p><strong>Reserved:</strong> ${spot.status === "occupied" ? "Yes" : "No"}</p>
    `;

    // Show the details panel
    spotDetails.classList.add("show");

    // Hide the "no selection" message if it exists
    if(noSelection) noSelection.style.display = "none";

  });

  // Add the button to the parking grid on the page
  parkingGrid.appendChild(button);

});
