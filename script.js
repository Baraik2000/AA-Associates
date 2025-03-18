// Mobile Menu Toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open
            if (window.innerWidth <= 768) {
                navLinks.style.display = 'none';
            }
        }
    });
});

// Form Submission Handler
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formObject);
    
    // Show success message
    alert('Thank you for your message. We will get back to you soon!');
    this.reset();
});

// Navbar Background Change on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = '#ffffff';
        navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'transparent';
        navbar.style.boxShadow = 'none';
    }
});

// Simple Testimonial Slider
const testimonials = [
    {
        text: "Excellent service and professional guidance. Highly recommended!",
        author: "John Doe, Business Owner"
    },
    {
        text: "They made tax filing incredibly simple for my business.",
        author: "Jane Smith, Entrepreneur"
    },
    {
        text: "Outstanding support for GST registration and compliance.",
        author: "Mike Johnson, Startup Founder"
    }
];

let currentTestimonialIndex = 0;
const testimonialContainer = document.querySelector('.testimonial');

function updateTestimonial() {
    const testimonial = testimonials[currentTestimonialIndex];
    testimonialContainer.innerHTML = `
        <p>"${testimonial.text}"</p>
        <h4>- ${testimonial.author}</h4>
    `;
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
}

// Change testimonial every 5 seconds
setInterval(updateTestimonial, 5000);
updateTestimonial(); // Initial update

// Animate service cards on scroll
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease-out';
    observer.observe(card);
});
