# Email Setup Guide

## Quick Setup Steps

1. **Get your Web3Forms Access Key:**
   - Visit https://web3forms.com
   - Enter your email address
   - Copy the access key you receive

2. **Add to .env.local:**
   ```bash
   NEXT_PUBLIC_WEB3FORMS_KEY=your_actual_access_key_here
   ```
   ⚠️ **IMPORTANT:** Do NOT include quotes around the key value

3. **Restart the dev server:**
   ```bash
   # Stop the current server (Ctrl+C)
   # Then restart:
   npm run dev
   ```

4. **Test the form:**
   - Fill out a contact form
   - Check the browser console (F12) for any errors
   - Check your email inbox (and spam folder)

## Troubleshooting

### Emails not arriving?

1. **Check browser console (F12):**
   - Look for any error messages
   - Check the Network tab to see the API response

2. **Verify your access key:**
   - Make sure there are no extra spaces in `.env.local`
   - The key should be on one line: `NEXT_PUBLIC_WEB3FORMS_KEY=abc123...`

3. **Restart the server:**
   - Environment variables are only loaded when the server starts
   - After adding/changing `.env.local`, you MUST restart

4. **Check Web3Forms dashboard:**
   - Visit https://web3forms.com and check your submissions
   - Make sure your email is verified

5. **Check spam folder:**
   - Sometimes emails go to spam initially

### Common Issues

- **"Please configure your Web3Forms access key"** → The key is missing or not loaded. Restart the server.
- **Network error** → Check your internet connection
- **Form shows success but no email** → Check spam folder and Web3Forms dashboard

