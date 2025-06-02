# EmailJS Setup Guide

## Overview
This project uses EmailJS to handle contact form submissions. Follow these steps to complete the setup.

## Prerequisites
- EmailJS account (free tier available)
- Service ID: `gensol`
- Template ID: `template_h4ujx2t`

## Setup Steps

### 1. Install Dependencies
```bash
npm install @emailjs/browser
```

### 2. EmailJS Dashboard Setup

1. **Create EmailJS Account**
   - Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
   - Sign up or log in

2. **Get Your Public Key**
   - Navigate to Account > General
   - Copy your Public Key

3. **Configure Email Service**
   - Go to Email Services
   - Add your email service (Gmail, Outlook, etc.)
   - Service ID should be: `gensol`

4. **Setup Email Template**
   - Go to Email Templates
   - Create template with ID: `template_h4ujx2t`
   - Use the template content provided below

### 3. Environment Configuration

1. **Create .env.local file**
   ```bash
   cp .env.example .env.local
   ```

2. **Add your EmailJS Public Key**
   ```env
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_public_key_here
   ```

### 4. Email Template Content

Use this template in your EmailJS dashboard:

**Subject:** New Contact Form Submission from {{name}}

**HTML Content:**
```html
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size: 16px; background-color: #ffffff; padding: 24px; color: #333333">
  <div style="max-width: 600px; margin: 0 auto; border: 1px solid #eeeeee; border-radius: 8px; padding: 32px; background-color: #fffaf5;">
    <div style="text-align: center; margin-bottom: 24px;">
      <a href="{{website_link}}" target="_blank" style="text-decoration: none;">
        <img src="cid:logo.png" alt="{{company_name}} Logo" style="height: 40px;" />
      </a>
    </div>

    <h2 style="font-size: 22px; font-weight: 600; color: #fc0038; margin-bottom: 16px;">New Contact Form Submission</h2>

    <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 24px;">
      <h3 style="margin: 0 0 16px; color: #333;">Contact Information:</h3>
      <p style="margin: 8px 0;"><strong>Name:</strong> {{name}}</p>
      <p style="margin: 8px 0;"><strong>Email:</strong> {{email}}</p>
      <p style="margin: 8px 0;"><strong>Phone:</strong> {{phone}}</p>
      <p style="margin: 8px 0;"><strong>Service Interest:</strong> {{service}}</p>
    </div>

    <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 24px;">
      <h3 style="margin: 0 0 16px; color: #333;">Message:</h3>
      <p style="margin: 0; white-space: pre-wrap;">{{message}}</p>
    </div>

    <div style="text-align: center; margin-bottom: 32px;">
      <a
        href="mailto:{{email}}"
        target="_blank"
        style="
          background-color: #fc0038;
          color: #ffffff;
          padding: 12px 24px;
          text-decoration: none;
          border-radius: 6px;
          font-weight: 600;
          display: inline-block;
        "
      >
        Reply to {{name}}
      </a>
    </div>

    <p style="margin: 32px 0 0; text-align: center; color: #666;">
      This message was sent from the {{company_name}} contact form.<br />
      <a href="{{website_link}}" style="color: #fc0038; text-decoration: none;">{{website_link}}</a>
    </p>
  </div>
</div>
```

### 5. Template Variables

Make sure your EmailJS template includes these variables:
- `{{name}}` - Contact person's name
- `{{email}}` - Contact person's email
- `{{phone}}` - Contact person's phone
- `{{service}}` - Selected service
- `{{message}}` - Contact message
- `{{company_name}}` - Your company name (GENSOL)
- `{{company_email}}` - Your company email
- `{{website_link}}` - Your website URL

### 6. Testing

1. **Test the form locally**
   ```bash
   npm run dev
   ```

2. **Navigate to the contact section**
   - Fill out the form
   - Submit and check for success message
   - Verify email delivery

### 7. Troubleshooting

**Common Issues:**

1. **"Public Key not found" error**
   - Verify your public key in .env.local
   - Check EmailJS dashboard for correct key

2. **Template not found**
   - Ensure template ID is exactly: `template_h4ujx2t`
   - Template must be published in EmailJS dashboard

3. **Service not found**
   - Verify service ID is: `gensol`
   - Check email service configuration

4. **CORS errors**
   - Add your domain to EmailJS allowed origins
   - For localhost, add: `http://localhost:3000`

### 8. Production Deployment

1. **Add environment variable to hosting platform**
   - Vercel: Add to Environment Variables
   - Netlify: Add to Site Settings > Environment Variables
   - Other platforms: Follow their environment variable setup

2. **Update allowed origins in EmailJS**
   - Add your production domain
   - Remove localhost if not needed

## Support

For EmailJS specific issues, refer to:
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS Support](https://www.emailjs.com/support/)

For project-specific issues, check the component implementation in:
- `components/call-to-action.tsx`
- `lib/emailjs.ts` 