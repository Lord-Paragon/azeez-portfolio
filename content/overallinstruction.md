# Overall Portfolio Website — Global Design, Architecture & Implementation Instructions

## 1. Overall Vision

Build a premium, modern, responsive personal portfolio website for **Azeez Olawale — Data Scientist | Supply Chain Analytics | Industrial Engineer**.

The website should communicate professionalism, technical competence, personality, curiosity, and credibility.

I want a website that feels thoughtfully designed by someone who understands modern digital experiences. It must not look like a generic portfolio template, an overly decorated developer website, or a collection of disconnected pages.

The design should be:

- Clean, minimal, and sophisticated.
- Visually engaging without being overly colourful.
- Easy to navigate and comfortable to read.
- Responsive across desktop, tablet, and mobile.
- Interactive, with meaningful animations and functional components.
- Consistent across all six pages.

Use your design judgement to make the best decisions. I am deliberately giving you freedom to choose the visual identity, typography, colours, and layout.

However, prioritise usability, readability, and professional presentation over visual experimentation.

## 2. Website Navigation and Page Order

Use this navigation order:

1. Home
2. Projects
3. Experience
4. Certifications
5. Hobbies
6. Contact

This order creates a natural visitor journey:

- Home introduces who I am.
- Projects demonstrate what I can do.
- Experience establishes my professional background.
- Certifications demonstrate continuous learning.
- Hobbies reveal the person behind the professional profile.
- Contact provides the final opportunity to connect.

The navigation should be consistent across every page.

### Navigation requirements

- Use a clean, modern navigation bar.
- Make the logo/name link back to Home.
- Clearly indicate the active page.
- Include smooth transitions between pages.
- On desktop, use a well-spaced horizontal navigation.
- On mobile, implement an accessible hamburger menu or similarly effective mobile navigation.
- The mobile menu must open and close properly and close after navigation.
- Keep the navigation accessible without occupying too much screen space.

Consider a sticky navigation bar with a subtle background treatment when scrolling, provided it does not obstruct content.

## 3. Visual Identity and Colour System

Choose a sophisticated, restrained colour palette.

I do not want excessive colours, loud gradients, or distracting combinations.

### Recommended design direction

Use a premium neutral foundation:

**Light mode**
- Background: warm off-white or very light neutral.
- Primary text: deep charcoal.
- Secondary text: muted grey.
- Cards: white or a slightly differentiated neutral.
- Borders: soft grey.
- Accent: restrained teal, muted blue, or another sophisticated single accent colour.

**Dark mode**
- Background: deep charcoal or dark slate, not absolute black everywhere.
- Primary text: soft white.
- Secondary text: muted light grey.
- Cards: slightly lighter charcoal/slate.
- Borders: subtle dark-neutral contrast.
- Accent: the same restrained accent colour, adjusted for accessibility and contrast.

The final palette should be selected by the agent based on visual harmony.

### Colour principles

- Use one primary accent colour consistently.
- Use neutral shades for most of the interface.
- Avoid assigning a different colour to every section.
- Avoid excessive gradients, neon colours, and glowing effects.
- Use colour to establish hierarchy and communicate interaction, not as decoration.
- Maintain WCAG-friendly contrast wherever practical.

## 4. Light Mode and Dark Mode

Implement a fully functional theme switcher.

This is a core website feature, not an optional decorative button.

The switcher should be visible in the main navigation, preferably using a recognisable sun/moon icon.

Requirements:

- Clicking the switcher toggles between light and dark themes.
- All six pages must respond to the selected theme.
- Cards, backgrounds, typography, borders, buttons, navigation, modals, and other components must adapt appropriately.
- Avoid elements that remain unreadable or retain the wrong theme.
- Use a smooth, subtle transition between themes.
- Persist the user's selected preference across page navigation and subsequent visits.
- On the first visit, respect the device's preferred colour scheme unless a saved user preference exists.
- Ensure the theme is applied early enough to avoid a visible flash of the wrong theme during page loading.
- Provide accessible labels such as "Switch to dark mode" and "Switch to light mode".
- Do not rely on colour alone to communicate information.

Use a central theme system with reusable design tokens rather than styling individual pages independently.

## 5. Typography and Layout

Typography and spacing will determine much of the website's quality.

Use a professional font combination with excellent readability.

Suggested direction:
- A distinctive but restrained heading typeface.
- A highly readable sans-serif body typeface.
- Consistent font weights and heading hierarchy.

Avoid excessive font sizes, unnecessary uppercase text, and long blocks of tightly packed writing.

### Layout principles

- Use a consistent maximum content width.
- Maintain generous but controlled whitespace.
- Align page sections and components carefully.
- Use consistent spacing scales.
- Avoid unnecessarily wide paragraphs.
- Use responsive grids where appropriate.
- Maintain visual balance between text and images.
- Ensure headings, descriptions, cards, and buttons follow a consistent hierarchy.

Do not make every page look identical. Preserve a shared visual identity while allowing each page to have a layout appropriate to its content.

## 6. Website-Wide Interaction and Animation

The website should feel alive, but never distracting.

Use tasteful animations such as:

- Smooth page transitions where supported.
- Subtle hero-section entrance animations.
- Scroll-triggered section reveals.
- Gentle card hover effects.
- Smooth button interactions.
- Image hover transitions.
- Animated mobile navigation.
- Functional modal and lightbox transitions.
- Subtle theme-switching transitions.

Animations should improve the experience rather than delay access to content.

Respect `prefers-reduced-motion` and ensure the website remains fully usable when animations are disabled.

Avoid excessive parallax, constant floating elements, spinning decorations, and unnecessary motion.

## 7. Responsive Design and Accessibility

Treat mobile responsiveness as a core requirement, not an afterthought.

Test the website across:

- Large desktop screens.
- Standard laptop screens.
- Tablets.
- Small mobile devices.

Ensure:

- No horizontal overflow.
- Images scale appropriately.
- Text remains readable.
- Cards adapt to available width.
- Navigation works on touch devices.
- Buttons have appropriate touch targets.
- Forms and popovers remain usable.
- Modals fit within mobile screens.
- Interactive elements have visible focus states.

Follow semantic HTML practices, provide appropriate image descriptions, use accessible labels, and ensure keyboard navigation works throughout the website.

## 8. Technical Architecture and Code Quality

Build the website using a maintainable, component-based architecture.

Before implementation:

1. Inspect the existing project structure.
2. Identify the framework, dependencies, and available assets.
3. Understand the existing configuration before changing anything.
4. Reuse suitable components and dependencies where possible.
5. Avoid unnecessary packages and duplicated functionality.

Create reusable components for common elements such as:

- Navigation.
- Footer.
- Buttons.
- Section headings.
- Cards.
- Skills tags.
- Modals and lightboxes.
- Theme switcher.
- Page containers.
- Loading and feedback states.

Keep page content and asset paths in organised data/configuration files wherever practical.

This should make future updates easy without requiring changes throughout the codebase.

Do not hardcode the same information in multiple places.

## 9. Functional Requirements

Every interactive element must work as advertised.

Examples:

- Navigation links must navigate correctly.
- Theme switching must actually change the website theme.
- Project cards must open their correct GitHub repositories.
- Certification previews must display the correct certificate.
- Hobbies gallery must open and navigate its images.
- Skills popovers must reveal additional skills.
- Contact form must submit through a properly configured email service.
- Email and social buttons must open their intended destinations.
- Copy-to-clipboard actions must work and provide feedback.

Never create buttons that look functional but do nothing.

Do not simulate successful form submissions or invent successful actions.

Provide appropriate loading, success, error, and empty states wherever necessary.

## 10. Performance, SEO and Security

Implement appropriate production best practices.

### Performance
- Optimise images without compromising important details.
- Lazy-load images where appropriate.
- Avoid unnecessary JavaScript and dependencies.
- Use efficient rendering strategies.
- Avoid layout shifts during loading.
- Keep animations performant.
- Ensure the website loads quickly on mobile networks.

### SEO
- Give every page a meaningful title and meta description.
- Use proper heading hierarchy.
- Add appropriate Open Graph metadata.
- Use descriptive URLs where supported.
- Add a favicon and suitable social-sharing image.
- Use descriptive image alt text.
- Ensure the website can be indexed by search engines.
- Generate a sitemap and configure robots.txt where appropriate.

### Security
- Never expose API keys, secrets, or private credentials in frontend code.
- Use environment variables for sensitive configurations.
- Validate and sanitise user input.
- Implement appropriate spam protection for the contact form.
- Follow secure deployment practices.

## 11. Footer

Create a consistent footer across all pages.

It should contain:

- Azeez Olawale.
- Professional identity: Data Scientist | Supply Chain Analytics | Industrial Engineer.
- Quick navigation links.
- LinkedIn and GitHub links.
- Email address.
- Copyright year, generated dynamically.

Keep it compact, elegant, and useful.

Do not turn the footer into another large content section.

## 12. Tools, Libraries and Plugins

Use the tools, libraries, frameworks, and plugins available to you where they genuinely improve implementation quality.

You have the freedom to select suitable technologies for:

- Responsive layouts.
- Animation and transitions.
- Icon systems.
- Image optimisation.
- Theme management.
- Form validation.
- Secure email delivery.
- SEO.
- Accessibility testing.
- Performance optimisation.
- Deployment.

Prefer reliable, well-maintained tools and established best practices.

Before installing a new dependency, assess whether the existing project already has an appropriate solution.

Use plugins, integrations, or external services when they provide meaningful functionality. Configure them securely and explain any required credentials, permissions, or setup steps.

Do not introduce unnecessary complexity simply to demonstrate tool usage.

## 13. Final Quality Assurance

Before declaring the website complete:

- Test every page and navigation link.
- Test light and dark mode across all pages.
- Test mobile and desktop layouts.
- Verify every supplied asset filepath.
- Check all certificate and project content.
- Test all buttons and interactive components.
- Test contact form validation and actual delivery.
- Check for broken images and links.
- Check browser console errors.
- Review accessibility and colour contrast.
- Review page loading performance.
- Verify metadata and SEO basics.
- Ensure no placeholder content remains where actual content has been supplied.

Do not claim a feature is complete until it has been tested.

## 14. Final Creative Direction

I want a website that makes someone comfortable staying, exploring, and learning more about me.

It should not scream for attention. Its quality should be evident through its simplicity, details, consistency, and functionality.

The experience should communicate three things:

**Professional competence.**  
I understand data, engineering, analytics, and business operations.

**Continuous growth.**  
I invest in learning, improving, and expanding my capabilities.

**A real human personality.**  
Beyond the technical skills and professional experiences, there is a person with interests, discipline, ambition, and a story worth knowing.

Make thoughtful design decisions. Be creative, but exercise restraint.

The final result should feel like a premium personal portfolio—not a template with my name inserted into it.