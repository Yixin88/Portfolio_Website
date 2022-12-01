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
