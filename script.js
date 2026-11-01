
// DINNER MENU
const MENU_OPTIONS = [
  "Filet Mignon",
  "Herb-Roasted Chicken",
  "Pan-Seared Salmon",
  "Vegetarian Pasta",
  "Kids' Meal (12 & under)"
];

const RSVP_EMAILS = "putrisanjunganinsani@gmail.com,kvj8627@yahoo.com";
const RSVP_SUBJECT = "RSVP - Kelly & Putri Wedding";

// --- Tab Switching Logic ---
function openTab(evt, tabName) {
  let tabContents = document.getElementsByClassName("tab-content");

  for (let i = 0; i < tabContents.length; i++) {
    tabContents[i].classList.remove("active-tab");
  }

  let tabLinks = document.getElementsByClassName("tab-link");

  for (let i = 0; i < tabLinks.length; i++) {
    tabLinks[i].classList.remove("active");
  }

  document.getElementById(tabName).classList.add("active-tab");
  evt.currentTarget.classList.add("active");

  window.scrollTo({
    top: document.querySelector('.navigation').offsetTop,
    behavior: 'smooth'
  });
}

// --- Countdown Timer Logic ---
const weddingDate = new Date("January 16, 2027 16:00:00").getTime();

const countdownTimer = setInterval(function() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const countdownElement = document.getElementById("countdown");

  if (distance > 0) {
    countdownElement.innerHTML = days + " Days To Go!";
  } else {
    clearInterval(countdownTimer);
    countdownElement.innerHTML = "Today is the day!";
  }
}, 1000);

// --- Confetti Logic ---
function createConfetti() {
  const colors = ['#2c2c2c', '#777777', '#f4feff', '#ffd700', '#ffb6c1', '#87ceeb'];

  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti-piece');

    if (Math.random() > 0.5) {
      confetti.style.borderRadius = '50%';
    }

    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
    confetti.style.animationDelay = (Math.random() * 1.5) + 's';

    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 6500);
  }
}

// --- Money Logic ---
function createMoney() {
  for (let i = 0; i < 100; i++) {
    const money = document.createElement('div');
    money.classList.add('money-piece');
    money.textContent = '💵';
    money.style.left = Math.random() * 100 + 'vw';

    // Start somewhere above the visible screen
    money.style.top = -(Math.random() * 300 + 100) + 'px';
    money.style.fontSize = (Math.random() * 15 + 20) + 'px';
    money.style.animationDuration = (Math.random() * 3 + 2) + 's';
    money.style.animationDelay = (Math.random() * 1.1) + 's';
    document.body.appendChild(money);

    setTimeout(() => {
      money.remove();
    }, 6500);
  }
}


// RSVP FORM + EMAIL LOGIC
const rsvpDialog = document.getElementById("rsvpDialog");
const rsvpForm = document.getElementById("rsvpForm");
const guestCountInput = document.getElementById("guestCount");
const guestList = document.getElementById("guestList");
const attendingFields = document.getElementById("attendingFields");
const rsvpError = document.getElementById("rsvpError");

function openRSVP() {
  rsvpForm.reset();
  rsvpError.hidden = true;
  renderGuests();
  updateAttendingState();
  rsvpDialog.showModal();
}

function closeRSVP() {
  rsvpDialog.close();
}

function getAttending() {
  return rsvpForm.querySelector('input[name="attending"]:checked').value;
}

function updateAttendingState() {
  const attending = getAttending() === "Yes";
  attendingFields.hidden = !attending;
  // Disabled fieldsets are skipped by validation and ignored on submit
  attendingFields.disabled = !attending;
}

function buildGuestRow(index, savedName, savedMeal) {
  const row = document.createElement("div");
  row.className = "guest-row";

  const title = document.createElement("p");
  title.className = "guest-title";
  title.textContent = index === 0 ? "Guest 1 (you)" : "Guest " + (index + 1);
  row.appendChild(title);

  // Guest 1 is the person filling out the form, so they don't need a second name field
  if (index > 0) {
    const nameLabel = document.createElement("label");
    nameLabel.className = "field";
    const nameSpan = document.createElement("span");
    nameSpan.textContent = "Name";
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.className = "guest-name";
    nameInput.required = true;
    nameInput.value = savedName || "";
    nameLabel.append(nameSpan, nameInput);
    row.appendChild(nameLabel);
  }

  const mealLabel = document.createElement("label");
  mealLabel.className = "field";
  const mealSpan = document.createElement("span");
  mealSpan.textContent = "Dinner selection";
  const select = document.createElement("select");
  select.className = "guest-meal";
  select.required = true;

  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = "Choose a dinner...";
  select.appendChild(placeholder);

  MENU_OPTIONS.forEach(item => {
    const opt = document.createElement("option");
    opt.value = item;
    opt.textContent = item;
    select.appendChild(opt);
  });
  select.value = savedMeal || "";

  mealLabel.append(mealSpan, select);
  row.appendChild(mealLabel);

  return row;
}

function renderGuests() {
  let count = parseInt(guestCountInput.value, 10);
  if (isNaN(count) || count < 1) count = 1;
  if (count > 10) count = 10;

  // Preserve anything already typed when the count changes
  const savedNames = Array.from(guestList.querySelectorAll(".guest-name")).map(el => el.value);
  const savedMeals = Array.from(guestList.querySelectorAll(".guest-meal")).map(el => el.value);

  guestList.innerHTML = "";
  for (let i = 0; i < count; i++) {
    // Names are stored for guests 2+, so shift the index by one
    guestList.appendChild(buildGuestRow(i, savedNames[i - 1], savedMeals[i]));
  }
}

function buildEmailBody() {
  const name = document.getElementById("rsvpName").value.trim();
  const attending = getAttending();
  const lines = [
    "Hi Kelly & Putri,",
    "",
    "I would like to RSVP for your wedding on January 16, 2027.",
    "",
    "Name: " + name,
    "Attending: " + attending
  ];

  if (attending === "Yes") {
    const rows = guestList.querySelectorAll(".guest-row");
    lines.push("Total Guests: " + rows.length, "", "DINNER SELECTIONS:");

    rows.forEach((row, i) => {
      const meal = row.querySelector(".guest-meal").value;
      const guestName = i === 0 ? name : row.querySelector(".guest-name").value.trim();
      lines.push((i + 1) + ". " + guestName + " - " + meal);
    });

    const notes = document.getElementById("rsvpNotes").value.trim();
    if (notes) {
      lines.push("", "Allergies/Dietary Notes: " + notes);
    }
  }

  lines.push("", "Thank you!");
  return lines;
}

function sendRSVP() {
  const lines = buildEmailBody();

  // Encode each line individually and join with explicit line breaks for iOS compatibility
  const encodedBody = lines.map(line => encodeURIComponent(line)).join("%0D%0A");
  const mailtoLink = `mailto:${RSVP_EMAILS}?subject=${encodeURIComponent(RSVP_SUBJECT)}&body=${encodedBody}`;

  createConfetti();
  closeRSVP();

  setTimeout(() => {
    window.location.href = mailtoLink;
  }, 100);
}

// Event wiring
guestCountInput.addEventListener("input", renderGuests);

rsvpForm.querySelectorAll('input[name="attending"]').forEach(radio => {
  radio.addEventListener("change", updateAttendingState);
});

document.getElementById("rsvpClose").addEventListener("click", closeRSVP);

// Click on the dark backdrop closes the dialog
rsvpDialog.addEventListener("click", (e) => {
  if (e.target === rsvpDialog) closeRSVP();
});

rsvpForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!rsvpForm.checkValidity()) {
    rsvpError.textContent = "Please fill in all required fields, including a dinner choice for each guest.";
    rsvpError.hidden = false;
    rsvpForm.reportValidity();
    return;
  }

  rsvpError.hidden = true;
  sendRSVP();
});

// --- Wedding Photo Slideshow ---
const photos = document.querySelectorAll(".slideshow .images");
let currentPhoto = 0;

function showNextPhoto() {
  photos[currentPhoto].classList.remove("active-photo");
  currentPhoto = (currentPhoto + 1) % photos.length;
  photos[currentPhoto].classList.add("active-photo");
}

// Change photo every 4.5 seconds
setInterval(showNextPhoto, 4500);
