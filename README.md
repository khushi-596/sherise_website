# She Can Foundation Website

Welcome to the **She Can Foundation** website repository! This is a modern, responsive, and professionally designed multi-page website built for an NGO dedicated to empowering women through education, vocational training, and mentorship.

##  Project Overview

The She Can Foundation website serves as the primary digital presence for the organization, showcasing its mission, impact, programs, and volunteer opportunities. 

The design has been intentionally crafted to be clean, flat, and professional (light mode), moving away from legacy glassmorphism or gradient-heavy aesthetics to prioritize accessibility, contrast, and a modern corporate/NGO feel.

##  Project Structure

The project is structured as a static website with the following key files and directories:

### Pages
- `index.html`: The home page featuring the organization's mission, impact statistics, and program previews.
- `about.html`: Detailed information about the foundation's history, a timeline of its impact, and team member profiles.
- `programs.html`: Comprehensive breakdown of the initiatives offered, including digital literacy and vocational hubs.
- `volunteer.html`: Information on the benefits of volunteering and a sign-up form for prospective mentors.
- `gallery.html`: A masonry-style impact gallery with category filtering to showcase past events and workshops.
- `contact.html`: Contact information, frequently asked questions (FAQs), and a direct messaging form.

### Assets
- `/css/`: Contains all styling files.
  - `style.css`: The core design system, global variables (flat green/dark palette), and component styles.
  - `animations.css`: Keyframe animations for subtle scroll effects and interactive feedback.
  - `responsive.css`: Media queries ensuring the site looks great on all screen sizes (mobile, tablet, desktop).
- `/js/`: Contains interactive scripts.
  - `counter.js`: Logic for animating the statistics counters.
  - `slider.js`: Logic for image galleries and filtering.
- `/images/`: Contains all the placeholder and visual assets used across the site.

##  Technologies Used

- **HTML5**: Semantic markup for accessible structure.
- **CSS3**: Custom flat design system utilizing CSS Variables (Custom Properties), Flexbox, and CSS Grid.
- **JavaScript (Vanilla)**: For interactive components like mobile navigation, stat counters, form validation, and gallery filtering.
- **AOS (Animate On Scroll)**: For subtle scroll-triggered reveal animations.
- **FontAwesome**: For scalable vector icons.
- **Google Fonts**: Modern typography combinations.

##  How to Run Locally

Since this is a static website, no complex build process or server backend is required to view it.

1. Clone or download this repository.
2. Open the project folder.
3. Simply double-click on `index.html` to open the website in your default web browser.
4. *(Optional)* For the best experience (especially if testing JavaScript modules or local fetching), run a local development server. For example, if you have Python installed, you can run:
   ```bash
   python -m http.server 8000
   ```
   And then navigate to `http://localhost:8000` in your browser.

##  Key Features

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices.
- **Clean UI**: Flat design with high-contrast elements, completely free of heavy gradients or blurs.
- **Interactive Forms**: Client-side validation for the Volunteer and Contact forms.
- **Dynamic Gallery**: Filterable impact gallery to easily sort through different initiative categories.
- **Subtle Animations**: Tasteful entry animations that enhance the user experience without overwhelming the content.
