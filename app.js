const temples = [
{
name: "Tirupati Balaji Temple",
state: "Andhra Pradesh",
deity: "Lord Venkateswara",
image: "tirupati.jpg"
},
{
name: "Meenakshi Temple",
state: "Tamil Nadu",
deity: "Goddess Meenakshi",
image: "meenakshi.jpg"
},
{
name: "Kedarnath Temple",
state: "Uttarakhand",
deity: "Lord Shiva",
image: "kedarnath.jpg"
},
{
name: "Jagannath Temple",
state: "Odisha",
deity: "Lord Jagannath",
image: "jagannath.jpg"
},
{
name: "Konark Sun Temple",
state: "Odisha",
deity: "Sun God",
image: "konark.jpg"
},
{
name: "Ramanathaswamy Temple",
state: "Tamil Nadu",
deity: "Lord Shiva",
image: "ramanathaswamy.jpg"
},
{
name: "Somnath Temple",
state: "Gujarat",
deity: "Lord Shiva",
image: "somnath.jpg"
},
{
name: "Srisailam Temple",
state: "Andhra Pradesh",
deity: "Mallikarjuna Swamy",
image: "srisailam.jpg"
},
{
name: "Vaishno Devi Temple",
state: "Jammu & Kashmir",
deity: "Mata Vaishno Devi",
image: "vaishnodevi.jpg"
}
];

function displayTemples(data) {
const container = document.getElementById("templeContainer");

if (!container) return;

container.innerHTML = "";

data.forEach(temple => {
container.innerHTML += `
<div class="card">
<img src="${temple.image}" alt="${temple.name}">
<h3>${temple.name}</h3>
<p><strong>State:</strong> ${temple.state}</p>
<p><strong>Deity:</strong> ${temple.deity}</p>
</div>
`;
});
}

displayTemples(temples);

const searchInput = document.getElementById("searchInput");

if (searchInput) {
searchInput.addEventListener("keyup", () => {
const value = searchInput.value.toLowerCase();

const filtered = temples.filter(temple =>
temple.name.toLowerCase().includes(value) ||
temple.state.toLowerCase().includes(value) ||
temple.deity.toLowerCase().includes(value)
);

displayTemples(filtered);
});
}