/* --------------------- HEADER AND SCROLL --------------------- */
document.addEventListener('DOMContentLoaded', () => {
	const toggler = document.getElementById('toggler');
	const navbar = document.querySelector('.navbar');
	const logo = document.querySelector('.logo');
	const togglerIcon = document.querySelector('.fa-bars');
	const togglerLabel = document.querySelector('[for="toggler"]');
	const navbarLinks = document.querySelectorAll('.navbar a');
	const icons = document.querySelectorAll('.icons a');
  
	toggler.addEventListener('click', () => {
	navbar.style.display = toggler.checked ? 'block' : 'none';
});


function changeColorOnScroll(color) {
	logo.style.color = color;
	togglerIcon.style.color = color;
	togglerLabel.style.color = color;
	navbarLinks.forEach(link => {
	link.style.color = color;
	link.addEventListener('mouseover', () => (link.style.color = 'var(--blue)'));
	link.addEventListener('mouseout', () => (link.style.color = color));
	});
	icons.forEach(icon => {
	icon.style.color = color;
	icon.addEventListener('mouseover', () => (icon.style.color = 'var(--blue)'));
	icon.addEventListener('mouseout', () => (icon.style.color = '#666'));
	});
}

window.addEventListener('scroll', () => {
	const header = document.querySelector('header');
	if (window.scrollY > 100) {
	header.classList.add('scrolled');
	changeColorOnScroll('#666');
	} else {
	header.classList.remove('scrolled');
	changeColorOnScroll('#ffffff');
	}
});

/* --------------------- FILTER AND SEARCH --------------------- */
const buttons = document.querySelectorAll('.button-value');
const boxes = document.querySelectorAll('.box');
const searchInput = document.getElementById('search-input');

buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        const filterValue = this.textContent.trim();
        filterProducts(filterValue);

        buttons.forEach(function (btn) {
            btn.classList.remove('active');
        });

        this.classList.add('active');
    });
});

searchInput.addEventListener('input', function () {
    const searchTerm = this.value.trim().toLowerCase();
    searchProducts(searchTerm);
});

function filterProducts(filterValue) {
    if (filterValue === 'All') {
        boxes.forEach(function (box) {
            box.style.display = 'block';
        });
    } else {
        boxes.forEach(function (box) {
            const boxDiscount = box.getAttribute('data-type');
            if (boxDiscount === filterValue) {
                box.style.display = 'block';
            } else {
                box.style.display = 'none';
            }
        });
    }
}

function searchProducts(searchTerm) {
    boxes.forEach(function (box) {
        const productName = box.querySelector('h3').textContent.toLowerCase();

        if (productName.includes(searchTerm)) {
            box.style.display = 'block';
        } else {
            box.style.display = 'none';
        }
    });
}

/* --------------------- REGISTRATION FORM --------------------- */

const registrationForm = document.getElementById('registrationForm');
console.log("Registration form:", registrationForm);

const userIcon = document.querySelector('header .fas.fa-user');
const fullName = document.getElementById('fullname').value;
console.log("Full name:", fullName);

const email = document.getElementById('email').value;
console.log("Email:", email);

const password = document.getElementById('password').value;
console.log("Password:", password);

registrationForm.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!fullName || !email || !password) {
        alert('Please fill in all required fields.');
        return;
    }

    const formData = new FormData(registrationForm);
    for (const pair of formData.entries()) {
        console.log(pair[0] + ', ' + pair[1]);
    }

    registrationForm.submit();
});

const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', function () {
    userIcon.innerHTML = 'Logged in';
});

/* --------------------- SLIDESHOW --------------------- */

let currentSlide = 0;
const slides = document.querySelectorAll('.slideshow video');

function showSlide(n) {
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });

    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

setInterval(nextSlide, 5000);


});

