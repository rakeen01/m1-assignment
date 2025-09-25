const images = [
  "images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg",
  "images/6.jpg", "images/7.jpg", "images/8.jpg", "images/9.jpg", "images/10.jpg"
];

const captions = [
  "Morning Assembly", "Campus Building Entrance", "Sports Day", "Cultural Fest", "Debate Club Prize Giving",
  "Volunteer Awards", "Running Rally", "Building Inauguration", "BD Flag rising", "Classroom"
];

const descs = [
  "Students gather for the national anthem.",
  "Entrance during golden hour.",
  "Sports day!!",
  "Annual festival organized by students.",
  "Inter-college debate preliminaries.",
  "Neighborhood cleanup initiative.",
  "Inter-house athletics finals.",
  "Inaugurating campus building with NGO partner.",
  "Honoring memorial with Bangladeshi flag",
  "Quiet study space with new collections."
];

const list = document.getElementById("gallery");
let html = "";
for (let i = 0; i < images.length; i++) {
  html += `
    <li class="photo" data-idx="${i}">
      <img src="${images[i]}" alt="${captions[i]}">
      <p class="caption">${captions[i]}</p>
      <div class="description">${descs[i]}</div>
    </li>
  `;
}
list.innerHTML = html;

const overlay = document.getElementById("infoOverlay");
const titleEl = document.getElementById("infoTitle");
const textEl = document.getElementById("infoText");
const closeEl = document.getElementById("infoClose");

function openInfo(i) {
  titleEl.textContent = captions[i];
  textEl.textContent = descs[i];
  overlay.classList.add("open");
  overlay.setAttribute("aria-hidden", "false");
}
function closeInfo() {
  overlay.classList.remove("open");
  overlay.setAttribute("aria-hidden", "true");
}

list.addEventListener("click", (e) => {
  const desc = e.target.closest(".description");
  if (!desc) return;
  const li = desc.closest(".photo");
  const i = Number(li.dataset.idx);
  openInfo(i);
});

closeEl.addEventListener("click", (e) => { e.preventDefault(); closeInfo(); });
overlay.addEventListener("click", (e) => { if (e.target === overlay) closeInfo(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeInfo(); });