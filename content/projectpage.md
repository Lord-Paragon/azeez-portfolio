# PROJECTS PAGE — DESIGN, CONTENT & IMPLEMENTATION INSTRUCTIONS

## 1. PAGE OBJECTIVE

Build a premium, interactive Projects page that showcases my practical work in Data Science, Business Intelligence, Supply Chain Analytics, and Industrial Engineering.

This page should serve as a professional evidence gallery of my analytical capabilities.

The goal is not simply to display project titles and technologies. Each project should communicate the type of problem addressed, the analytical approach adopted, and the skills demonstrated.

The page should appeal to:
- Recruiters and hiring managers.
- Data Science and Business Intelligence professionals.
- Supply Chain and Operations professionals.
- Potential freelance clients.
- Organizations seeking data-driven solutions.
- Technical collaborators.

The experience should feel like browsing the portfolio of a professional analytical practitioner.

## 2. PAGE INTRODUCTION

**Main heading:**

Projects & Practical Applications.

**Supporting headline:**

Where Data Meets Real-World Problems.

**Introduction:**

I believe the true value of analytical knowledge lies in its application.

My projects explore how data science, statistical analysis, programming, and business intelligence can be applied to practical challenges across different industries.

From building predictive models and exploring complex datasets to developing business intelligence solutions and optimizing operational decisions, each project represents an opportunity to turn data into meaningful insights.

Here, you'll find a collection of my work, the problems I've explored, the techniques I've applied, and the tools I've used to develop analytical solutions.

**Supporting statement:**

Explore the work. Understand the approach. Discover the possibilities.

## 3. PROJECT CARD ARCHITECTURE

Every project must be represented by an attractive, individually designed project card.

The cards should form a responsive grid layout, preferably three columns on large desktop screens, two on tablets, and one on smaller mobile screens.

Each card should contain the following elements:

**A. Project Number**

Assign a sequential number to each project (01, 02, 03, etc.).

**B. Project Title**

Display the project name prominently.

**C. Project Description**

Provide a concise description of the business problem, analytical objective, or solution developed.

Keep descriptions informative and professional. Ideally, two to four lines should be sufficient.

**D. Project Category**

Include a small category label where appropriate.

Possible categories include:
- Data Science
- Supply Chain Analytics
- Business Intelligence
- Time Series Analysis
- Statistical Analysis
- Machine Learning
- Operations Research

The categories should be flexible and determined by the actual project.

**E. Skills Demonstrated**

This is an important feature of the project cards.

Each project should display relevant technical and analytical skills demonstrated during its development.

Examples include:

*Technical tools:*
- Python
- Pandas
- NumPy
- Matplotlib
- Seaborn
- Scikit-learn
- Statsmodels
- SQL
- MySQL
- Microsoft Excel
- Power BI
- Tableau

*Analytical and professional skills:*
- Data Cleaning
- Data Wrangling
- Exploratory Data Analysis
- Statistical Analysis
- Feature Engineering
- Data Visualization
- Time Series Forecasting
- Predictive Modelling
- Model Evaluation
- Business Intelligence
- Inventory Optimization
- Demand Planning
- Data Storytelling
- Problem Solving
- Business Analysis
- Decision Support

Do not force every skill onto every project. Select skills intelligently according to the project title, description, and actual GitHub repository.

**F. Interactive Skills Display — Important**

A project may demonstrate 8–12 or more skills.

However, displaying every skill directly on the card will make the design overcrowded.

Implement a compact skill-tag system.

For example, if a project demonstrates 10 skills, display the first three relevant skills as visible tags, followed by a small `+7` indicator.

When the visitor hovers over or clicks the `+7` indicator, reveal a small, elegant floating popover containing the remaining seven skills.

The interaction should:
- Have a subtle entrance animation.
- Be visually compact.
- Remain within the viewport.
- Close when the user clicks outside it or moves away, where appropriate.
- Work on both desktop and mobile devices.
- Be keyboard-accessible.

Use a clean, modern design for the skill tags. Avoid large, colourful badges that compete with the project title.

**G. GitHub Destination**

The entire project card should be clickable and direct visitors to the corresponding GitHub repository.

Include a subtle GitHub icon or external-link indicator to communicate that the project opens externally.

Open repositories in a new browser tab.

Do not create unnecessary intermediate project pages. The intended behaviour is direct navigation to GitHub.

Ensure that interactive skill popovers do not accidentally trigger the card's GitHub navigation.

## 4. PROJECT DIRECTORY — TITLES AND GITHUB LINKS

Create the project cards using the following editable project directory.

IMPORTANT: These titles and repository links are manually maintained by me. Use the supplied titles and links as the source of truth.

Each numbered item represents one project card.

1. **Industrial Procurement Intelligence & Supplier Performance System**

   GitHub Repository: https://github.com/paragon-tech001/Procurement-Spend-Analytics-Dashboard-Microsoft-Excel-

2. **Demand Forecasting & Inventory Planning System**

   GitHub Repository: https://github.com/paragon-tech001/US-Regional-Sales-Supply-Chain-Analysis

3. **Industrial Market Intelligence & Business Prospecting**

   GitHub Repository: https://github.com/paragon-tech001/Supplier-Segmentation-Analysis

4. **Multi-Hub Demand Forecasting & Stock Planning**

   GitHub Repository: https://github.com/paragon-tech001/The-Hub-Inventory-Optimization-Project

5. **Exploratory Data Analysis & Business Insights**

   GitHub Repository: https://github.com/paragon-tech001/Inventory-Simulations

6. **Statistical Analysis & Hypothesis Testing**

   GitHub Repository: https://github.com/paragon-tech001/Logistics-Demand-Delivery-Risk-Analytics

7. **Time Series Analysis & Predictive Forecasting**

   GitHub Repository: https://github.com/paragon-tech001/NovaSol-Solar-Farm-Construction-Project-PERT-CPM-Analysis

8. **Machine Learning & Predictive Analytics**

   GitHub Repository: https://github.com/paragon-tech001/ABC-Analysis-with-Python

9. **Customer & Business Performance Analytics**

   GitHub Repository: https://github.com/paragon-tech001/RFM-Analysis

10. **Operations Research & Optimization**

    GitHub Repository: https://github.com/paragon-tech001/Linear-Programming

These are initial project slots and suggested titles, not claims that every project is already completed or published.

Make the project directory easy to update. I should be able to add, remove, rename, or reorder projects without redesigning the entire page.

The descriptions and skill tags should also be independently editable.

Do not invent repository URLs, project results, datasets, or analytical achievements.

## 5. PROJECT FILTERING AND DISCOVERY

Introduce a modern filtering system above the project grid.

Suggested filters:

- All Projects
- Data Science
- Supply Chain Analytics
- Business Intelligence
- Statistical Analysis
- Machine Learning
- Forecasting
- Operations Research

Allow visitors to filter projects according to their categories.

Include a small search field where visitors can search for projects by title, category, or relevant skills.

The search and filters should work together.

For example, someone searching for "Python" should be able to find projects where Python is listed among the demonstrated skills.

Provide a clean empty state when no project matches the search.

The filtering experience should be immediate, smooth, and free from unnecessary page reloads.

Only display filters that have relevant projects.

## 6. FEATURED PROJECT EXPERIENCE

Consider implementing a featured project section before the general project grid.

The featured project should occupy a larger visual space than ordinary project cards.

It could include:
- A larger project title.
- An expanded project description.
- A relevant dashboard screenshot or analytical visualization.
- Selected technologies.
- A brief explanation of the problem addressed.
- A prominent GitHub link.

Initially, use the first project in the directory as the featured project.

Make this configurable so I can change the featured project in the future.

The purpose is to give one particularly strong project greater visibility without compromising the consistency of the remaining project cards.

## 7. VISUAL DESIGN AND CREATIVE DIRECTION

I want this page to be visually impressive.

Do not settle for a conventional grid of plain white cards with a title and a few technology badges.

Explore a sophisticated design language that communicates data science and analytical thinking.

Possible design elements include:

- Subtle data-inspired backgrounds.
- Abstract grid patterns.
- Minimalist technical illustrations.
- Small charts or data visualization previews.
- Carefully designed project thumbnails.
- Elegant card borders and shadows.
- Subtle gradients where appropriate.
- Interactive hover states.
- Refined typography and spacing.
- GitHub and technology icons.

Where project screenshots are available, use them to make the cards more informative.

For projects with no screenshots, use elegant abstract visual treatments rather than generic stock photographs.

The design should remain professional, restrained, and coherent with the Home Page.

## 8. ANIMATIONS AND INTERACTIONS

Use modern animations to improve the experience without making the page distracting.

Recommended interactions:

**Page entrance animation**
- Introduce the heading and supporting content with subtle fade-in and upward movement.
- Reveal project cards progressively as they enter the viewport.

**Project card hover**
- Slight elevation or movement.
- Subtle border or shadow transition.
- Gentle thumbnail zoom where applicable.
- Reveal a small external-link indicator.

**Skill interactions**
- Animate the `+N` popover smoothly.
- Use a short fade and scale transition.

**Filtering**
- Animate project cards when categories change.
- Avoid unnecessarily dramatic transitions.

**Search**
- Provide responsive filtering as the visitor types.

Animations should be performant and should respect reduced-motion accessibility preferences.

Avoid excessive bouncing, spinning, or distracting effects.

## 9. PROJECT CARD CONTENT GENERATION RULES

The project titles and repository links will be supplied manually.

Use your understanding of the project titles to propose appropriate descriptions, categories, and skills.

However, apply the following reasoning:

1. A project involving procurement intelligence may reasonably demonstrate SQL, Python, Pandas, supplier analysis, data modelling, and business intelligence.

2. A demand forecasting project may reasonably demonstrate time series analysis, statistical modelling, forecasting, model evaluation, and inventory planning.

3. An industrial market intelligence project may reasonably demonstrate data acquisition, geospatial analysis, data cleaning, lead generation, and visualization.

4. A statistical analysis project may reasonably demonstrate probability, hypothesis testing, inferential statistics, and data interpretation.

5. A machine learning project may reasonably demonstrate feature engineering, model training, evaluation, and predictive analytics.

These are illustrative examples, not mandatory skill assignments.

Be intelligent and flexible when determining the skills associated with each project.

Do not automatically assign every technology to every project.

Descriptions should be written in professional, concise language and should communicate the actual analytical objective rather than simply listing the steps performed.

If the repository provides insufficient information to establish what was actually done, use a conservative description and make the content easy for me to edit.

## 10. PAGE CLOSING SECTION

After the project grid, include a short closing section.

**Heading:**

Every Dataset Has a Story. Every Problem Has an Opportunity.

**Content:**

My work is driven by curiosity, analytical thinking, and the desire to solve meaningful problems.

I am continuously exploring new datasets, developing analytical solutions, and expanding the application of data science across business and industrial environments.

There is always something new to investigate, build, and improve.

**Buttons:**

- Explore My GitHub → https://github.com/paragon-tech001
- Let's Collaborate → `[CONTACT_PAGE_LINK]`

## 11. TECHNICAL AND MAINTAINABILITY REQUIREMENTS

Build the Projects page with maintainability in mind.

The project information should be stored in a centralized, structured configuration or data file rather than scattered throughout the page components.

Each project should support the following properties:

- Project number.
- Project title.
- Description.
- Category.
- GitHub repository URL.
- Skills demonstrated.
- Optional thumbnail or screenshot.
- Featured status.

The design should automatically adapt when projects are added or removed.

The skills popover, search, filtering, and project navigation must be fully functional.

Ensure:
- Responsive behaviour.
- Accessibility.
- Fast loading.
- Clean component architecture.
- Consistent styling.
- Search-engine-friendly page content.
- No broken or fabricated links.

## 12. FINAL DESIGN OBJECTIVE

The Projects page should communicate that I am not merely familiar with data science tools; I understand how to apply analytical methods to meaningful problems.

A recruiter should be able to scan the page quickly, identify relevant skills, explore projects of interest, and navigate directly to the underlying GitHub repositories.

A potential client should be able to recognize the kinds of business and operational problems I can help investigate.

The overall experience should be modern, interactive, polished, and professionally credible.

Make the page memorable without sacrificing usability.