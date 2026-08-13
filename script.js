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

// --- RSVP Email Logic ---
function sendRSVP() {
    createConfetti();

    const email = "putrisanjunganinsani@gmail.com,kvj8627@yahoo.com";
    const subject = "RSVP - Kelly & Putri Wedding";

    const bodyLines = [
        "Hi Kelly & Putri,",
        "",
        "I would like to RSVP for your wedding on January 16, 2027.",
        "",
        "Name:",
        "Number of Guests/Children:",
        "Attending: Yes / No",
        "",
        "Thank you!"
    ];

    // Encode each line individually and join with explicit line breaks for iOS compatibility
    const encodedBody = bodyLines.map(line => encodeURIComponent(line)).join("%0D%0A");
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodedBody}`;

    setTimeout(() => {
        window.location.href = mailtoLink;
    }, 100);
}


// --- Wedding Photo Slideshow ---

const photos = document.querySelectorAll(".slideshow .images");
let currentPhoto = 0;

function showNextPhoto() {
    // Hide current photo
    photos[currentPhoto].classList.remove("active-photo");

    // Move to next photo
    currentPhoto = (currentPhoto + 1) % photos.length;

    // Show next photo
    photos[currentPhoto].classList.add("active-photo");
}

// Change photo every 4.5 seconds
setInterval(showNextPhoto, 4500);
