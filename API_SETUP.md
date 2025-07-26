# Email API Setup Guide

This project includes two email API routes for sending emails using Gmail SMTP:

## API Routes

### 1. `/api/send-email` - General Email Sending
- **Method**: POST
- **Purpose**: Send custom emails with full control over content
- **Body Parameters**:
  - `to` (required): Recipient email address
  - `subject` (required): Email subject
  - `text` (optional): Plain text content
  - `html` (optional): HTML content
  - `from` (optional): Sender email (defaults to GMAIL_USER)
  - `name` (optional): Sender name

### 2. `/api/contact` - Contact Form Handler
- **Method**: POST
- **Purpose**: Handle contact form submissions with automatic formatting
- **Body Parameters**:
  - `name` (required): Contact person's name
  - `email` (required): Contact person's email
  - `message` (required): Contact message
  - `subject` (optional): Subject line (defaults to "New Contact Form Submission")

## Environment Variables Setup

Create a `.env.local` file in your project root with the following variables:

```env
# Gmail SMTP Configuration
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password
CONTACT_EMAIL=admin@yourdomain.com
```

## Gmail App Password Setup

1. **Enable 2-Step Verification**:
   - Go to your Google Account settings
   - Navigate to Security
   - Enable 2-Step Verification if not already enabled

2. **Generate App Password**:
   - Go to Security > App passwords
   - Select "Mail" as the app
   - Select "Other" as the device
   - Generate the password
   - Copy the 16-character password

3. **Use the App Password**:
   - Use this 16-character password as your `GMAIL_APP_PASSWORD`
   - Do NOT use your regular Gmail password

## Usage Examples

### Contact Form Submission
```javascript
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
    message: 'Hello, I would like to learn more about your services.',
    subject: 'Inquiry about services'
  })
});

const result = await response.json();
```

### General Email Sending
```javascript
const response = await fetch('/api/send-email', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    to: 'recipient@example.com',
    subject: 'Test Email',
    html: '<h1>Hello World</h1><p>This is a test email.</p>',
    text: 'Hello World\nThis is a test email.'
  })
});

const result = await response.json();
```

## Security Notes

- Never commit your `.env.local` file to version control
- Use App Passwords instead of regular Gmail passwords
- Consider implementing rate limiting for production use
- Validate and sanitize all input data before processing

## Testing

You can test the API endpoints using:

1. **GET requests** to verify the endpoints are working:
   - `GET /api/send-email`
   - `GET /api/contact`

2. **POST requests** with proper JSON body as shown in the usage examples above.

## Error Handling

Both endpoints return appropriate HTTP status codes:
- `200`: Success
- `400`: Bad Request (missing or invalid fields)
- `500`: Internal Server Error

Error responses include details about what went wrong. 