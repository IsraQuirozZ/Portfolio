// NAVBAR
const openMenu = document.querySelector(".openMenu");
const closeMenu = document.querySelector(".closeMenu");
const menuItems = document.querySelector(".menuItems");

openMenu.addEventListener("click", () => {
    openMenu.classList.toggle("hidden");
    closeMenu.classList.toggle("visible");
    menuItems.classList.toggle("visible_nav");
});

closeMenu.addEventListener("click", () => {
    closeMenu.classList.toggle("visible");
    openMenu.classList.toggle("hidden");
    menuItems.classList.toggle("visible_nav");
});

// CIRCLE PROGRESS BAR
// let circularProgress = document.querySelector(".circular-progress"),
//     progressValue = document.querySelector(".progress-value");

// let progressStartValue = 0,
//     progressEndValue = 90,
//     speed = 10;

// let progress = setInterval(() => {
//     progressStartValue++;

//     progressValue.textContent = `${progressStartValue}%`;
//     circularProgress.style.background = `conic-gradient(#32e0c4 ${
//   progressStartValue * 3.6
// }deg, rgba(255, 255, 255, 0.099) 0deg)`;

//     if (progressStartValue == progressEndValue) {
//         clearInterval(progress);
//     }
//     console.log(progressStartValue);
// }, speed);

// ABOUT

// MENU
const profile = document.getElementById("profile");
const education = document.getElementById("education");
const skills = document.getElementById("skills");

// LEFT
const profileLeft = document.querySelector(".profileImg");
const educationSkills = document.querySelector(".about_left__container");
const educationLeft = document.querySelector(".education_leftContent");
const skillsLeft = document.querySelector(".skill_leftContent");
const educationMarginContainer = document.querySelector(
    ".about_left__container"
);

// RIGHT
const profileRight = document.querySelector(".profileContent");
const educationRight = document.querySelector(".educationContent");
const skillsRight = document.querySelector(".skillsContent");

// EDUCATION LINK
education.addEventListener("click", (e) => {
    e.preventDefault();
    profile.classList.remove("active");
    education.classList.add("active");
    skills.classList.remove("active");
    profileLeft.classList.add("about_hidden");
    skillsLeft.classList.add("about_hidden");
    educationSkills.classList.remove("about_hidden");
    educationLeft.classList.remove("about_hidden");
    profileRight.classList.add("about_hidden");
    skillsRight.classList.add("about_hidden");
    educationRight.classList.remove("about_hidden");
    educationMarginContainer.classList.add("about_left__containerMargin");
    educationSkills.classList.remove("about_hidden_mobile");
});

// SKILLS LINK
skills.addEventListener("click", (e) => {
    e.preventDefault();
    profile.classList.remove("active");
    education.classList.remove("active");
    skills.classList.add("active");
    profileLeft.classList.add("about_hidden");
    educationSkills.classList.remove("about_hidden");
    educationLeft.classList.add("about_hidden");
    skillsLeft.classList.remove("about_hidden");
    profileRight.classList.add("about_hidden");
    educationRight.classList.add("about_hidden");
    skillsRight.classList.remove("about_hidden");
    educationMarginContainer.classList.remove("about_left__containerMargin");
    educationSkills.classList.add("about_hidden_mobile");
    // skillsRight.classList.add("about_left__containerMargin");
});

// PROFILE LINK

profile.addEventListener("click", (e) => {
    e.preventDefault();
    education.classList.remove("active");
    skills.classList.remove("active");
    profile.classList.add("active");
    educationSkills.classList.add("about_hidden");
    profileLeft.classList.remove("about_hidden");
    educationRight.classList.add("about_hidden");
    skillsRight.classList.add("about_hidden");
    profileRight.classList.remove("about_hidden");
});