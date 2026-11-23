# CONTACT PAGE — DESIGN, CONTENT & IMPLEMENTATION INSTRUCTIONS

## 1. PAGE OBJECTIVE

Create a visually exceptional, interactive, and professionally designed Contact page for my personal portfolio website.

The Contact page should make it incredibly easy for recruiters, potential employers, clients, collaborators, and other professionals to reach me.

I want this page to feel like a modern communication hub, featuring multiple beautifully designed contact cards, a functional email messaging form, and direct links to my professional platforms.

The most important feature is a fully functional email contact form that allows visitors to compose and send messages directly to my email address without needing to open their email applications.

Do not build a conventional contact page with just a heading, email address, and a few social icons.

Be creative with the layout, card arrangements, interactions, iconography, micro-animations, and overall user experience.

The result should feel premium, welcoming, modern, and memorable.

---

## 2. PAGE INTRODUCTION

**Main heading:**

Let's Connect.

**Supporting headline:**

Good Conversations Can Lead to Great Things.

**Introduction:**

Whether you have an interesting opportunity, a project worth exploring, a business challenge that needs an analytical perspective, or simply want to exchange ideas, I'd love to hear from you.

I'm always open to meaningful professional connections, collaborations, data-driven projects, and conversations around Data Science, Supply Chain Analytics, Business Intelligence, and Technology.

Feel free to reach out. Let's start a conversation.

**Small supporting text:**

Have something in mind? My inbox is open.

---

## 3. PRIMARY CONTACT CARD — SEND ME A MESSAGE

This is the most important component of the Contact page.

Create a large, elegant, visually prominent card containing a functional email contact form.

The card should look like a modern messaging interface rather than a conventional administrative form.

**Card heading:**

Send Me a Message

**Supporting text:**

Have a question, opportunity, or project you'd like to discuss? Write me a message and I'll be glad to hear from you.

**Recipient email address:**

olasupoazeezolawale@gmail.com

This email address must be the fixed recipient of all messages submitted through the form.

### FORM FIELDS

Implement the following fields in this exact order:

**1. First Name**
- Text input.
- Required.
- Placeholder: "Your first name".

**2. Last Name**
- Text input.
- Required.
- Placeholder: "Your last name".

**3. Email Address**
- Email input.
- Required.
- Placeholder: "you@example.com".
- Validate that the supplied address has a valid email format.

**4. Subject**
- Text input.
- Required.
- Placeholder: "What's this about?".

**5. Message**
- Multi-line textarea.
- Required.
- Placeholder: "Tell me a little about what you have in mind..."
- Allow sufficient space for a meaningful message.
- Support longer messages without making the form uncomfortable to use.

### SUBMISSION BUTTON

**Button label:**

Send Message

Use an appropriate send icon, preferably a paper-plane icon.

When the visitor submits the form:

1. Validate all required fields.
2. Validate the email address.
3. Prevent submission when required information is missing.
4. Send the message to my specified email address.
5. Display a loading state while the message is being processed.
6. Prevent accidental duplicate submissions.
7. Display a clear success message after confirmed delivery acceptance.
8. Display an appropriate error message if submission fails.

### SUCCESS STATE

After successful submission, display a beautifully designed confirmation state.

**Heading:**

Message Sent Successfully!

**Message:**

Thank you for reaching out. Your message has been submitted successfully, and I appreciate you taking the time to connect.

I'll get back to you as soon as possible.

Include a small success icon and a button to send another message.

Do not display a success state before the email service confirms successful submission.

### ERROR STATE

If the message cannot be submitted:

**Heading:**

Something Went Wrong.

**Message:**

Your message couldn't be sent at the moment. Please try again or contact me directly using my email address.

Provide a retry option.

---

## 4. EMAIL DELIVERY — CRITICAL TECHNICAL REQUIREMENT

The form must actually deliver messages to:

`olasupoazeezolawale@gmail.com`

This is not a visual-only form.

The AI agent must implement a working email delivery mechanism.

Inspect the existing project architecture and choose an appropriate integration.

Possible approaches include:
- Resend with a secure backend or serverless function.
- EmailJS, if configured securely and appropriately.
- Another reliable transactional email service.

Prefer a secure server-side implementation where practical.

### Email configuration

The submitted message should arrive in my inbox with:

**To:** olasupoazeezolawale@gmail.com

**Subject:** The subject entered by the visitor.

**Email body should contain:**

- First name.
- Last name.
- Sender's email address.
- Subject.
- Full message.
- Submission date and time, where available.

The sender's email address should be included as a reply-to address, so I can respond directly to the visitor.

Do not allow visitors to control the recipient email address.

### Security requirements

- Never expose API keys, email service secrets, or private credentials in frontend code.
- Store secrets in environment variables.
- Validate and sanitize submitted information.
- Implement basic spam protection, preferably a honeypot field and appropriate rate limiting.
- Protect the endpoint against automated abuse.
- Do not trust frontend validation alone.
- Provide clear submission errors without exposing sensitive backend details.

If a third-party email service requires domain verification or other configuration, explain the exact setup required and leave clear environment-variable placeholders.

Do not silently replace the email functionality with a mailto link.

A mailto link may be provided as a fallback, but it is not the primary implementation.

---

## 5. PROFESSIONAL CONNECTION CARDS

Below or alongside the primary contact form, create a collection of visually attractive social and professional connection cards.

Use recognizable platform icons.

Each card should have:
- Platform icon.
- Platform name.
- Short supporting description.
- A subtle arrow or external-link indicator.
- A hover animation.
- A functional destination.

### CARD 01 — LINKEDIN

**Platform:** LinkedIn

**Description:**

Let's connect professionally. Follow my journey, explore my professional interests, and connect with me for opportunities and collaborations.

**URL:**

https://www.linkedin.com/in/olasupo-azeez/

Use the official LinkedIn icon.

Open in a new browser tab.

### CARD 02 — GITHUB

**Platform:** GitHub

**Description:**

Explore my analytical projects, Python implementations, data science experiments, and practical applications of data analytics.

**URL:**

https://github.com/paragon-tech001

Use the official GitHub icon.

Open in a new browser tab.

### CARD 03 — EMAIL

**Platform:** Email

**Description:**

Prefer a direct conversation? Send me an email and let's discuss what you have in mind.

**Email:**

olasupoazeezolawale@gmail.com

**Interaction:**

When clicked, open the visitor's default email application using a properly configured mailto link.

Also provide a small copy-email interaction.

When the visitor clicks the copy icon, copy my email address to their clipboard and display a brief confirmation such as:

"Email address copied!"

Use a subtle copy icon.

### FUTURE SOCIAL PLATFORMS

Structure the social contact cards so additional platforms can be introduced later.

Potential future additions include:
- Medium.
- Kaggle.
- X.
- Personal blog.
- Other professional platforms.

Do not display empty or fabricated social links.

---

## 6. ADDITIONAL CONTACT INFORMATION / AVAILABILITY SECTION

Consider adding a small, elegant section communicating the types of conversations I welcome.

**Heading:**

What Would You Like to Discuss?

Create four compact cards or visual items.

**Career Opportunities**

Interested in Data Science, Business Intelligence, Supply Chain Analytics, and related analytical opportunities.

**Freelance & Consulting Projects**

Open to meaningful projects involving data analytics, forecasting, business intelligence, and operational analysis.

**Collaboration**

Interested in working with professionals and organizations on data-driven projects and analytical solutions.

**Professional Conversations**

Always interested in exchanging ideas around data science, technology, supply chain management, and business analytics.

Keep these as areas of interest, not claims of guaranteed availability for specific services.

---

## 7. CREATIVE LAYOUT AND VISUAL DIRECTION

I want the agent to exercise creativity here.

Do not simply stack the email form and social cards vertically without considering the available space.

Explore a premium asymmetric card-based layout.

### Recommended desktop arrangement

Consider a two-column layout:

**Left column:**
- Large introductory heading.
- Supporting paragraph.
- Professional connection cards.
- Short contact invitation.

**Right column:**
- Prominent email form card.
- Generous internal spacing.
- Elegant input fields.
- Visually distinctive send button.

The form should receive the greatest visual emphasis.

### Mobile arrangement

On mobile:
- Stack the introduction first.
- Display the email form prominently.
- Place social cards beneath the form.
- Ensure all form controls are comfortable to use.
- Avoid horizontal overflow.

### Design inspiration

Use a refined combination of:
- Modern card-based interfaces.
- Elegant rounded corners.
- Minimalist line icons.
- Subtle gradients.
- Soft shadows.
- Professional typography.
- Generous spacing.
- Carefully balanced colours.
- Subtle background patterns.

Maintain visual consistency with the Home, Projects, and Experience pages.

Do not introduce a completely unrelated design language.

---

## 8. ICONOGRAPHY — VERY IMPORTANT

Icons should be an important part of this page.

Use high-quality, recognizable icons from a consistent icon library such as Lucide.

Suggested icons:

| Element | Icon |
|---|---|
| Email | mail |
| LinkedIn | linkedin |
| GitHub | github |
| Send message | send |
| First name | user |
| Email address | at-sign |
| Subject | message-square |
| Message body | messages-square |
| Copy email | copy |
| External links | external-link |
| Success | circle-check |
| Error | circle-alert |
| Collaboration | users |
| Career opportunities | briefcase-business |
| Projects | folder-kanban |
| Location | map-pin |

Use icons thoughtfully.

They should improve recognition and navigation rather than become decorative clutter.

Platform icons should use their recognizable official appearance where possible.

Keep icon sizes, stroke weights, and visual alignment consistent.

---

## 9. ANIMATIONS AND MICRO-INTERACTIONS

Make the page feel responsive and alive.

Recommended animations:

**Page entrance**
- Fade in the main heading.
- Introduce the supporting text with subtle upward movement.
- Reveal the form and social cards progressively.

**Contact cards**
- Slight elevation on hover.
- Smooth shadow transitions.
- Gentle icon movement.
- Subtle arrow movement toward the destination.

**Form fields**
- Smooth focus transitions.
- Highlight the active field.
- Use clear validation indicators.
- Keep error messages close to the relevant input.

**Send button**
- Subtle hover effect.
- Loading spinner or sending indicator.
- Smooth transition between normal, loading, success, and error states.

**Copy interaction**
- Brief icon transition.
- Small confirmation message.

**Social cards**
- Gentle hover movement.
- Smooth external-link indicator transition.

Use performant CSS or the existing animation library if one is already installed.

Respect reduced-motion accessibility preferences.

Do not over-animate the page.

---

## 10. FOOTER CONNECTION

The Contact page should end naturally without introducing unnecessary additional content.

Include a short closing statement:

**"Thank you for stopping by. I look forward to hearing from you."**

Include small LinkedIn, GitHub, and email icons linking to the supplied destinations.

Maintain the same footer design used throughout the website.

---

## 11. TECHNICAL AND MAINTAINABILITY REQUIREMENTS

Build the Contact page with clean, reusable components.

The social links should be stored in a centralized configuration so they can be updated easily.

The email recipient should be centrally configured and not repeated across unrelated components.

The email form should have:
- Controlled or appropriately managed form state.
- Client-side validation.
- Server-side validation.
- Accessible labels.
- Clear error handling.
- Loading state.
- Success state.
- Retry functionality.
- Spam protection.

The page must work correctly across desktop, tablet, and mobile devices.

Ensure all links are functional.

Test the complete email delivery workflow rather than assuming the form works because it looks correct.

Do not expose credentials or sensitive configuration in the public repository.

---

## 12. FINAL DESIGN OBJECTIVE

The Contact page should communicate openness, professionalism, and approachability.

A visitor should immediately understand how to reach me and feel encouraged to initiate a conversation.

The email form should be the centrepiece of the page, supported by beautifully designed social connection cards and meaningful contact information.

I want someone visiting the page to think:

"This person has put real thought into their professional presence."

Make the page visually impressive, technically sound, fully functional, and consistent with the overall identity of my portfolio.

Remember: a beautiful contact form that doesn't send emails is a failed implementation. Functionality is just as important as aesthetics.