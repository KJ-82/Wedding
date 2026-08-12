// --- Tab Switching Logic ---
function openTab(evt, tabName) {
    // Get all elements with class="tab-content" and hide them
    let tabContents = document.getElementsByClassName("tab-content");

    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active-tab");
    }

    // Get all elements with class="tab-link" and remove the class "active"
    let tabLinks = document.getElementsByClassName("tab-link");

    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active");
    }

    // Show the current tab, and add an "active" class to the button
    // that opened the tab
    document.getElementById(tabName).classList.add("active-tab");
    evt.currentTarget.classList.add("active");

    // Scroll smoothly to top of content when clicking a tab
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

    // Time calculations for days
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    // Display the result in the element with id="countdown"
    const countdownElement = document.getElementById("countdown");

    if (distance > 0) {
        countdownElement.innerHTML = days + " Days To Go!";
    } else {
        clearInterval(countdownTimer);
        countdownElement.innerHTML = "Today is the day!";
    }
}, 1000);


// --- RSVP Email Logic ---
function sendRSVP() {
    // Email addresses that will receive the RSVP
    const email = "putrisanjunganinsani@gmail.com,kvj8627@yahoo.com";

    // Email subject
    const subject = "RSVP - Kelly & Putri Wedding";

    // Email body
    const body = `Hi Kelly & Putri,

I would like to RSVP for your wedding on January 16, 2027.

Name:
Number of Guests/Children:
Attending: Yes / No

Thank you!`;

    // FIX: Convert standard newlines to carriage return + line feed for mobile clients
    const mobileSafeBody = body.replace(/\r?\n/g, '\r\n');

    // Create the email link
    const mailtoLink =
        "mailto:" + email +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(mobileSafeBody);

    // Open the user's email application
    window.location.href = mailtoLink;
}
