// NAVBAR
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navLink");

window.addEventListener("scroll", () => {
  let currentSection = "home";
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 100) {
      currentSection = section.id;
    }
  });
  navLinks.forEach((link) => {
    if (link.href.includes(currentSection)) {
      document.querySelector(".active").classList.remove("active");
      link.classList.add("active");
    }
  });
});

const openMenuBtn = document.querySelector(".openMenu");
const closeMenuBtn = document.querySelector(".closeMenu");
const menuItems = document.querySelector(".menuItems");

openMenuBtn.addEventListener("click", () => {
  console.log("open");
  openMenuBtn.classList.toggle("menuBtn");
  closeMenuBtn.classList.toggle("menuBtn");
  menuItems.classList.add("visible");
});
closeMenuBtn.addEventListener("click", () => {
  console.log("close");
  openMenuBtn.classList.toggle("menuBtn");
  closeMenuBtn.classList.toggle("menuBtn");
  menuItems.classList.remove("visible");
});

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
// Agregar animación a coderHouseInfo y a udemyInfo cuando aparezca.
const coderHouse = document.querySelector(".coder-house");
const coderHouseInfo = document.querySelector(".coderHouse-info");
const coderArrow = document.querySelector(".coderDown");
const udemy = document.querySelector(".udemy");
const udemyInfo = document.querySelector(".udemy-info");
const udemyArrow = document.querySelector(".udemyDown");

coderHouse.addEventListener("click", () => {
  coderHouseInfo.classList.toggle("hide");
  coderArrow.classList.toggle("arrowRotation");
  udemyInfo.classList.add("hide");
});
udemy.addEventListener("click", () => {
  udemyInfo.classList.toggle("hide");
  udemyArrow.classList.toggle("arrowRotation");
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
    skill: "REACTJS",
    percentage: 70,
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
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
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

// FORM
const contactForm = document.getElementById("contactForm");
const inputName = document.querySelector("#fName-input");
const inputLastName = document.querySelector("#lName-input");
const inputEmail = document.querySelector("#email-input");
const inputTextarea = document.querySelector("#message-input");
const inputSubmit = document.querySelector("#submitForm");
//Delete button
const deleteForm = document.querySelector("#delete-message");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  inputSubmit.value = "Sending...";
  if (
    !inputName.value ||
    !inputLastName.value ||
    !inputEmail.value ||
    !inputTextarea.value
  ) {
    swal("UPS!", "Please fill the form...", "error");
    inputSubmit.value = "Send!";
  } else if (
    inputName.value.length < 3 ||
    inputLastName.value.length < 3 ||
    inputEmail.value.length < 18 ||
    inputTextarea.value.length < 5
  ) {
    swal("UPS!", "Check your info...", "warning");
    inputSubmit.value = "Send!";
  } else {
    emailjs.sendForm("service_xtlzrle", "template_3nbbw8a", contactForm).then(
      () => {
        inputSubmit.value = "Send!";
        swal("SENT!", "I will contact you as soon as possible", "success");
        contactForm.reset();
      },
      (err) => {
        inputSubmit.value = "Send!";
        swal("UPS!", "Something went wrong!", "error");
      }
    );
  }
});

deleteForm.onclick = () => {
  inputSubmit.value = "Send!";
  contactForm.reset();
};
