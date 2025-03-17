// Display current date and time
function updateDateTime() {
  const now = new Date();
  document.getElementById("datetime").innerText = now.toLocaleString();
}
setInterval(updateDateTime, 1000);
updateDateTime();

// Form validation
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("formMessage");
    formMessage.innerHTML = "";

    if (name === "" || email === "" || message === "") {
      formMessage.innerText = "All fields are required!";
      formMessage.style.color = "red";
      return;
    }
    formMessage.innerText = "Message sent successfully!";
    formMessage.style.color = "green";
    document.getElementById("contactForm").reset();
  });

const footerDate = () => {
  document.getElementById("footerDate").innerText = new Date().getFullYear();
};

footerDate();
