

Here is a comprehensive **README.md** content for your project. You can create a file named `README.md` in your project folder and paste this content into it.

***

# Cyber-Glass Profile Website

A visually stunning, responsive personal portfolio page designed to showcase mastery of the **CSS Box Model**, **RGBA Animations**, and **Glassmorphism**. This project was built specifically for **Mohammed Ilyas Siddiqui**.

![Design Preview](https://img.shields.io/badge/Status-Complete-success) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)

## ✨ Features

-   **Glassmorphism UI:** A modern frosted glass effect using `backdrop-filter: blur()` and semi-transparent RGBA backgrounds.
-   **CSS Box Model Implementation:** Utilizes Content, Padding, Borders, and Margins extensively to structure the layout and control spacing.
-   **RGBA Animations:**
    -   **Floating Orbs:** Background elements that move and blend to demonstrate transparency.
    -   **Neon Pulse:** A pulsating ring around the profile image and a glowing text effect on the name.
-   **Responsive Layout:** A CSS Grid layout that transforms seamlessly into a Flexbox column on mobile devices.
-   **Interactive Navigation:** Sticky header with a functional mobile hamburger menu.
-   **Semantic HTML:** Proper use of `<header>`, `<main>`, `<section>`, `<aside>`, and `<footer>` tags.

## 🚀 Getting Started

To view this project locally, follow these simple steps:

1.  **Download/Clone** the project files.
2.  Ensure you have a file named `index.html` containing the code.
3.  Double-click `index.html` to open it in your web browser (Chrome, Firefox, Safari, Edge).

*Alternatively, if using VS Code:*
1.  Open the project folder in VS Code.
2.  Install the "Live Server" extension.
3.  Right-click `index.html` and select "Open with Live Server".

## 🎨 Customization

This project is built to be easily customizable. Here is how you can make it your own:

### 1. Change the Name
To change the displayed name, edit the HTML text in the following locations (Search for "Mohammed"):
-   **Header:** `<a href="#" class="logo">Mohammed<span>.</span></a>`
-   **Sidebar:** `<h1 class="profile-name">Mohammed<br>Ilyas Siddiqui</h1>`
-   **Footer:** `Mohammed Ilyas Siddiqui`

### 2. Change the Profile Image
Locate the `img` tag in the sidebar section and update the `src` attribute:
```html
<img src="YOUR_IMAGE_URL_HERE" alt="Mohammed Ilyas Siddiqui" class="avatar-img">
```

### 3. Modify Colors
The project uses CSS Variables for easy color management. In the `<style>` section, look for `:root`:

```css
:root {
    --primary-accent: rgba(0, 210, 255, 1);  /* Cyan glow */
    --secondary-accent: rgba(58, 123, 213, 1); /* Blue glow */
    --glass-bg: rgba(255, 255, 255, 0.03);   /* Card transparency */
}
```

## 📂 File Structure

```text
.
├── index.html          # Main HTML structure (includes CSS/JS)
├── README.md           # This file
└── assets/             (Optional folder for local images)
    └── profile.jpg
```

*Note: Currently, CSS and JavaScript are included inside the HTML file for portability. For larger projects, it is best practice to separate them into `style.css` and `script.js`.*

## 🛠️ Technologies Used

-   **HTML5:** Semantic structure.
-   **CSS3:** 
    -   Flexbox & Grid Layouts.
    -   CSS Box Model (Margin, Padding, Border, Content).
    -   Animations & Keyframes.
    -   Media Queries (Responsive Design).
-   **JavaScript (Vanilla):** Minimal logic for the mobile navigation toggle.

## 👤 Author

**Mohammed Ilyas Siddiqui**

*Designed and Developed with CSS Mastery.*

## 📄 License

This project is open source and available for personal and educational use.

***

### How to use this:
1.  Create a new text file in your project folder.
2.  Name it `README.md`.
3.  Paste the content above.
4.  If you upload this to GitHub, this file will automatically be displayed as the main page for your repository!
