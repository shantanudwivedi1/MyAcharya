// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.getElementById('contactForm');
const tutorForm = document.getElementById('tutorApplicationForm');

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Handle navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Only prevent default for internal hash links, not page links
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 100; // Account for fixed header
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
        // For page links (like about.html, services.html), let the browser handle normally
    });
});

// Header background on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add fade-in class to elements and observe them
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.hero-content, .about-content, .service-card, .feature-card, .contact-container'
    );
    
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Contact Form Handling
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = {
        name: formData.get('name'),
        parent_name: formData.get('parent_name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        grade: formData.get('grade'),
        subject: formData.get('subject'),
        city: formData.get('city'),
        time_slot: formData.get('time_slot'),
        message: formData.get('message')
    };
    
    // Basic validation
    if (!data.name || !data.email || !data.phone || !data.grade) {
        showNotification('Please fill in all required fields.', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showNotification('Please enter a valid email address.', 'error');
        return;
    }
    
    // Phone validation (basic)
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
    if (!phoneRegex.test(data.phone)) {
        showNotification('Please enter a valid phone number.', 'error');
        return;
    }
    
    // Send form data to email
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Create email body
    const emailBody = `
New Contact Form Submission from MyAcharya Website:

- Student Name: ${data.name}
- Parent Name: ${data.parent_name || 'Not provided'}
- Email: ${data.email}
- Phone: ${data.phone}
- Grade/Class: ${data.grade}
- Subject: ${data.subject || 'Not specified'}
- City: ${data.city || 'Not provided'}
- Preferred Time: ${data.time_slot || 'Not specified'}
- Message: ${data.message || 'No additional message'}

Submitted on: ${new Date().toLocaleString()}
    `;
    
    // Use EmailJS or mailto fallback
    try {
        // Try to send via EmailJS if configured, otherwise use mailto
        if (typeof emailjs !== 'undefined' && window.emailjsPublicKey) {
            emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
                to_email: 'myacharya3@gmail.com',
                from_name: data.name,
                from_email: data.email,
                phone: data.phone,
                grade: data.grade,
                subject: data.subject,
                city: data.city,
                time_slot: data.time_slot,
                message: data.message,
                parent_name: data.parent_name
            }).then(() => {
                showNotification('Thank you! Your consultation request has been submitted. We will contact you soon.', 'success');
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }).catch(() => {
                throw new Error('EmailJS failed');
            });
        } else {
            throw new Error('EmailJS not configured');
        }
    } catch (error) {
        // Fallback to mailto link
        const subject = encodeURIComponent('New Contact Form Submission - MyAcharya');
        const body = encodeURIComponent(emailBody);
        const mailtoLink = `mailto:myacharya3@gmail.com?subject=${subject}&body=${body}`;
        
        window.open(mailtoLink, '_blank');
        
        showNotification('Your default email client will open. Please send the email to complete your submission.', 'info');
        contactForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
    });
}

// Tutor Application Form Handling
function debug(message) {
    console.log('TUTOR FORM DEBUG:', message);
    const debugDiv = document.getElementById('debug');
    if (debugDiv) {
        debugDiv.style.display = 'block';
        debugDiv.innerHTML += new Date().toLocaleTimeString() + ': ' + message + '<br>';
        debugDiv.scrollTop = debugDiv.scrollHeight;
    }
}

debug('Script loaded and looking for tutor form...');

if (tutorForm) {
    debug('Tutor form found successfully!');
    tutorForm.addEventListener('submit', (e) => {
        e.preventDefault();
        debug('Form submission started');
        
        // Get form data
        const formData = new FormData(tutorForm);
        debug('FormData created successfully');
        
        // Get checkbox values
        const grades = Array.from(tutorForm.querySelectorAll('input[name="grades"]:checked')).map(cb => cb.value);
        const availability = Array.from(tutorForm.querySelectorAll('input[name="availability"]:checked')).map(cb => cb.value);
        debug('Checkboxes processed - grades: ' + grades.length + ', availability: ' + availability.length);
        
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            city: formData.get('city'),
            subject: formData.get('subject'),
            experience: formData.get('experience'),
            qualification: formData.get('qualification'),
            grades: grades.join(', '),
            availability: availability.join(', '),
            message: formData.get('message')
        };
        
        debug('Form data collected: ' + JSON.stringify(data, null, 2));
        
        // Basic validation
        debug('Starting validation...');
        if (!data.name || !data.email || !data.phone || !data.subject || !data.experience || !data.qualification) {
            debug('Validation failed - missing required fields');
            showNotification('Please fill in all required fields.', 'error');
            return;
        }
        debug('Required fields validation passed');
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            debug('Email validation failed: ' + data.email);
            showNotification('Please enter a valid email address.', 'error');
            return;
        }
        debug('Email validation passed');
        
        // Phone validation (basic)
        const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
        if (!phoneRegex.test(data.phone)) {
            debug('Phone validation failed: ' + data.phone);
            showNotification('Please enter a valid phone number.', 'error');
            return;
        }
        debug('Phone validation passed');
        debug('All validation passed - proceeding with form submission');
        
        // Send form data to email
        const submitBtn = tutorForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Create email body
        const emailBody = `
New Tutor Application from MyAcharya Website:

--- TUTOR DETAILS ---
- Full Name: ${data.name}
- Email: ${data.email}
- Phone: ${data.phone}
- City: ${data.city}

--- TEACHING INFORMATION ---
- Subject Expertise: ${data.subject}
- Teaching Experience: ${data.experience}
- Educational Qualification: ${data.qualification}
- Preferred Grade Levels: ${data.grades || 'Not specified'}
- Preferred Time Slots: ${data.availability || 'Not specified'}

--- MESSAGE ---
${data.message || 'No additional message provided'}

Application submitted on: ${new Date().toLocaleString()}
        `;
        
        // Use mailto link to open email client
        debug('Creating email content...');
        const subject = encodeURIComponent('New Tutor Application - MyAcharya');
        const body = encodeURIComponent(emailBody);
        const mailtoLink = `mailto:myacharya3@gmail.com?subject=${subject}&body=${body}`;
        
        debug('Mailto link created (length: ' + mailtoLink.length + ')');
        debug('Attempting to open email client...');
        
        // Try to open email client
        try {
            // Use window.location.href for better compatibility
            window.location.href = mailtoLink;
            debug('window.location.href called successfully');
            
            // Show success message
            showNotification('Your email client should open now. Please send the email to complete your application.', 'success');
            
            // Reset form
            tutorForm.reset();
            
        } catch (error) {
            console.log('Mailto failed:', error);
            
            // Fallback: Show email details for manual copying
            const emailDetails = `Please send an email manually to myacharya3@gmail.com with the following details:\n\nSubject: New Tutor Application - MyAcharya\n\n${emailBody}`;
            
            // Try to copy to clipboard
            if (navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(emailDetails).then(() => {
                    showNotification('Email details copied to clipboard. Please paste into your email client and send to myacharya3@gmail.com', 'info');
                }).catch(() => {
                    alert(emailDetails);
                });
            } else {
                // Show in alert as final fallback
                alert(emailDetails);
            }
            
            tutorForm.reset();
        }
        
        // Reset button state
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    });
} else {
    debug('ERROR: Tutor form not found! Available forms: ' + 
          Array.from(document.querySelectorAll('form')).map(f => f.id || 'unnamed').join(', '));
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        z-index: 1001;
        background: ${type === 'success' ? '#48bb78' : type === 'error' ? '#f56565' : '#4299e1'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 400px;
        word-wrap: break-word;
    `;
    
    const notificationContent = notification.querySelector('.notification-content');
    notificationContent.style.cssText = `
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    `;
    
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    `;
    
    // Add to document
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    const autoRemove = setTimeout(() => {
        removeNotification(notification);
    }, 5000);
    
    // Manual close
    closeBtn.addEventListener('click', () => {
        clearTimeout(autoRemove);
        removeNotification(notification);
    });
    
    function removeNotification(notificationEl) {
        notificationEl.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notificationEl.parentNode) {
                notificationEl.remove();
            }
        }, 300);
    }
}

// Hero buttons functionality
document.addEventListener('DOMContentLoaded', () => {
    const primaryBtn = document.querySelector('.hero .btn-primary');
    const secondaryBtn = document.querySelector('.hero .btn-secondary');
    
    if (primaryBtn) {
        primaryBtn.addEventListener('click', () => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                const offsetTop = contactSection.offsetTop - 100;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
    
    if (secondaryBtn) {
        secondaryBtn.addEventListener('click', () => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
                const offsetTop = aboutSection.offsetTop - 100;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add active navigation styles
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #2b6cb0 !important;
    }
    
    .nav-link.active::after {
        width: 100% !important;
    }
    
    @media (max-width: 768px) {
        .nav-menu {
            position: fixed;
            left: -100%;
            top: 70px;
            flex-direction: column;
            background-color: rgba(255, 255, 255, 0.98);
            width: 100%;
            text-align: center;
            transition: 0.3s;
            box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
            backdrop-filter: blur(10px);
            padding: 2rem 0;
        }
        
        .nav-menu.active {
            left: 0;
        }
        
        .nav-menu li {
            margin: 1rem 0;
        }
        
        .hamburger.active span:nth-child(1) {
            transform: rotate(-45deg) translate(-5px, 6px);
        }
        
        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }
        
        .hamburger.active span:nth-child(3) {
            transform: rotate(45deg) translate(-5px, -6px);
        }
    }
`;
document.head.appendChild(style);

// Statistics counter animation
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace(/\D/g, ''));
        const suffix = counter.textContent.replace(/[0-9]/g, '');
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = target + suffix;
                clearInterval(timer);
            } else {
                counter.textContent = Math.ceil(current) + suffix;
            }
        }, 40);
    });
}

// Trigger counter animation when stats section is visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    const statsSection = document.querySelector('.about-stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
});

// Lazy loading for better performance
document.addEventListener('DOMContentLoaded', () => {
    const lazyElements = document.querySelectorAll('.service-card, .feature-card');
    
    const lazyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                lazyObserver.unobserve(entry.target);
            }
        });
    });
    
    lazyElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        lazyObserver.observe(el);
    });
});

console.log('Saarthik website loaded successfully! 🎓');
