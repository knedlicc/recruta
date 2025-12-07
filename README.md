# Recruta - Recruiting Agency Landing Page

A beautiful, modern landing page for a recruiting agency built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🏠 **Home Page** - General information, hero section, and contact form
- 💼 **Jobs Page** - Browse available job positions with application modal
- 👤 **Candidates Page** - Information for job seekers with contact form
- 🏢 **Clients Page** - Information for companies with contact form
- 📖 **About Page** - Company story and team
- ❓ **FAQ Page** - Frequently asked questions with accordion
- 📧 **Contact Forms** - Client-side email forms using Web3Forms (no backend required)

## Design

- Smooth animations using Framer Motion
- Bright pastel color scheme (blue-green theme)
- Responsive design for all devices
- Modern, clean UI

## Getting Started

First, install the dependencies:

```bash
npm install
```

### Email Configuration (Required for Contact Forms)

The contact forms use Web3Forms for client-side email sending (no backend required). To set up:

1. Visit [https://web3forms.com](https://web3forms.com)
2. Enter your email address to get a free access key
3. Create a `.env.local` file in the root directory:

```bash
NEXT_PUBLIC_WEB3FORMS_KEY=your_access_key_here
```

Replace `your_access_key_here` with the access key you received from Web3Forms.

4. Restart your development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build for Production

```bash
npm run build
npm start
```

Make sure to set the `NEXT_PUBLIC_WEB3FORMS_KEY` environment variable in your production environment as well.

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Web3Forms** - Client-side email service (no backend required)

