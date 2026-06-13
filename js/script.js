/*==============================
    PRELOADER
==============================*/
window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    if(preloader){

        setTimeout(() => {

            preloader.classList.add("hide");

        }, 2000);   // Show loader for 2 seconds

    }

});


/*==============================
    MOBILE MENU
==============================*/
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {

    hamburger.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        hamburger.classList.toggle("active");

    });

}


/*==============================
    SCROLL PROGRESS BAR
==============================*/

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


/*==============================
    BACK TO TOP
==============================*/



/*==============================
    SCROLL REVEAL
==============================*/

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);

hiddenElements.forEach(element => {
    observer.observe(element);
});


/*==============================
    COUNTER ANIMATION
==============================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const counter = entry.target;

                const target = +counter.dataset.target;

                let count = 0;

                const speed = target / 100;

                const updateCounter = () => {

                    count += speed;

                    if (count < target) {

                        counter.innerText =
                            Math.floor(count);

                        requestAnimationFrame(updateCounter);

                    } else {

                        counter.innerText =
                            target.toLocaleString();

                    }

                };

                updateCounter();

                counterObserver.unobserve(counter);

            }

        });

    },
    {
        threshold: 0.5
    }
);

counters.forEach(counter => {
    counterObserver.observe(counter);
});


/*==============================
    FAQ ACCORDION
==============================*/

const faqItems =
    document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    if(question){

        question.addEventListener("click", () => {

            item.classList.toggle("active");

        });

    }

});


/*==============================
    TESTIMONIAL SLIDER
==============================*/

const testimonials =
    document.querySelectorAll(".testimonial-card");

let testimonialIndex = 0;

function rotateTestimonials() {

    if (testimonials.length === 0) return;

    testimonials.forEach(card => {
        card.style.display = "none";
    });

    const visibleCards = 3;

    for (let i = 0; i < visibleCards; i++) {

        const index =
            (testimonialIndex + i) %
            testimonials.length;

        testimonials[index].style.display = "block";
    }

    testimonialIndex++;

}

if (window.innerWidth <= 768) {

    setInterval(rotateTestimonials, 4000);

    rotateTestimonials();

}


/*==============================
    NEWSLETTER FORM
==============================*/

const newsletterForm =
    document.querySelector(".newsletter-form");

if (newsletterForm) {

    newsletterForm.addEventListener(
        "submit",
        function (e) {

            e.preventDefault();

            const email =
                this.querySelector("input");

            if (email.value.trim() !== "") {

                alert(
                    "Thank you for subscribing!"
                );

                this.reset();
            }

        }
    );

}


/*==============================
    SMOOTH SCROLL
==============================*/

document
    .querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

        anchor.addEventListener(
            "click",
            function (e) {

                const target =
                    document.querySelector(
                        this.getAttribute("href")
                    );

                if (target) {

                    e.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    });


/*==============================
    LOGIN PASSWORD TOGGLE
==============================*/

const passwordToggle =
    document.querySelector(".toggle-password");

if (passwordToggle) {

    passwordToggle.addEventListener(
        "click",
        function () {

            const password =
                document.querySelector(
                    ".password-input"
                );

            if (
                password.type === "password"
            ) {

                password.type = "text";

            } else {

                password.type = "password";

            }

        }
    );

}


/*==============================
    REGISTER PASSWORD STRENGTH
==============================*/

const registerPassword =
    document.querySelector(
        "#registerPassword"
    );

if (registerPassword) {

    registerPassword.addEventListener(
        "input",
        function () {

            const strength =
                document.querySelector(
                    ".strength-bar"
                );

            const value =
                this.value.length;

            if (value < 4) {

                strength.style.width = "25%";

            } else if (value < 8) {

                strength.style.width = "60%";

            } else {

                strength.style.width = "100%";

            }

        }
    );

}


/*==============================
    IMAGE TILT EFFECT
==============================*/

const tiltCards =
    document.querySelectorAll(".tilt");

tiltCards.forEach(card => {

    card.addEventListener(
        "mousemove",
        e => {

            const rect =
                card.getBoundingClientRect();

            const x =
                e.clientX - rect.left;

            const y =
                e.clientY - rect.top;

            const rotateX =
                -(y - rect.height / 2) / 20;

            const rotateY =
                (x - rect.width / 2) / 20;

            card.style.transform =
                `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                `;
        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "perspective(1000px) rotateX(0deg) rotateY(0deg)";
        }
    );

});


/*==============================
    CONSOLE MESSAGE
==============================*/

console.log(
    "%cStackly Theme Loaded Successfully 🚀",
    "color:#4F46E5;font-size:16px;font-weight:bold;"
);

const subscribeForm = document.getElementById("subscribeForm");

if (subscribeForm) {

    subscribeForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const emailInput = document.getElementById("subscribeEmail");
        const message = document.getElementById("subscribeMessage");

        const email = emailInput.value.trim();

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        /* Clear previous timeout */
        clearTimeout(message.timeoutId);

        if (email === "") {

            message.textContent =
                "Email address is required.";

            message.className =
                "error";

            /* Hide after 3 seconds */
            message.timeoutId = setTimeout(() => {

                message.textContent = "";
                message.className = "";

            }, 3000);

            return;
        }

        if (!emailPattern.test(email)) {

            message.textContent =
                "Please enter a valid email address.";

            message.className =
                "error";

            /* Hide after 3 seconds */
            message.timeoutId = setTimeout(() => {

                message.textContent = "";
                message.className = "";

            }, 3000);

            return;
        }

        message.textContent =
            "Thank you! You have successfully subscribed.";

        message.className =
            "success";

        subscribeForm.reset();

        /* Hide after 3 seconds */
        message.timeoutId = setTimeout(() => {

            message.textContent = "";
            message.className = "";

        }, 3000);

    });

}


const loginForm = document.getElementById("loginForm");

if(loginForm){

    loginForm.addEventListener("submit", function(e){

        e.preventDefault();

        const email =
            document.getElementById("loginEmail");

        const password =
            document.getElementById("loginPassword");

        const emailError =
            document.getElementById("emailError");

        const passwordError =
            document.getElementById("passwordError");

        emailError.textContent = "";
        passwordError.textContent = "";

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        let isValid = true;

        if(email.value.trim() === ""){

            emailError.textContent =
                "Email address is required.";

            isValid = false;
        }

        else if(!emailPattern.test(email.value.trim())){

            emailError.textContent =
                "Please enter a valid email address.";

            isValid = false;
        }

        if(password.value.length < 8){

            passwordError.textContent =
                "Password must be at least 8 characters.";

            isValid = false;
        }

        if(isValid){

            window.location.href = "404.html";
        }

    });

}

const togglePassword =
    document.getElementById("togglePassword");

const loginPassword =
    document.getElementById("loginPassword");

if(togglePassword){

    togglePassword.addEventListener("click", () => {

        if(loginPassword.type === "password"){

            loginPassword.type = "text";

            togglePassword.classList.replace(
                "fa-eye",
                "fa-eye-slash"
            );

        }

        else{

            loginPassword.type = "password";

            togglePassword.classList.replace(
                "fa-eye-slash",
                "fa-eye"
            );

        }

    });

}


/*==============================
    CONTACT FORM
==============================*/

const contactForm = document.getElementById("contactForm");

if(contactForm){

    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    const successMessage =
        document.getElementById("successMessage");


    function clearError(errorField){

        clearTimeout(errorField.timeoutId);

        errorField.timeoutId = setTimeout(() => {

            errorField.textContent = "";

        }, 3000);

    }


    contactForm.addEventListener("submit", function(e){

        e.preventDefault();

        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";
        successMessage.textContent = "";

        let isValid = true;

        const namePattern = /^[A-Za-z\s]+$/;

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        /* Full Name */

        if(fullName.value.trim() === ""){

            nameError.textContent =
                "Full Name is required.";

            clearError(nameError);

            isValid = false;
        }

        else if(!namePattern.test(fullName.value.trim())){

            nameError.textContent =
                "Only letters and spaces are allowed.";

            clearError(nameError);

            isValid = false;
        }


        /* Email */

        if(email.value.trim() === ""){

            emailError.textContent =
                "Email address is required.";

            clearError(emailError);

            isValid = false;
        }

        else if(!emailPattern.test(email.value.trim())){

            emailError.textContent =
                "Please enter a valid email address.";

            clearError(emailError);

            isValid = false;
        }


        /* Message */

        if(message.value.trim() === ""){

            messageError.textContent =
                "Please enter your message.";

            clearError(messageError);

            isValid = false;
        }


        /* Success */

        if(isValid){

            successMessage.textContent =
                "Message sent successfully!";

            contactForm.reset();

            setTimeout(() => {

                successMessage.textContent = "";

            }, 3000);

        }

    });


    /* Remove error while typing */

    fullName.addEventListener("input", () => {

        nameError.textContent = "";

    });


    email.addEventListener("input", () => {

        emailError.textContent = "";

    });


    message.addEventListener("input", () => {

        messageError.textContent = "";

    });

}


window.addEventListener("load", () => {

    document.querySelectorAll(
        ".about-banner-content h1, \
         .about-banner-content p, \
         .contact-banner-content h1, \
         .contact-banner-content p, \
         .services-banner-content h1, \
         .services-banner-content p"
    ).forEach(el => {

        el.style.animationPlayState = "running";

    });

});

