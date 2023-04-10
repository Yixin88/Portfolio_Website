const menu_btn = document.querySelector('.hamburger');
const mobile_btn = document.querySelector('.mobile-nav');
const mobile_nav_btn = document.querySelectorAll('.mobile-nav-btn');

menu_btn.addEventListener('click', ()=> {
     menu_btn.classList.toggle('is-active');
     mobile_btn.classList.toggle('is-active');
})

mobile_nav_btn.forEach(btn => {
     btn.addEventListener('click', () => {
          mobile_btn.classList.remove('is-active');
          menu_btn.classList.remove('is-active');
     })
})

const toTop = document.querySelector('.to-top');

window.addEventListener('scroll', () => {
     if (window.pageYOffset > 100) {
          toTop.classList.add("active");
     } else {
          toTop.classList.remove("active");
     }
})


const newProjectCard = (projectTitle, imageName, description, projectLink, codeLink) => {
    const projectContainer = document.querySelector(".project");
    const container = document.createElement("div");
    container.classList.add("card_container");
    container.innerHTML = `<div class="image_container">
                                <img class='project_card_img' src="./assets/projects_screenshot/${imageName}.png" alt="Project Photo">
                           </div>
                           <div class="card_container_bottom">
                                <h3>${projectTitle}</h3>
                                <p class="description">${description}</p>
                                <div class="project_btns">
                                     <a target="_blank" href="${projectLink}"><button class="view_btn">View project</button></a>
                                     <a target="_blank" href="${codeLink}"><button class="view_btn">Source Code</button></a>
                                </div>
                           </div>`;
    projectContainer.appendChild(container);
}

newProjectCard("Amazon React Store", 
                "react-store", 
                "Online E-Commerce SPA store build using React, mimicing certain element from Amazon. From full inventory fetching via API to full URL routing with dedicated web pages", 
                "https://amazonreactspa.netlify.app/", 
                "https://github.com/Yixin88/react_store");

newProjectCard("Online Ecommerce Store", 
                "online-shop", 
                "A full mock up online E-Commerce store build using Vanilla JS, mimicing certain element from Amazon. From Sign-in page to full inventory fetching by category/search via mockup API", 
                "https://yixin88.github.io/E-Commerce_Store/", 
                "https://github.com/Yixin88/E-Commerce_Store");

newProjectCard("The Bean Machine", 
                "coffee_landing_page", 
                "Coffee shop landing page including selction page, with the use of both flexbox and grid. Also animations and pseudo classes.", 
                "https://yixin88.github.io/Landing-page-coffee-/", 
                "https://github.com/Yixin88/Landing-page-coffee-");

// newProjectCard("Ski Adventure Form", 
//                 "ski_form", 
//                 "Sign-up form for a Ski resort, with the use of input validation (e.g. Empty/invalid/improper format field) and use of all common input types.", 
//                 "https://yixin88.github.io/Ski-Adventure-Form/", 
//                 "https://github.com/Yixin88/Ski-Adventure-Form");

newProjectCard("Currency Exchange", 
                "currency", 
                "A web application that fetch latest currency exchange rate via API depending on the 2 currency you wish to exchange between.", 
                "https://yixin88.github.io/Currency-Exchange-App/", 
                "https://github.com/Yixin88/Currency-Exchange-App");

// newProjectCard("Calculator", 
//                 "calculator", 
//                 "A simple calculator project. First ever project build using javascript, core understanding of the logic and DOM manipulation.", 
//                 "https://yixin88.github.io/Calculator/", 
//                 "https://github.com/Yixin88/Calculator");

// newProjectCard("Sign Up Form", 
//                 "sign_up_form", 
//                 "First solo form project, part of The Odin Project curriculum, with the use of form validation and password matching validation.", 
//                 "https://yixin88.github.io/Sign-up-Form/", 
//                 "https://github.com/Yixin88/Sign-up-Form"); 

// newProjectCard("Cat Adoption Website", 
//                 "first_website", 
//                 "First website project, designing a dynamic website for cat adoption center, with key learning in site structuring and element position.", 
//                 "https://yixin88.github.io/First_website/", 
//                 "https://github.com/Yixin88/First_website"); 

// newProjectCard("Word Smith", 
//                 "word_smith", 
//                 "A simple application which allows tranforming the input text/paragraph to a different style, e.g. Bold, Underline, Italic, Colour Change.", 
//                 "https://yixin88.github.io/wordSmith/", 
//                 "https://github.com/Yixin88/wordSmith"); 



//setting smooth scrolling on project section                
const navHeight = document.querySelector(".big-nav").offsetHeight;
document.documentElement.style.setProperty('--scroll-padding', navHeight + 20 + "px")

//setting dynamic year on index page
const year = new Date().getFullYear()
document.getElementById('year').innerText = year;