## Approach to the Problem

**Design**: Figma - https://www.figma.com/design/b5s8T2GURVkZRmmjYjzUi1/Hubl-%26-React-Modular-System?node-id=5-58&t=ReepOXiZn4Gqt50s-1

**Goal**:  
Deliver a working GitHub repo which showcases a reusable, customizable, accessible, and fully responsive HubSpot module. This module uses React state management for filtering, sorting, or visualizing data. It is optimized for core web vitals, implements lazy loading, and focuses on a design that will improve user engagement and conversion rates by showcasing client success stories in an interactive format.

**Methodology**:  
My approach for this task was to use the **waterfall methodology**:

1. **Requirements**
2. **Analysis**
3. **Design**
4. **Coding/Implementation**
5. **Testing**
6. **Deployment**

- **Requirements**:  
  Using the goal, I re-ordered the requirements for speed and efficiency (e.g., HTML/lazy-loading/accessibility). The next goal was to analyze its impact on what we are creating. The goal is to improve user engagement and conversion rates, so interactivity and the opportunity for leads need to be factored in.

- **Design**:  
  For the design, we started in **Figma**:

  1. Add designs to inspire the design for the module.
  2. Create designs and rate.
  3. Create the final design.
  4. Check requirements and refine if necessary.

- **Coding and Implementation**:  
  The coding and implementation included setting up HubSpot’s React theme to create a project base. Then, using the **HubSpot CLI**, `hs watch`, and building the module in **VS Code**.

- **Testing**:  
  Testing was done across all browsers and various screen sizes, both emulated and on physical devices. Once satisfied that everything was where it should be and the possible requirements were met, I deployed and tested the module. During this process, the page template and module were available for testing using local development.

---

## Installation Instructions

1. Ensure you have the following installed:

   - **Node.js** (version 14 or above)
   - **npm** (Node Package Manager)
   - **HubSpot CMS** account for integration
   - **HubSpot CLI** for accesing your account in HubSpot and pushing live updates

2. Clone the repository:
   ```bash
   git clone https://github.com/ryanfleming99/ReactTheme.git
   cd ReactTheme
   ```
3. Install dependencies:

   ```bash
   npm install
   ```

   If you plan to use local development, install HubSpot CLI globally:

   ```bash
   npm install -g @hubspot/cli
   Verify that HubSpot CLI is installed:
   ```

   ```bash
   hs --version
   Use hs project watch (2025 updated CLI) to make live updates to the theme.
   ```

   If you are unsure about the HubSpot CLI, visit the official documentation. To make updates to this theme, you will need to have hs auth and a personal key, as well as access to the project.

## Measuring Success

I would check the metrics for the page and form from the past year. After implementing the module, I would use the historical data to track how well the conversions perform in comparison. To track user interaction, I would check various sources such as Google Analytics (GA), heatmaps, and LogRocket. These will show us where and why users are doing what they are doing by reviewing the amount of traffic and form lead generation rate in comparison to traffic.

### Metrics

1. Lead gen rate - Form submission rate and quality of leads

2. Page views - to measure against lead gen rate to compare with historic data evenly

3. Time on page to measure interactivity or education value

4. Heatmaps - Module interactivity data such as - interacted vs not

5. LogRocket sessions - Module interactivity data and issue detection which can

### Challenges Faced and How I Overcame Them

1. React Component Issue
   I faced an issue where my React component wouldn't load. To resolve this, I followed available React and HubSpot documentation and utilized Grok and ChatGPT for additional support. Based on console logs and upload errors, I had to make various updates. Although I couldn’t fully resolve the issue at the time, I left the code and planned to revisit it when HubSpot support provides a solution. The component is a dropdown, allowing users to select a category (e.g., industry-specific testimonials). Without the use of state, I decided to remove the dropdown to focus on conversion over interactivity.

2. HubSpot CLI
   Using the HubSpot CLI was challenging due to recent updates in documentation and command requirements. Sometimes, it was easier to build the required features directly within HubSpot than using VS Code and the CLI. To support myself, I created an updated 2025 <b> HubSpot CLI <b> cheatsheet.

3. React and HubSpot Integration
   The documentation and setup for React and HubSpot are generally clean, but I found that HubSpot is still in the early stages of releasing these tools, which explains some of the issues encountered.
   As HubSpot's React integration progresses, I expect things to improve. To stay ahead, I plan to complete HubSpot-specific React certifications, if available.
