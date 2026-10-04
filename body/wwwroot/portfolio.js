
const populateDescription = {
    portfolioData : {
        description: "Hello, my name is Abraham, and I am a Bachelor of Science in Information Technology graduate specializing in Web Development. I have a strong foundation in HTML, CSS, JavaScript, and SQL, with hands-on experience developing responsive websites and database-driven applications through work projects and personal projects.In addition to my technical skills, I have a background in full stack developing and system analyst, which has helped me develop problem-solving, and communication skills. I am dedicated to continuously improving my abilities and building efficient, user-focused solutions. I am excited to apply my knowledge, gain professional experience, and contribute to a team where I can continue growing as a Web Developer."
    },
    myProjects:{
        description:"check out my recent works and database-driven we applications."
    }
}

// Wait for the HTML document to fully load, then inject the description
document.addEventListener("DOMContentLoaded", () => {
  const descriptionElement = document.getElementById("dynamic-description");
  const projectElement = document.getElementById("dynamic-project-description")
  
  if (descriptionElement || projectElement) {
    descriptionElement.textContent = populateDescription.portfolioData.description;
    projectElement.textContent = populateDescription.myProjects.description;
  }

});




// this is for scrolling animation from 
let lastScrollTop = 0;
const scrollThreshold = 100; // Minimum scroll distance before fading kicks in

window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (!header) return;

  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop && currentScroll > scrollThreshold) {
    // Scrolling DOWN -> Make header low opacity
    header.classList.add("header-faded");
  } else {
    // Scrolling UP -> Restore full opacity
    header.classList.remove("header-faded");
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, { passive: true });
