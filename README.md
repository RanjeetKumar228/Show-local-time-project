# 🕒 Local Time Project  

A simple yet effective **Local Time Web App** built using **HTML, CSS, and JavaScript**.  
This project dynamically displays the **current local time** of the user based on their system clock.  

---

## 🚀 Features
- Displays real-time **local time** with hours, minutes, and seconds.  
- Auto-updates every second using **JavaScript setInterval()**.  
- User-friendly and clean UI with **HTML & CSS styling**.  
- Pure **Vanilla JavaScript** (no external libraries).  
- Lightweight, responsive, and works across browsers.  

---

## 🛠️ Technologies Used
- **HTML5** → Structure of the app.  
- **CSS3** → Styling, layout, and responsiveness.  
- **JavaScript (ES6+)** → Core logic for fetching and updating time dynamically.  

---

## 📂 Project Structure
/local-time-project

│── index.html # Main HTML file

│── style.css # CSS styles

│── script.js # JavaScript logic

│── README.md # Project documentation

pgsql
Copy code

---

## ⚡ How It Works
- JavaScript’s built-in **Date() object** is used to fetch system time.  
- The **toLocaleTimeString()** method is applied for formatting.  
- **setInterval()** ensures the time updates every second.  

```javascript
// Example snippet
function updateTime() {
  const timeElement = document.getElementById("time");
  let now = new Date();
  timeElement.textContent = now.toLocaleTimeString();
}
setInterval(updateTime, 1000);


## 📥 Installation & Usage
Clone the repo

bash
Copy code
git clone https://github.com/RanjeetKumar228/Show-local-time-project.git
Open index.html in your browser.

Enjoy your real-time clock ⏰.
