# Hanif Kia - Professional Portfolio

A modern, responsive portfolio website showcasing expertise in Data Science, Machine Learning, and AI.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern Aesthetics**: Clean, professional design with smooth animations
- **Interactive Elements**: Modals for detailed project and experience information
- **Comprehensive Sections**:
  - Biography with key statistics
  - Education timeline
  - Professional experience with detailed descriptions
  - Research projects
  - Teaching experience
  - Publications
  - Contact information

## Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Fonts**: Playfair Display (headers), Work Sans (body)
- **Hosting**: GitHub Pages

## Quick Start

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git
cd YOUR_USERNAME.github.io
```

2. Open `index.html` in your browser:
```bash
# On macOS
open index.html

# On Linux
xdg-open index.html

# On Windows
start index.html
```

Or use a local server:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server
```

Then navigate to `http://localhost:8000`

### Deploying to GitHub Pages

1. Create a new repository named `YOUR_USERNAME.github.io` on GitHub

2. Initialize git in your local directory:
```bash
git init
git add .
git commit -m "Initial commit: Professional portfolio"
```

3. Add remote and push:
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git
git branch -M main
git push -u origin main
```

4. Enable GitHub Pages:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "main" branch as source
   - Click "Save"

5. Your site will be live at `https://YOUR_USERNAME.github.io`

## Customization Guide

### Updating Personal Information

#### 1. Basic Info (index.html)
Update your name, title, and contact information in the hero section:
```html
<h1 class="hero-title">
    <span class="title-line">Your Name</span>
</h1>
<p class="hero-subtitle">Your Title • Your Specialty • Your Role</p>
```

#### 2. Contact Details
Update email, phone, and location in the contact section:
```html
<a href="mailto:your.email@example.com">your.email@example.com</a>
<a href="tel:+1234567890">(+123) 456 7890</a>
<p>Your City, Your Country</p>
```

#### 3. Social Links
Update LinkedIn, Google Scholar, and GitHub URLs:
```html
<a href="https://www.linkedin.com/in/yourprofile" target="_blank">LinkedIn</a>
<a href="https://scholar.google.com/yourprofile" target="_blank">Google Scholar</a>
<a href="https://github.com/yourusername" target="_blank">GitHub</a>
```

### Adding Project Images

1. Create an `images` folder in your repository:
```bash
mkdir images
```

2. Add your project images to this folder

3. Update image references in the HTML:
```html
<div class="project-image-placeholder" style="background-image: url('images/your-project.jpg');">
```

Or for the showcase projects:
```html
<div class="project-showcase-image" style="background-image: url('images/your-project.jpg');">
```

### Customizing Colors

Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #0A66C2;  /* Your primary brand color */
    --secondary-color: #F59E0B; /* Your secondary color */
    --accent-color: #10B981;    /* Your accent color */
}
```

### Adding New Sections

To add a new section, follow this template:
```html
<section id="your-section" class="your-section section-padding">
    <div class="container">
        <h2 class="section-title">Section Title</h2>
        <!-- Your content here -->
    </div>
</section>
```

Don't forget to add it to the navigation:
```html
<li><a href="#your-section" class="nav-link">Section Name</a></li>
```

## File Structure

```
.
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
├── README.md           # This file
└── images/            # (Create this) Project images
    ├── project1.jpg
    ├── project2.jpg
    └── ...
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Optimization

- All fonts are loaded from Google Fonts CDN
- CSS and JS are minified for production (recommended)
- Images should be optimized (use WebP format when possible)
- Lazy loading implemented for better performance

## Accessibility

- Semantic HTML5 elements
- ARIA labels where appropriate
- Keyboard navigation support
- Sufficient color contrast ratios

## SEO Optimization

Add these meta tags to the `<head>` section for better SEO:

```html
<meta name="description" content="Your professional description">
<meta name="keywords" content="Data Science, Machine Learning, AI, Your Specialties">
<meta name="author" content="Your Name">

<!-- Open Graph / Social Media -->
<meta property="og:title" content="Your Name - Data Scientist & ML Engineer">
<meta property="og:description" content="Your professional description">
<meta property="og:image" content="https://yourusername.github.io/images/og-image.jpg">
<meta property="og:url" content="https://yourusername.github.io">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Your Name - Professional Portfolio">
<meta name="twitter:description" content="Your professional description">
<meta name="twitter:image" content="https://yourusername.github.io/images/og-image.jpg">
```

## Adding Google Analytics

To track visitors, add Google Analytics before the closing `</body>` tag:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_GA_ID');
</script>
```

## Troubleshooting

### Site not loading on GitHub Pages
- Check that the repository is named correctly: `USERNAME.github.io`
- Verify GitHub Pages is enabled in repository settings
- Wait a few minutes after pushing (deployment takes time)

### Images not showing
- Check image paths are correct
- Ensure images are committed to the repository
- Use relative paths, not absolute paths

### Fonts not loading
- Check internet connection (fonts load from Google Fonts CDN)
- Verify font URLs in the `<head>` section

## License

This portfolio template is open source and available under the MIT License.

## Contact

For questions or suggestions about this portfolio:
- Email: kia.hanif@email.kntu.ac.ir
- LinkedIn: [Your LinkedIn](https://www.linkedin.com/in/hanif-kia)

---

**Note**: Remember to replace all placeholder content with your actual information before deploying!
