# Certifications Page — Implementation Instructions for AI Coding Agent

## 1. Page Objective

Build a visually impressive, modern, and engaging Certifications page for Azeez Olawale.

This page should showcase all **15 certificates**, with every certificate receiving its own dedicated card.

The purpose is not merely to list qualifications. It should communicate:

- A consistent commitment to professional development.
- Curiosity across data science, analytics, technology, project management, and supply chain.
- The willingness to learn, apply knowledge, and develop new capabilities.
- A multidisciplinary foundation that connects engineering, data, business, and operations.

The page should feel like a curated professional learning portfolio.

**Important:** Display all 15 certificates. Do not hide certificates behind pagination, a "Load More" button, or a collapsed section. Every certificate must be discoverable on the page.

Do not make this page feel like a tutorial directory or a collection of random online courses. It should feel like the learning record of a professional who takes personal and career development seriously.

---

## 2. Page Identity and Hero Section

### Main heading

**"Learning Never Stops."**

### Supporting headline

**"A Commitment to Growth. A Foundation for Impact."**

### Introduction

Use a warm, relatable, confident introduction:

"Every skill I have today represents a decision to learn something new, challenge what I already know, and become better at solving problems.

My learning journey has taken me across data science, analytics, supply chain management, project management, and industrial process improvement. Each certification represents more than a completed course; it represents an investment in the knowledge and capabilities I bring to real-world challenges.

I believe professional growth is a continuous process. And I'm always excited about what there is still to learn."

Keep the introduction readable and conversational. Avoid making it excessively long.

### Hero visual direction

- Use a clean, editorial-style layout.
- A subtle visual motif representing learning, growth, or achievement is welcome.
- Consider a tasteful collection of certificate thumbnails or a layered paper/document-inspired graphic.
- Avoid generic graduation stock photography.
- Do not use an illustration that competes with the certificates themselves.
- The hero should lead naturally into the certificate collection.

---

## 3. Certification Collection — Main Section

### Section heading

**"My Certifications & Professional Development"**

### Supporting copy

"A collection of courses, professional programmes, and learning experiences that have helped shape my technical and business capabilities."

Display a small summary above the cards:

- 15 Certificates
- 5 Broad Learning Categories
- Multiple Learning Institutions and Professional Platforms

These figures must be derived from the actual certificate data where possible, rather than manually duplicated in several places.

### Card layout

Use a responsive grid:

- Desktop: 3 cards per row where screen width allows.
- Tablet: 2 cards per row.
- Mobile: 1 card per row.
- Maintain consistent card heights where practical, without forcing descriptions into awkward spaces.

Each certificate must have its own card.

### Certificate card structure

Every card should contain:

1. Certificate image/preview.
2. Certificate title.
3. Issuing institution or provider.
4. Short, relevant description.
5. Relevant category tag.
6. Skills demonstrated indicator.
7. An interaction to view the full certificate.

The certificate image should be the main visual feature of each card.

### Certificate preview behaviour

- Display the actual certificate image from the supplied asset filepath.
- Preserve its original aspect ratio.
- Use an appropriate document-preview frame, preferably with a landscape ratio where the original certificate supports it.
- Avoid excessive cropping, stretching, distortion, or filters.
- If a certificate is portrait-oriented, accommodate that orientation gracefully.
- Give the image a subtle border and restrained shadow.
- Use a tasteful hover interaction to indicate that the certificate can be opened.
- Clicking a certificate should open a larger image preview in a modal/lightbox.
- The preview should support closing, keyboard accessibility, and mobile-friendly sizing.
- Include previous/next navigation so visitors can browse certificates without closing the preview.
- Show the certificate title and provider in the preview.
- Do not open an external website or redirect to a certification provider.

**The certificate image is the evidence. Do not replace it with a generic icon, generated certificate, or fabricated document.**

### Skills demonstrated interaction

Each card should display a small number of relevant skills, ideally 3 visible tags.

For example:

`Python` · `Data Analysis` · `Statistical Thinking` · `+3`

The `+N` indicator should be interactive.

When clicked or activated, it should reveal the remaining skills in a compact popover or expandable section.

Requirements:

- Do not overcrowd the card with tags.
- Ensure the interaction works on desktop and mobile.
- Support keyboard navigation and screen readers.
- Do not allow clicking the skills indicator to accidentally trigger the certificate preview.
- Keep the full skills list accessible.

---

## 4. Certificate Content and Asset Mapping

The following are the 15 certificates to display.

**Critical asset instruction:** Each certificate has a corresponding file in the website's assets folder. The paths below are placeholders that I will replace with the actual paths.

The agent must use the exact path mapped to each certificate.

Do not guess filenames, search for substitute certificates, use stock certificate images, or generate replacement documents.

The mapping must be maintained in one centralized data structure so that I can easily update a filepath later.

### Certificate 01

**Name:** Applied Data Science with Python  
**Institution:** University of Michigan  
**Category:** Data Science & Machine Learning  
**Filepath:** AGENTS\Portfolio_Website\assets\Applied Data Science with Python - SP.png

**Description:**

"A practical introduction to applying Python to real-world data science problems. This learning experience strengthened my understanding of data analysis, scientific computing, and the foundations of building data-driven solutions."

**Skills demonstrated:**
- Python Programming
- Data Analysis
- NumPy
- Pandas
- Data Visualization
- Applied Data Science
- Scientific Computing

### Certificate 02

**Name:** 3MTT Data Science  
**Institution:** 3 Million Technical Talent (3MTT), Nigeria — an initiative associated with NITDA, the National Information Technology Development Agency.  
**Category:** Data Science & Machine Learning  
**Filepath:** AGENTS\Portfolio_Website\assets\3MTT_DS.png

**Description:**

"An opportunity to participate in Nigeria's 3 Million Technical Talent programme, developing capabilities in the rapidly evolving technology ecosystem. My learning journey through 3MTT has further strengthened my interest in data science and the practical application of technology to solve problems."

**Skills demonstrated:**
- Data Science
- Data Analysis
- Data Interpretation
- Analytical Thinking
- Technical Problem Solving
- Continuous Learning

Do not invent the exact curriculum, assessment outcomes, or programme achievements. Use the certificate and any verified supporting information as the source of truth.

### Certificate 03

**Name:** DFA (Digital for All) — Data Analysis Challenge 2.0  
**Institution:** Digital for All (DFA)  
**Category:** Data Analytics & Business Intelligence  
**Filepath:** AGENTS\Portfolio_Website\assets\Certificate of  Completion.png

**Description:**

"A data-focused learning and challenge experience that reflects my interest in using analytical thinking to extract insights from information. It forms part of my broader journey towards becoming a stronger, more practical data professional."

**Skills demonstrated:**
- Data Analysis
- Analytical Thinking
- Data Interpretation
- Problem Solving
- Data-Driven Reasoning

Do not claim a competition position, award, or specific challenge result unless the certificate or verified information establishes it.

### Certificate 04

**Name:** Data Visualization with Tableau  
**Institution:** University of California, Davis (UC Davis)  
**Category:** Data Analytics & Business Intelligence  
**Filepath:** AGENTS\Portfolio_Website\assets\Data Visualization with Tableau.png

**Description:**

"Focused on communicating information through meaningful visualizations and interactive dashboards. This learning experience strengthened my appreciation for turning complex datasets into clear, useful insights that support better decisions."

**Skills demonstrated:**
- Tableau
- Data Visualization
- Dashboard Design
- Data Storytelling
- Visual Analytics
- Business Intelligence

### Certificate 05

**Name:** Getting Started with Google Workspace  
**Institution:** Google  
**Category:** Digital Productivity & Technology  
**Filepath:** AGENTS\Portfolio_Website\assets\Getting started with Google Workspace.png

**Description:**

"An introduction to Google's productivity ecosystem and the digital tools that support collaboration, communication, and everyday professional workflows. It reflects my interest in building practical digital capabilities beyond technical analytics."

**Skills demonstrated:**
- Google Workspace
- Digital Productivity
- Collaboration
- Document Management
- Digital Communication
- Workflow Efficiency

### Certificate 06

**Name:** Google Data Analytics Professional Certificate  
**Institution:** Google  
**Category:** Data Analytics & Business Intelligence  
**Filepath:** AGENTS\Portfolio_Website\assets\Google Data Analytics.png

**Description:**

"A foundational professional learning programme covering the data analytics process, from asking meaningful questions and preparing data to analysing findings and communicating insights. It helped strengthen my structured approach to solving problems with data."

**Skills demonstrated:**
- Data Analytics
- Data Cleaning
- Data Preparation
- Exploratory Data Analysis
- SQL
- Data Visualization
- Analytical Problem Solving

### Certificate 07

**Name:** IBM IT Project Manager  
**Institution:** IBM & SkillUp Edtech  
**Category:** Project Management & Leadership  
**Filepath:** AGENTS\Portfolio_Website\assets\IBM IT Project Manager.png

**Description:**

"An introduction to the principles and practices of managing IT projects, with an emphasis on structured planning, coordination, execution, and delivery. It broadened my understanding of how technical initiatives are organised and managed."

**Skills demonstrated:**
- IT Project Management
- Project Planning
- Project Coordination
- Risk Awareness
- Stakeholder Management
- Project Execution
- Team Collaboration

### Certificate 08

**Name:** Google Project Management Professional Certificate  
**Institution:** Google  
**Category:** Project Management & Leadership  
**Filepath:** AGENTS\Portfolio_Website\assets\Overall Google PM Certificate.png

**Description:**

"Developed a structured understanding of project management principles, from initiating and planning projects to managing execution, collaboration, and delivery. The learning experience strengthened my appreciation for organisation, communication, and effective project coordination."

**Skills demonstrated:**
- Project Management
- Project Planning
- Agile Fundamentals
- Risk Management
- Stakeholder Communication
- Project Documentation
- Team Collaboration

### Certificate 09

**Name:** Python for Time Series Data Analysis  
**Institution:** Pierian Training (Udemy)  
**Category:** Data Science & Machine Learning  
**Filepath:** AGENTS\Portfolio_Website\assets\Python for Time Series Data Analysis.png

**Description:**

"Focused on applying Python to time-dependent data and understanding patterns that evolve over time. This learning experience supports my interest in forecasting, demand planning, and using historical information to inform future decisions."

**Skills demonstrated:**
- Python
- Time Series Analysis
- Data Preparation
- Trend Analysis
- Forecasting Fundamentals
- Statistical Analysis
- Data Visualization

### Certificate 10

**Name:** Six Sigma Green Belt  
**Institution:** Kennesaw State University  
**Category:** Process Improvement & Industrial Engineering  
**Filepath:** AGENTS\Portfolio_Website\assets\Six Sigma Green Belt.png

**Description:**

"Developed knowledge of structured process improvement and quality management principles. This certification connects closely with my industrial engineering background and my interest in improving operational performance through systematic analysis."

**Skills demonstrated:**
- Six Sigma
- Process Improvement
- Quality Management
- Root Cause Analysis
- Continuous Improvement
- Process Analysis
- Operational Excellence

### Certificate 11

**Name:** Six Sigma Yellow Belt  
**Institution:** Kennesaw State University  
**Category:** Process Improvement & Industrial Engineering  
**Filepath:** AGENTS\Portfolio_Website\assets\Six Sigma Yellow Belt.png

**Description:**

"Built foundational knowledge of Six Sigma concepts and the role of structured problem solving in improving processes. It represents an important part of my interest in quality, efficiency, and continuous improvement."

**Skills demonstrated:**
- Six Sigma Fundamentals
- Quality Improvement
- Process Awareness
- Problem Solving
- Root Cause Thinking
- Continuous Improvement

### Certificate 12

**Name:** SQL for Data Science  
**Institution:** University of California, Davis (UC Davis)  
**Category:** Data Analytics & Business Intelligence  
**Filepath:** AGENTS\Portfolio_Website\assets\SQL for Data Science.png

**Description:**

"Focused on using SQL to retrieve, organise, and analyse structured data. This learning experience strengthened an essential capability in my analytics toolkit: extracting useful information from databases to support investigation and decision-making."

**Skills demonstrated:**
- SQL
- Database Queries
- Data Retrieval
- Data Filtering
- Data Aggregation
- Relational Data
- Analytical Thinking

### Certificate 13

**Name:** Supply Chain Analytics  
**Institution:** Rutgers University  
**Category:** Supply Chain & Operations  
**Filepath:** AGENTS\Portfolio_Website\assets\Supply Chain Analytics Specialization.png

**Description:**

"Explored how analytical methods can support supply chain decisions, improve visibility, and strengthen operational performance. This learning experience connects my technical analytics interests with my professional interest in procurement, inventory, and supply chain decision-making."

**Skills demonstrated:**
- Supply Chain Analytics
- Data-Driven Decision Making
- Supply Chain Performance
- Analytical Thinking
- Operations Analysis
- Business Intelligence

### Certificate 14

**Name:** Supply Chain Management  
**Institution:** Rutgers University  
**Category:** Supply Chain & Operations  
**Filepath:** AGENTS\Portfolio_Website\assets\Supply Chain Management.png

**Description:**

"Developed a broader understanding of supply chain management and the activities involved in coordinating the flow of materials, information, and resources. It complements my industrial engineering background and interest in efficient, well-managed operations."

**Skills demonstrated:**
- Supply Chain Management
- Procurement Fundamentals
- Inventory Management
- Logistics
- Operations Management
- Supply Chain Coordination
- Process Understanding

### Certificate 15

**Name:** Python for Data Analysis and Visualization  
**Institution:** Pathfinder Analytics  
**Category:** Data Analytics & Business Intelligence  
**Filepath:** AGENTS\Portfolio_Website\assets\Udemy python data analytics.png

**Description:**

"Focused on using Python to explore datasets, prepare information for analysis, and communicate findings through visual representations. It reinforces my interest in practical, hands-on analytics and translating raw data into useful insights."

**Skills demonstrated:**
- Python
- Pandas
- Data Cleaning
- Data Analysis
- Data Visualization
- Exploratory Data Analysis
- Analytical Thinking

---

## 5. Certificate Asset Mapping — Strict Implementation Requirement

Create a centralized certificate data structure.

Each record should include:

- Unique ID
- Certificate title
- Institution/provider
- Category
- Short description
- Certificate image filepath
- Full skills array
- Display order


Do not modify the mapping or associate a certificate with another certificate's image.

If an image path is temporarily unavailable:

- Keep the card in the layout.
- Display a restrained placeholder with the certificate title.
- Do not silently omit the certificate.
- Make it easy to identify which asset path needs to be supplied.
- Do not use an unrelated image as a replacement.

---

## 6. Categories and Filtering

Although all 15 certificates must remain visible by default, visitors should be able to explore the collection without feeling overwhelmed.

Organise the certificates into these five categories:

1. **Data Science & Machine Learning**
   - Applied Data Science with Python
   - 3MTT Data Science
   - Python for Time Series Data Analysis

2. **Data Analytics & Business Intelligence**
   - DFA Data Analysis Challenge 2.0
   - Data Visualization with Tableau
   - Google Data Analytics
   - SQL for Data Science
   - Python for Data Analysis and Visualization

3. **Supply Chain & Operations**
   - Supply Chain Analytics
   - Supply Chain Management

4. **Project Management & Leadership**
   - IBM IT Project Manager
   - Google Project Management

5. **Process Improvement & Industrial Engineering**
   - Six Sigma Green Belt
   - Six Sigma Yellow Belt

6. **Digital Productivity & Technology**
   - Getting Started with Google Workspace

**Important correction:** There are six categories in this classification, not five. Derive the category count dynamically.

### Filter interface

Place a clean filter bar above the certificate grid:

- All
- Data Science
- Analytics & BI
- Supply Chain
- Project Management
- Process Improvement
- Digital Productivity

The labels may be shortened for a cleaner interface, but each must map to the correct category.

Requirements:

- "All" is selected by default.
- All 15 cards appear on initial page load.
- Selecting a category filters the cards without a full page reload.
- Display the number of certificates in the active category.
- Provide a clear way to return to all certificates.
- Keep the interface responsive and usable on mobile.
- Avoid excessive animation when filtering.

A search field is optional. If implemented, it should search certificate titles, institutions, categories, and skills, and work together with category filtering.

---

## 7. Storytelling Section — What My Learning Journey Represents

After the certificate collection, add a short section that connects the different areas of learning.

### Section heading

**"One Learning Journey. Multiple Perspectives."**

### Supporting copy

"My learning interests are connected by a common goal: understanding problems better and developing the capabilities to solve them.

Data science helps me discover patterns and build predictive solutions. Business intelligence helps communicate insights. Supply chain management provides the operational context. Project management and process improvement help translate ideas into structured action.

Together, these areas shape how I approach problems—as an engineer, an analyst, and a continuous learner."

Display four small visual cards:

**1. Data & Intelligence**

Learning how to work with data, uncover patterns, develop analytical solutions, and communicate findings.

**2. Business & Operations**

Understanding how organisations work and how data can support better operational and commercial decisions.

**3. Process & Improvement**

Applying structured thinking to quality, efficiency, and continuous improvement.

**4. Planning & Execution**

Building the project coordination and management knowledge needed to turn plans into outcomes.

Use subtle icons and concise text. These cards should add context, not repeat the certificates.

---

## 8. Personal Closing Section

End the page with a human, memorable message.

### Heading

**"Still Learning. Always Building."**

### Copy

"I don't believe learning ends when a course is completed or a certificate is earned. The real value comes from what happens next—how knowledge is applied, how skills improve, and how new perspectives influence the problems we solve.

I'm grateful for every learning opportunity, every challenge, and every skill acquired along the way.

And I'm looking forward to learning even more."

Include a tasteful CTA:

**"Explore What I've Built"** → `[PROJECTS_PAGE_LINK]`

This connects the learning page to the practical projects page.

---

## 9. Visual Design Direction

The page should feel premium, modern, and visually rich.

### Overall aesthetic

- Professional and contemporary.
- Clean typography.
- Strong spacing and alignment.
- Subtle shadows and borders.
- Consistent corner radii.
- Restrained use of colour.
- Thoughtful use of whitespace.
- A balanced mix of certificate imagery and concise written content.

### Certificate cards

The certificate cards are the main attraction.

Use a design that gives the certificate images prominence while keeping descriptions readable.

Suggested structure:

- Certificate preview at the top.
- Institution/provider label.
- Certificate title.
- Short description.
- Skills section at the bottom.

Cards should have consistent visual treatment, but allow portrait and landscape certificate previews to display naturally.

### Colour and branding

Follow the established visual identity of the rest of the portfolio.

Do not introduce an entirely different theme for this page.

Use the existing typography, colour palette, navigation, buttons, footer, and animation conventions.

The page may have a slightly more academic/editorial feel, but it must remain part of the same website.

### Icons

Use appropriate Lucide icons where helpful:

- `graduation-cap`
- `award`
- `book-open`
- `brain`
- `chart-no-axes-combined`
- `database`
- `briefcase-business`
- `clipboard-list`
- `workflow`
- `target`
- `lightbulb`
- `trending-up`
- `external-link`
- `maximize-2`
- `chevron-left`
- `chevron-right`
- `x`
- `search`
- `filter`
- `check-circle`

Use icons sparingly. The certificate images should remain the primary visual elements.

---

## 10. Animation and Interaction

Implement polished but restrained interactions:

- Hero text entrance animation.
- Subtle card entrance as cards enter the viewport.
- Slight elevation or border emphasis on card hover.
- Gentle certificate-image zoom on hover.
- Smooth category filtering.
- Smooth modal/lightbox opening and closing.
- Previous/next certificate transitions.
- Subtle popover animation for additional skills.
- Clear hover and focus states for interactive elements.

Respect `prefers-reduced-motion`.

Avoid excessive motion, bouncing cards, unnecessary parallax, or animations that make the page feel like a promotional advert.

---

## 11. Accessibility and Performance

- All certificate images must have descriptive alt text.
- Use semantic headings and meaningful HTML structure.
- Make all interactions keyboard accessible.
- Ensure modal previews manage focus correctly and can be closed with Escape.
- Ensure colour contrast is sufficient.
- Lazy-load certificate images below the fold.
- Use optimised image formats where appropriate without compromising readability.
- Avoid loading all full-resolution images immediately if doing so harms performance.
- Do not sacrifice certificate legibility for aggressive image compression.
- Ensure responsive layouts across desktop, tablet, and mobile.

---

## 12. Content Accuracy and Integrity

This page is a representation of my actual professional development.

The agent must:

- Preserve the certificate titles and institutions provided.
- Use the supplied certificate images as the source of truth.
- Avoid inventing certificate dates, grades, scores, award classifications, or credential IDs.
- Avoid claiming that every course is an internationally accredited professional qualification.
- Avoid inventing achievements, awards, or examination outcomes.
- Avoid describing a course as advanced or expert-level unless supported by evidence.
- Use accurate, concise descriptions that explain the learning area without exaggerating what was achieved.
- Keep the distinction between a certificate, a training programme, and a challenge clear.
- Never invent a link or add unnecessary external links. This page does not require certificate links.

The descriptions and skills in this document are proposed portfolio copy. If the actual certificate or course content clearly differs, preserve the factual certificate information and adjust the description accordingly.

---

## 13. Technical and Maintainability Requirements

The implementation must be easy to maintain.

Create reusable components, for example:

- `CertificationCard`
- `CertificationGrid`
- `CertificationFilters`
- `SkillsPopover`
- `CertificateLightbox`
- `LearningJourneySection`

Keep certificate information in one central data file or configuration object.

I should be able to:

- Change a certificate image filepath.
- Correct a certificate title.
- Update an institution name.
- Edit a description.
- Add or remove skills.
- Add a new certificate.
- Reorder the certificates.
- Change a category.

All without manually editing several components.

Use the project's existing framework and architecture. Do not introduce unnecessary dependencies for simple interactions.

---

## 14. Final Acceptance Checklist

Before considering the page complete, verify:

- [ ] All 15 certificates are displayed.
- [ ] Each certificate has its own individual card.
- [ ] Every card uses its correctly mapped asset filepath.
- [ ] No certificate image has been fabricated or substituted.
- [ ] Every certificate has a concise description.
- [ ] Every certificate has relevant skills.
- [ ] Additional skills can be revealed interactively.
- [ ] Certificate images can be opened in a larger preview.
- [ ] Previous/next navigation works in the preview.
- [ ] Category filters work correctly.
- [ ] All certificates are visible by default.
- [ ] The layout works on desktop, tablet, and mobile.
- [ ] No external certificate links have been added.
- [ ] The storytelling sections communicate the value of continuous learning.
- [ ] The page feels consistent with the rest of the portfolio.
- [ ] The page is accessible, performant, and easy to maintain.
- [ ] No unverified achievements or qualifications have been added.

**Final design principle:** Make the collection impressive, but make the person behind the collection even more interesting. The visitor should leave understanding not just how much Azeez has learned, but the kind of professional he is deliberately becoming.