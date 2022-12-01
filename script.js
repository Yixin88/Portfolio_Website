const newProjectCard = (projectTitle, imageName, description, projectLink, codeLink) => {
    const projectContainer = document.querySelector(".project");
    const container = document.createElement("div");
    container.classList.add("card_container");
    container.innerHTML = `<div class="image_container">
                                <img src="./assets/projects_screenshot/${imageName}.png" alt="Project Photo">
                           </div>
                           <h3>${projectTitle}</h3>
                           <p class="description">${description}</p>
                           <div class="project_btns">
                                <a href="${projectLink}"><button class="view_btn">View project</button></a>
                                <a href="${codeLink}"><button class="view_btn">Source Code</button></a>
                           </div>`;
    projectContainer.appendChild(container);
}

newProjectCard("The Bean Machine", 
                "coffee_landing_page", 
                "Coffee shop landing page including selction page, with the use of both flexbox and grid. Also animations and pseudo classes.", 
                "https://yixin88.github.io/Landing-page-coffee-/", 
                "https://github.com/Yixin88/Landing-page-coffee-");

newProjectCard("Ski Adventure Form", 
                "ski_form", 
                "Sign-up form for a Ski resort, with the use of input validation (e.g. Empty/invalid/improper format field) and use of all common input types.", 
                "https://yixin88.github.io/Ski-Adventure-Form/", 
                "https://github.com/Yixin88/Ski-Adventure-Form");

newProjectCard("Currency Exchange", 
                "currency", 
                "A web application that fetch latest currency exchange rate via API depending on the 2 currency you wish to exchange between.", 
                "https://yixin88.github.io/Currency-Exchange-App/", 
                "https://github.com/Yixin88/Currency-Exchange-App");