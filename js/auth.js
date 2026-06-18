// Mobile Navbar

function toggleNav() {
    document.getElementById("navLinks").classList.toggle("active");
}

// Sidebar Menu

function toggleMenu() {
    document.getElementById("sidebar").classList.toggle("active");
}

// Show / Hide Password

function togglePassword(inputId, icon) {

    const passwordInput = document.getElementById(inputId);

    if (passwordInput.type === "password") {

        passwordInput.type = "text";

        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");

    } else {

        passwordInput.type = "password";

        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}

//login
function loginUser() {

    const role =document.getElementById("loginRole").value;
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const roleError = document.getElementById("roleError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    roleError.innerHTML = "";
    emailError.innerHTML = "";
    passwordError.innerHTML = "";

    const button = document.querySelector(".login-btn");

    if(role === ""){

        roleError.innerHTML = "Please select a role";

        setTimeout(() => {
            roleError.innerHTML = "";
        }, 3000);

        return;
    }

    if(email === "" || password === ""){

        button.innerHTML = "Please Fill All Fields";
        button.style.background = "#dc3545";

        setTimeout(() => {
            button.innerHTML = "Login To Dashboard";
            button.style.background = "#2e7d32";
        }, 2000);

        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){

        emailError.innerHTML = "Please enter a valid email address";

        setTimeout(() => {
            emailError.innerHTML = "";
        }, 3000);

        return;
    }

    if(password.length < 8){

        passwordError.innerHTML =
        "Password must contain at least 8 characters";

        setTimeout(() => {
            passwordError.innerHTML = "";
        }, 3000);

        return;
    }

    button.innerHTML = "Logging In...";
    button.disabled = true;

    setTimeout(() => {
              localStorage.setItem("loggedInEmail", email);
        if(role === "admin"){

            window.location.href = "admin-dashboard.html";

        }else{

            window.location.href = "user-dashboard.html";

        }

    }, 1000);
}

// Register User

function registerUser() {

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("signupEmail").value.trim();

    const password =
        document.getElementById("signupPassword").value.trim();

    const confirmPassword =
        document.getElementById("confirmPassword").value.trim();

    const role =
        document.getElementById("signupRole").value;

    const button =
        document.querySelector(".register-btn");

    const emailError =
        document.getElementById("emailError");

    const passwordError =
        document.getElementById("passwordError");

    const confirmPasswordError =
        document.getElementById("confirmPasswordError");

    emailError.innerHTML = "";
    passwordError.innerHTML = "";
    confirmPasswordError.innerHTML = "";

    if (
        name === "" ||
        email === "" ||
        password === "" ||
        confirmPassword === ""
    ) {

        button.innerHTML = "Please Fill All Fields";
        button.style.background = "#dc3545";

        setTimeout(() => {
            button.innerHTML = "Create Account";
            button.style.background = "#2e7d32";
        }, 2000);

        return;
    }

if(role === ""){

    const roleError =
    document.getElementById("roleError");

    roleError.innerHTML =
    "Please select a role";

    setTimeout(() => {

        roleError.innerHTML = "";

    }, 3000);

    return;
}


    if (!/^[A-Za-z ]+$/.test(name)) {

        button.innerHTML = "Only Letters Allowed";
        button.style.background = "#dc3545";

        setTimeout(() => {
            button.innerHTML = "Create Account";
            button.style.background = "#2e7d32";
        }, 2000);

        return;
    }

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        emailError.innerHTML =
            "Please enter a valid email address";

        setTimeout(() => {
            emailError.innerHTML = "";
        }, 3000);

        return;
    }

    if (password.length < 8) {

        passwordError.innerHTML =
            "Password must contain at least 8 characters";

        setTimeout(() => {
            passwordError.innerHTML = "";
        }, 3000);

        return;
    }

    if (password !== confirmPassword) {

        confirmPasswordError.innerHTML =
            "Passwords do not match";

        setTimeout(() => {
            confirmPasswordError.innerHTML = "";
        }, 3000);

        return;
    }

    localStorage.setItem("userRole", role);
    localStorage.setItem("userName", name);

    button.innerHTML = "Creating Account...";
    button.disabled = true;

    setTimeout(() => {

        button.innerHTML = "✓ Account Created";
        button.style.background = "#28a745";

        setTimeout(() => {
            window.location.href = "login.html";
        }, 1000);

    }, 1000);
}

// Welcome Message

window.onload = function () {

    const userName =
        localStorage.getItem("userName");

    const welcomeUser =
        document.getElementById("welcomeUser");

    if (welcomeUser && userName) {

        welcomeUser.innerHTML =
            "Welcome, " + userName + " 👋";
    }
};

// Logout

function logoutUser() {

    localStorage.clear();

    window.location.href = "index.html";
}




function toggleRoleDropdown(){

    const options =
    document.getElementById("roleOptions");

    options.style.display =
    options.style.display === "block"
    ? "none"
    : "block";
}

function selectRole(role){

    document.getElementById("selectedRole")
    .innerHTML =
    role.charAt(0).toUpperCase() +
    role.slice(1);

    document.getElementById("loginRole")
    .value = role;

    document.getElementById("roleOptions")
    .style.display = "none";
}


window.onclick = function(e){

    if(!e.target.closest(".custom-select")){

        const loginOptions =
        document.getElementById("roleOptions");

        const signupOptions =
        document.getElementById("signupRoleOptions");

        if(loginOptions){
            loginOptions.style.display = "none";
        }

        if(signupOptions){
            signupOptions.style.display = "none";
        }
    }
};



function toggleSignupRoleDropdown(){

    const options =
    document.getElementById("signupRoleOptions");

    options.style.display =
    options.style.display === "block"
    ? "none"
    : "block";
}

function selectSignupRole(role){

    document.getElementById("selectedSignupRole")
    .innerHTML =
    role.charAt(0).toUpperCase() +
    role.slice(1);

    document.getElementById("signupRole")
    .value = role;

    document.getElementById("signupRoleOptions")
    .style.display = "none";
}


window.addEventListener("load", function () {

    const preloader = document.getElementById("preloader");

    if(preloader){
        setTimeout(() => {
            preloader.classList.add("hide");
        }, 800);
    }

});

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {

    if (progressBar) {

        const scrollTop = window.scrollY;

        const docHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const progress = (scrollTop / docHeight) * 100;

        progressBar.style.width = progress + "%";
    }

});