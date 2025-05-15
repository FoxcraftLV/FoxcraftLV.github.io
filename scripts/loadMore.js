
const loadMoreBtn = document.getElementById("loadMore");
const hiddenProjects = document.querySelectorAll(".hidden-project");

loadMoreBtn.addEventListener("click", () => {
    hiddenProjects.forEach((project) => {
        project.classList.remove("hidden");
    });

    // Cache le bouton une fois les projets affichés
    loadMoreBtn.style.display = "none";
});

