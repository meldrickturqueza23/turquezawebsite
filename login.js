const btn = document.getElementById("btnLogin");
const username = document.getElementById("username");
const password = document.getElementById("password");

btn.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent the default form submission
    if (username.value === "admin" && password.value === "12345") {
        // Redirect directly without showing an alert
        window.location.href = "indext.html";
    } else {
        // Optional: Show an error below the form instead of an alert
        const errorMsg = document.getElementById("errorMsg");
        errorMsg.textContent = "Invalid username or password. Please try again.";
    }
});
