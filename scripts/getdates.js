/* Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Body */
body {
    font-family: 'Roboto', sans-serif;
    background-color: #f9f9f9;
    color: #222;
    line-height: 1.6;
    max-width: 960px;
    margin: auto;
    padding: 20px;
}

/* Header */
header {
    background-color: #00509e;
    color: white;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    margin-bottom: 20px;
}

/* Course Title */
#course-title {
    display: block;
    font-family: 'Poppins', sans-serif;
    font-size: 1.8rem;
    margin-bottom: 15px;
}

/* Navigation */
nav ul {
    display: flex;
    justify-content: center;
    gap: 25px;
    list-style: none;
}

nav ul li a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    padding: 5px 10px;
    transition: 0.3s ease-in-out;
}

nav ul li a:hover {
    color: #ffd700;
    border-bottom: 2px solid #ffd700;
}

/* Main Content */
main {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}

/* Card Styling */
.card {
    background: white;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid #ddd;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.2s ease-in-out;
}

.card:hover {
    transform: scale(1.02);
}

.card h2 {
    color: #00509e;
    margin-bottom: 10px;
}

.card img {
    width: 100%;
    border-radius: 10px;
    margin-bottom: 10px;
}

/* Footer */
footer {
    margin-top: 20px;
    background-color: #00509e;
    color: white;
    padding: 15px;
    text-align: center;
    border-radius: 8px;
}
