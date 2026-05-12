const parkingGrid = document.getElementById("parking-grid");
const spotDetails = document.getElementById("spot-details");

const parkingSpots = [];

for (let i = 1; i <= 15; i++) {
  parkingSpots.push({
    id: `A${i}`,
    status: i % 2 === 0 ? "occupied" : "available"
  });
}

for (let i = 1; i <= 15; i++) {
  parkingSpots.push({
    id: `B${i}`,
    status: i % 3 === 0 ? "occupied" : "available"
  });
}

parkingSpots.forEach(spot => {

  const button = document.createElement("button");

  button.className = `parking-spot ${spot.status}`;
  button.innerText = spot.id;

  button.addEventListener("click", () => {

    const noSelection = document.getElementById("no-selection");
    spotDetails.innerHTML = `
      <h3>Spot ${spot.id}</h3>
      <p><strong>Status:</strong> ${spot.status.charAt(0).toUpperCase() + spot.status.slice(1)}</p>
      <p><strong>Reserved:</strong> ${spot.status === "occupied" ? "Yes" : "No"}</p>
    `;
    spotDetails.classList.add("show");
    if(noSelection) noSelection.style.display = "none";

  });

  parkingGrid.appendChild(button);

});