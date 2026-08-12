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

// --- RSVP Email Logic ---
function sendRSVP() {
  createConfetti();

  const email = "putrisanjunganinsani@gmail.com,kvj8627@yahoo.com";
  const subject = "RSVP - Kelly & Putri Wedding";
  const body = `Hi Kelly & Putri,

I would like to RSVP for your wedding on January 16, 2027.

Name:
Number of Guests/Children:
Attending: Yes / No

Thank you!`;

  const mobileSafeBody = body.replace(/\r?\n/g, '\r\n');

  const mailtoLink =
    "mailto:" + email +
    "?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(mobileSafeBody);

  setTimeout(() => {
    window.location.href = mailtoLink;
  }, 100);
}
