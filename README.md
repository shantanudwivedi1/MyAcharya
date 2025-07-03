# MyAcharya - Premium Home Tuition Website

🎓 **Personal Mentorship - Traditional Wisdom, Modern Approach**

A modern, responsive website for MyAcharya's premium home tuition services, founded by Shantanu Dwivedi. Built with HTML, CSS, and JavaScript to provide meaningful, personalized education.

## 🌟 About MyAcharya

MyAcharya is a home tuition platform that brings the soul of ancient mentorship into modern education. Founded by Shantanu Dwivedi, it focuses on providing personal mentorship where education feels personal, not pressured.

### Core Philosophy
- **One-on-One Learning**: Because every child is different
- **Safe, Home-Based Education**: Where students are at ease
- **Teachers Who Care**: Like the Acharyas of our tradition

## 🌟 Website Features

- **Modern Design**: Clean, elegant UI with saffron and teal color scheme
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Multi-page Structure**: Comprehensive navigation across different sections
- **Interactive Elements**: Smooth animations, hover effects, and form validation
- **Email Integration**: Contact forms with EmailJS integration and mailto fallback

## 📁 Project Structure

```
myacharya-website/
├── index.html              # Home page with hero section and overview
├── about.html              # About Us - founder story, values, philosophy
├── services.html           # Services - detailed service offerings
├── students-parents.html   # For Students & Parents - benefits and process
├── tutors.html            # Join as a Tutor - application form
├── contact.html           # Contact Us - trial class booking form
├── css/
│   └── styles.css         # Main stylesheet with responsive design
├── js/
│   └── script.js          # Interactive functionality and animations
├── EMAILJS_SETUP.md       # Email integration setup guide
└── README.md             # Project documentation
```

## 🎨 Design System

### Color Palette
- **Primary Saffron**: `#FF9933` - Main brand color
- **Accent Teal**: `#008080` - Secondary accent color
- **Pure White**: `#FFFFFF` - Background and text
- **Dark Gray**: `#2d3748` - Primary text color
- **Light Gray**: `#f7fafc` - Section backgrounds
- **Medium Gray**: `#718096` - Secondary text

### Typography
- **Primary Font**: Poppins (Google Fonts)
- **Fallback Font**: Inter, system fonts

### Components
- **Rounded corners** (8px-25px radius)
- **Soft shadows** with saffron tint
- **Gradient backgrounds** (saffron to teal)
- **Smooth hover animations**
- **Custom styled forms** and checkboxes

## 📱 Pages Overview

### 1. Home (`index.html`)
- Hero section with tagline "Education That Feels Personal, Not Pressured"
- Key features overview
- Services summary
- Statistics showcase (500+ students, 95% success rate)
- Process explanation (4-step journey)
- Customer testimonials
- Call-to-action sections

### 2. About Us (`about.html`)
- Founder's story (Shantanu Dwivedi)
- Journey from SS Tutors to MyAcharya
- Company mission and vision
- Core values (Compassion, Excellence, Trust, Innovation)
- Teaching philosophy
- Future goals and expansion plans

### 3. Services (`services.html`)
- **Personal Home Tuition**: One-on-one sessions at home
- **1-on-1 Mentorship**: Academic and personal guidance
- **Progress Tracking**: Regular assessments and reports
- Subject areas covered (Math, Science, Languages, etc.)
- Grade levels served (Class 1-12, Competitive Exams)

### 4. For Students & Parents (`students-parents.html`)
- How MyAcharya works (4-step process)
- Benefits for students (personalized attention, stress-free learning)
- Benefits for parents (visibility, safety, convenience)
- Learning methodology
- Comprehensive FAQ section

### 5. Join as a Tutor (`tutors.html`)
- Benefits of joining MyAcharya
- Requirements and qualifications
- Detailed application form with fields:
  - Personal information (Name, Email, Phone, City)
  - Subject expertise and teaching experience
  - Educational qualification
  - Preferred grade levels and time slots (checkboxes)
  - Motivation message
- Application process overview (4 steps)

### 6. Contact Us (`contact.html`)
- Comprehensive contact form for trial class booking
- Contact information and service areas
- Quick contact options (Phone, WhatsApp, Email)
- FAQ section
- Operating hours and response times

## 🛠️ Technical Features

### Responsive Design
- Mobile-first approach
- Flexbox and CSS Grid layouts
- Breakpoints: 768px (tablet), 480px (mobile)
- Hamburger menu for mobile navigation

### Interactive Elements
- Smooth scrolling navigation
- Form validation with custom notifications
- Hover effects and transitions
- Loading animations
- Intersection Observer for fade-in animations

### Forms & Email Integration
- Two main forms: Contact form and Tutor application form
- Custom styled inputs and selects
- Hidden default checkboxes with custom styling
- Real-time validation
- EmailJS integration for direct email delivery
- Mailto fallback for reliability
- Success/error notifications
- Mobile-optimized layouts

### Accessibility
- Semantic HTML structure
- Proper heading hierarchy
- Keyboard navigation support
- High contrast ratios
- Form labels and validation

## 🚀 Getting Started

1. **Open the website**: Double-click `index.html` or open it in any web browser
2. **Local server** (recommended): Use a local server for best experience
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```
3. **Navigate**: Use the top navigation to explore different pages

## 📧 Email Configuration

The website uses the following email setup:
- **Primary Email**: `myacharya3@gmail.com`
- **Phone**: `+91 7078647609`
- **WhatsApp**: `https://wa.me/917078647609`

### Email Integration Options:
1. **Current Setup**: Uses mailto fallback (opens user's email client)
2. **EmailJS Integration**: For direct email delivery (see `EMAILJS_SETUP.md`)

## 📋 Customization Guide

### Contact Information
Update the following in all HTML files:
- Phone numbers: `+91 7078647609`
- Email: `myacharya3@gmail.com`
- Service areas: Delhi NCR, Aligarh, Hathras
- Social media links (Instagram, LinkedIn, WhatsApp)

### Content Updates
- **Statistics**: Update numbers in the stats sections
- **Testimonials**: Replace with real customer feedback
- **Service Areas**: Modify location information
- **Pricing**: Update fee information in consultation

### Colors
Update the CSS variables in `css/styles.css`:
```css
:root {
    --primary-saffron: #FF9933;
    --accent-teal: #008080;
    --primary-white: #FFFFFF;
    /* ... other colors */
}
```

## 🔧 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile Browsers**: iOS Safari, Chrome Mobile, Samsung Internet
- **Features Used**: CSS Grid, Flexbox, CSS Variables, ES6 JavaScript

## 📞 Contact Information

- **Phone**: +91 7078647609
- **Email**: myacharya3@gmail.com
- **Service Areas**: Delhi NCR (Gurgaon, Noida, Faridabad, Ghaziabad), Aligarh, Hathras
- **Hours**: Monday - Saturday, 9:00 AM - 8:00 PM

## 📄 License

© 2024 MyAcharya. All rights reserved. Premium Home Tuition Services.

---

**Built with ❤️ for meaningful education by Shantanu Dwivedi**

*"Education should feel personal, not pressured."*
