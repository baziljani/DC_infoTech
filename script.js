document.addEventListener('DOMContentLoaded', function () {
    console.log('JavaScript is loaded and ready to go!');
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetElement = document.querySelector(this.getAttribute('href'));
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// const toggleButton = document.getElementById('menu-toggle');
// const navList = document.querySelector('.nav-list');

// toggleButton.addEventListener('click', function () {
//     navList.classList.toggle('active');
// });

const scrollToTopBtn = document.getElementById('scroll-to-top');

// Show button after scrolling down 200px
window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
};

// Scroll to top when button is clicked
scrollToTopBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

//for content section 


const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic validation
    if (name === '' || email === '' || message === '') {
        formMessage.textContent = 'All fields are required!';
        formMessage.style.color = 'red';
        return;
    }

    // Email validation (basic regex)
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        formMessage.textContent = 'Please enter a valid email address!';
        formMessage.style.color = 'red';
        return;
    }

    // Successful submission (you can add AJAX call here to actually submit)
    formMessage.textContent = 'Thank you for contacting me! I will get back to you soon.';
    formMessage.style.color = 'green';

    // Clear form
    form.reset();
});

