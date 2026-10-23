const form = document.getElementById("appointment-form");

form.addEventListener("submit", (event) => {
    const firstName = document.getElementById("fname");
    const lastName = document.getElementById("lname");
    const firstNameError = document.getElementById("fname-error");
    const lastNameError = document.getElementById("lname-error");

    firstNameError.textContent = "";
    lastNameError.textContent = "";

    if (firstName.value.trim() === "") {
        firstNameError.textContent = "Please enter your first name.";
        event.preventDefault();
    }

    if (lastName.value.trim() === "") {
        lastNameError.textContent = "Please enter your last name.";
        event.preventDefault();
    }
});