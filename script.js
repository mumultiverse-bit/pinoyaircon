// ===================================
// Kabayan Aircon - Interactive Features
// ===================================

// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinks = document.getElementById('navLinks');

mobileMenuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuToggle.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuToggle.textContent = '☰';
    });
});

// Header scroll effect
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// Observe service cards for staggered animation
document.querySelectorAll('.service-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
});

// Observe feature boxes for staggered animation
document.querySelectorAll('.feature-box').forEach((box, index) => {
    box.style.opacity = '0';
    box.style.transform = 'scale(0.9)';
    box.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(box);
});

// Contact Form Validation and Submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitButton = document.getElementById('submitButton');
    const originalText = submitButton.innerHTML;

    // Get form data
    const formData = {
        name: document.getElementById('formName').value,
        email: document.getElementById('formEmail').value,
        phone: document.getElementById('formPhone').value,
        service: document.getElementById('formService').value,
        message: document.getElementById('formMessage').value
    };

    // Validate form
    if (!validateForm(formData)) {
        return;
    }

    // Show loading state
    submitButton.innerHTML = 'Sending... ⏳';
    submitButton.disabled = true;

    // Simulate form submission (replace with actual API call)
    try {
        await simulateFormSubmission(formData);

        // Success state
        submitButton.innerHTML = 'Message Sent! ✓';
        submitButton.style.background = 'linear-gradient(135deg, #00ff88 0%, #00cc66 100%)';

        // Show success message
        showNotification('Thank you! We will contact you soon.', 'success');

        // Reset form
        contactForm.reset();

        // Reset button after 3 seconds
        setTimeout(() => {
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
            submitButton.style.background = '';
        }, 3000);

    } catch (error) {
        // Error state
        submitButton.innerHTML = 'Failed to Send ✕';
        submitButton.style.background = 'linear-gradient(135deg, #ff4444 0%, #cc0000 100%)';

        showNotification('Something went wrong. Please try again.', 'error');

        // Reset button after 3 seconds
        setTimeout(() => {
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
            submitButton.style.background = '';
        }, 3000);
    }
});

// Form validation function
function validateForm(data) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[\d\s\+\-\(\)]+$/;

    if (data.name.trim().length < 2) {
        showNotification('Please enter a valid name', 'error');
        return false;
    }

    if (!emailRegex.test(data.email)) {
        showNotification('Please enter a valid email address', 'error');
        return false;
    }

    if (!phoneRegex.test(data.phone) || data.phone.trim().length < 10) {
        showNotification('Please enter a valid phone number', 'error');
        return false;
    }

    if (data.service.trim().length < 2) {
        showNotification('Please specify the service you need', 'error');
        return false;
    }

    if (data.message.trim().length < 10) {
        showNotification('Please provide more details in your message', 'error');
        return false;
    }

    return true;
}

// Simulate form submission (replace with actual backend integration)
function simulateFormSubmission(data) {
    return new Promise((resolve, reject) => {
        console.log('Form submitted with data:', data);

        // Simulate network delay
        setTimeout(() => {
            // Simulate 90% success rate
            if (Math.random() > 0.1) {
                resolve({ success: true });
            } else {
                reject(new Error('Network error'));
            }
        }, 1500);
    });
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '100px',
        right: '20px',
        padding: '1rem 1.5rem',
        background: type === 'success' ? 'linear-gradient(135deg, #00ff88 0%, #00cc66 100%)' :
            type === 'error' ? 'linear-gradient(135deg, #ff4444 0%, #cc0000 100%)' :
                'linear-gradient(135deg, #00d4ff 0%, #0088ff 100%)',
        color: 'white',
        borderRadius: '12px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        zIndex: '10000',
        fontWeight: '600',
        animation: 'slideInRight 0.3s ease',
        maxWidth: '300px'
    });

    // Add animation keyframes if not already added
    if (!document.querySelector('#notificationStyles')) {
        const style = document.createElement('style');
        style.id = 'notificationStyles';
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(400px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Add to DOM
    document.body.appendChild(notification);

    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

// Add hover effect to CTA buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-2px)';
    });

    button.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');

    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Log page load
console.log('%c🌟 Kabayan Aircon Website Loaded Successfully! 🌟', 'color: #00d4ff; font-size: 16px; font-weight: bold;');
console.log('%cProfessional Aircon Servicing & Handyman Services', 'color: #b8c5d6; font-size: 12px;');
