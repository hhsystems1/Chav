# Chavarria Concrete - Professional Website

A beautiful, modern, and fully responsive website for Chavarria Concrete, Colorado's trusted concrete experts.

## Features

- **Modern React Application** - Built with React 19 and Vite for optimal performance
- **Beautiful UI** - Styled with Tailwind CSS with custom animations and gradients
- **Fully Responsive** - Works perfectly on all devices (mobile, tablet, desktop)
- **Interactive Chatbot** - Custom-built chatbot for customer engagement and lead capture
- **Complete Sections**:
  - Home/Hero - Eye-catching hero section with company stats
  - About - Company information and credentials
  - Services - Comprehensive service listings with detailed cards
  - Gallery - Project showcase with category filtering
  - Book Appointment - Full booking form with validation
  - Footer - Complete footer with social links and quick navigation

## Getting Started

### Prerequisites
- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Chav
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Deployment to Netlify

This project is configured for easy deployment to Netlify:

1. Connect your repository to Netlify
2. Netlify will automatically detect the build settings from `netlify.toml`
3. Click "Deploy"

Alternatively, you can deploy manually:
```bash
npm run build
netlify deploy --prod
```

## Customization Guide

### Adding Real Images

Replace the placeholder images in the following locations:

1. **Hero Section** (`src/components/Hero.jsx`):
   - Replace the background gradient with your hero image
   - Recommended: High-quality concrete work image (1920x1080px)

2. **About Section** (`src/components/About.jsx`):
   - Add team photo or equipment photo
   - Recommended: 600x800px

3. **Gallery Section** (`src/components/Gallery.jsx`):
   - Add project photos to the `projects` array
   - Recommended: 800x800px, consistent aspect ratio

### Updating Contact Information

Update the following files with your actual contact details:

- `src/components/Navbar.jsx` - Phone number
- `src/components/BookAppointment.jsx` - Phone, email, hours
- `src/components/Footer.jsx` - All contact info and social links
- `src/components/Chatbot.jsx` - Contact details in bot responses

### Configuring the Booking Form

The booking form in `src/components/BookAppointment.jsx` currently simulates submission.

To connect to a real backend, you can integrate:

- **Netlify Forms**: Add `data-netlify="true"` to the form
- **Formspree**: Add action URL to form
- **EmailJS**: Use EmailJS service for email sending
- **Custom Backend**: Send to your own API endpoint

### Customizing the Chatbot

The chatbot in `src/components/Chatbot.jsx` can be enhanced:

1. Add more quick reply options
2. Integrate with a backend API for real-time responses
3. Connect to email/CRM for lead capture
4. Add file upload for project photos

### Color Scheme

Colors are defined in `tailwind.config.js`:

```javascript
colors: {
  primary: '#1e3a8a',    // Deep blue
  secondary: '#64748b',   // Slate gray
  accent: '#f59e0b',      // Amber
  concrete: '#6b7280',    // Concrete gray
}
```

## Technology Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **Netlify** - Hosting platform

## Project Structure

```
Chav/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Gallery.jsx
│   │   ├── BookAppointment.jsx
│   │   ├── Footer.jsx
│   │   └── Chatbot.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── netlify.toml
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

See LICENSE file for details.

## Support

For questions or issues, please contact the development team.
