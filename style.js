/* --- Global Styles --- */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Lato', sans-serif;
    color: #333;
    background-color: #fcfcfc;
    line-height: 1.6;
}

h1, h2, h3 {
    font-family: 'Playfair Display', serif;
    font-weight: 400;
}

/* --- Hero/Header Section --- */
.hero {
    background-color: #edece8; /* Soft neutral background */
    padding: 100px 20px;
    text-align: center;
    border-bottom: 1px solid #e0e0e0;
}

.hero h1 {
    font-size: 3.5rem;
    margin-bottom: 15px;
    color: #2c2c2c;
}

.date-location {
    font-size: 1.1rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 20px;
}

.countdown {
    font-style: italic;
    font-family: 'Playfair Display', serif;
    color: #555;
    font-size: 1.2rem;
}

/* --- Navigation --- */
.navigation {
    display: flex;
    justify-content: center;
    gap: 30px;
    padding: 20px 0;
    background-color: #fff;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}

.tab-link {
    background: none;
    border: none;
    font-family: 'Lato', sans-serif;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    cursor: pointer;
    color: #777;
    padding: 10px 5px;
    transition: color 0.3s ease;
    border-bottom: 2px solid transparent;
}

.tab-link:hover {
    color: #2c2c2c;
}

.tab-link.active {
    color: #2c2c2c;
    border-bottom: 2px solid #2c2c2c;
}

/* --- Main Content --- */
.content-container {
    max-width: 900px;
    margin: 0 auto;
    padding: 60px 20px;
    min-height: 50vh;
}

.tab-content {
    display: none; /* Hidden by default, handled by JS */
    animation: fadeIn 0.5s ease-in;
}

.tab-content.active-tab {
    display: block;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

.intro-section {
    text-align: center;
    margin-bottom: 50px;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
}

.intro-section h2 {
    font-size: 2.5rem;
    margin-bottom: 10px;
}

.subtitle {
    font-style: italic;
    font-size: 1.1rem;
    margin-bottom: 20px;
    color: #555;
}

.note {
    margin-top: 25px;
    padding: 20px;
    background-color: #f7f6f2;
    border-radius: 5px;
    font-size: 0.95rem;
}

/* --- Events Grid --- */
.events-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: center;
}

.event-card {
    background: #fff;
    padding: 40px;
    border: 1px solid #eaeaea;
    border-radius: 8px;
    flex: 1 1 300px;
    text-align: center;
    box-shadow: 0 4px 15px rgba(0,0,0,0.02);
}

.event-card h3 {
    font-size: 2rem;
    margin: 10px 0 20px 0;
}

.time {
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.9rem;
    color: #555;
}

.location-name {
    font-weight: 700;
    font-size: 1.1rem;
    margin-bottom: 5px;
}

.address {
    color: #666;
    font-size: 0.95rem;
}

/* --- Footer --- */
footer {
    background-color: #2c2c2c;
    color: #fff;
    text-align: center;
    padding: 40px 20px;
}

footer h2 {
    font-size: 2rem;
    margin-bottom: 10px;
}

footer p {
    font-family: 'Lato', sans-serif;
    letter-spacing: 2px;
    font-size: 0.9rem;
}

/* --- Responsive Adjustments --- */
@media (max-width: 768px) {
    .hero h1 {
        font-size: 2.5rem;
    }
    .events-grid {
        flex-direction: column;
    }
}
