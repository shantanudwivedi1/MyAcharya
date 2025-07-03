# EmailJS Setup Guide for MyAcharya Contact Form

## Overview
Your contact form is now configured to send emails to `myacharya3@gmail.com`. Currently, it uses a fallback method that opens the user's email client. To receive emails directly without user intervention, you can set up EmailJS.

## Current Email Configuration
- **Your Email**: `myacharya3@gmail.com`

### Contact Form Fields:
  - Student Name
  - Parent Name
  - Email Address
  - Phone Number
  - Grade/Class
  - Subject of Interest
  - City
  - Preferred Time Slot
  - Additional Message

### Tutor Application Form Fields:
  - Full Name
  - Email Address
  - Phone Number
  - City
  - Subject Expertise
  - Teaching Experience
  - Educational Qualification
  - Preferred Grade Levels (checkboxes)
  - Preferred Time Slots (checkboxes)
  - Why join MyAcharya message

## Option 1: Keep Current Setup (Mailto Fallback)
✅ **Already Working**: The form currently opens the user's default email client with all the form data pre-filled. The user just needs to click "Send".

## Option 2: Set Up EmailJS (Direct Email Delivery)
To receive emails directly without user email client:

### Step 1: Create EmailJS Account
1. Go to [emailjs.com](https://www.emailjs.com/)
2. Sign up with your `myacharya3@gmail.com` account
3. Verify your email

### Step 2: Set Up Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" and connect your `myacharya3@gmail.com` account
4. Note down your **Service ID**

### Step 3: Create Email Templates
1. Go to "Email Templates"
2. Create **TWO** templates:

**Template 1: Contact Form**
```
Subject: New Contact Form Submission - MyAcharya

From: {{from_name}} <{{from_email}}>

New Contact Form Submission:

Student Name: {{from_name}}
Parent Name: {{parent_name}}
Email: {{from_email}}
Phone: {{phone}}
Grade/Class: {{grade}}
Subject: {{subject}}
City: {{city}}
Preferred Time: {{time_slot}}
Message: {{message}}

Submitted on: {{submission_date}}
```

**Template 2: Tutor Application**
```
Subject: New Tutor Application - MyAcharya

From: {{from_name}} <{{from_email}}>

New Tutor Application:

--- TUTOR DETAILS ---
Full Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
City: {{city}}

--- TEACHING INFORMATION ---
Subject Expertise: {{subject}}
Teaching Experience: {{experience}}
Educational Qualification: {{qualification}}
Preferred Grade Levels: {{grades}}
Preferred Time Slots: {{availability}}

--- MESSAGE ---
{{message}}

Application submitted on: {{submission_date}}
```

3. Note down both **Template IDs**

### Step 4: Get Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key**

### Step 5: Update Your Website
Add this to the `<head>` section of your `contact.html`:

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
<script type="text/javascript">
    (function(){
        emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual public key
        window.emailjsPublicKey = true;
    })();
</script>
```

Then update the JavaScript file with your actual Service ID and Template IDs:
- Replace `YOUR_SERVICE_ID` with your actual service ID (used for both forms)
- Replace `YOUR_TEMPLATE_ID` with your contact form template ID
- Replace `YOUR_TUTOR_TEMPLATE_ID` with your tutor application template ID

## Current Form Behavior
- ✅ Validates all required fields
- ✅ Checks email format
- ✅ Checks phone number format
- ✅ Collects all form data
- ✅ Opens email client with pre-filled message
- ✅ Shows success/error notifications
- ✅ Resets form after submission

## Contact Information Updated
All contact sections now use: `myacharya3@gmail.com`
- Main contact details section
- Quick contact section  
- Form submissions

The phone number remains: `+91 7078647609`
WhatsApp links use: `https://wa.me/917078647609`
