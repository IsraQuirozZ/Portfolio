// NAVBAR
// const openMenu = document.querySelector(".openMenu");
// const closeMenu = document.querySelector(".closeMenu");
// const menuItems = document.querySelector(".menuItems");

// openMenu.addEventListener("click", () => {
//     openMenu.classList.toggle("hidden");
//     closeMenu.classList.toggle("visible");
//     menuItems.classList.toggle("visible_nav");
// });

// closeMenu.addEventListener("click", () => {
//     closeMenu.classList.toggle("visible");
//     openMenu.classList.toggle("hidden");
//     menuItems.classList.toggle("visible_nav");
// });

// ABOUT ME
const aboutLinks = document.querySelectorAll(".about-link");
const profileLink = document.querySelector(".profile");
const educationLink = document.querySelector(".education");
const skillsLink = document.querySelector(".skills");
const profileLeft = document.querySelector(".profile-left");
const profileRight = document.querySelector(".profile-right");
const educationLeft = document.querySelector(".education-left");
const educationRight = document.querySelector(".education-right");
const skillsLeft = document.querySelector(".skills-left");
const skillsRight = document.querySelector(".skills-right");
const skillDesc = document.querySelector(".skill-description");

function activeLink() {
  aboutLinks.forEach((link) => {
    link.classList.remove("about-link-active");
    this.classList.add("about-link-active");
  });
}

aboutLinks.forEach((link) => {
  link.addEventListener("click", activeLink);
});

// PROFILE
profileLink.onclick = () => {
  profileLeft.classList.remove("hide");
  profileRight.classList.remove("hide");
  educationLeft.classList.add("hide");
  educationRight.classList.add("hide");
  skillsLeft.classList.add("hide");
  skillsRight.classList.add("hide");
  skillDesc.classList.add("hide");
};

// EDUCATION
educationLink.onclick = () => {
  educationLeft.classList.remove("hide");
  educationRight.classList.remove("hide");
  profileLeft.classList.add("hide");
  profileRight.classList.add("hide");
  skillsLeft.classList.add("hide");
  skillsRight.classList.add("hide");
  skillDesc.classList.add("hide");
};

// SKILLS
skillsLink.onclick = () => {
  skillsLeft.classList.remove("hide");
  skillsRight.classList.remove("hide");
  skillDesc.classList.remove("hide");
  educationLeft.classList.add("hide");
  educationRight.classList.add("hide");
  profileLeft.classList.add("hide");
  profileRight.classList.add("hide");
};

// EDUCATION
const coderHouse = document.querySelector(".coder-house");
const coderHouseInfo = document.querySelector(".coderHouse-info");
const udemy = document.querySelector(".udemy");
const udemyInfo = document.querySelector(".udemy-info");

coderHouse.addEventListener("click", () => {
  coderHouseInfo.classList.toggle("hide");
  udemyInfo.classList.add("hide");
});
udemy.addEventListener("click", () => {
  udemyInfo.classList.toggle("hide");
  coderHouseInfo.classList.add("hide");
});

// SKILLS HTML
const skills = [
  {
    skill: "HTML",
    percentage: 90,
  },
  {
    skill: "CSS",
    percentage: 90,
  },
  {
    skill: "JAVASCRIPT",
    percentage: 80,
  },
  {
    skill: "FIGMA",
    percentage: 60,
  },
  {
    skill: "PYTHON",
    percentage: 80,
  },
  {
    skill: "REACT",
    percentage: 70,
  },
  {
    skill: "NODEJS",
    percentage: 40,
  },
  {
    skill: "MONGODB",
    percentage: 40,
  },
];

const skillsContainer = document.querySelector(".tech-skills-bars");

function skillHTML(skills) {
  skills.forEach((skill) => {
    const techSkill = document.createElement("div");
    techSkill.className = "tech-skill";
    techSkill.innerHTML = `
            <p>${skill.skill}</p>
            <div class="skill-bar">
                <div class="skill-bar-in ${skill.skill.toLowerCase()}-bar"></div>
            </div>
        `;
    skillsContainer.appendChild(techSkill);
  });
}
skillHTML(skills);

// SWIPER
let swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
