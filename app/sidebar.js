export const sidebar = () => {
  const hamburgerMenu = document.querySelector("#hamburger-button");
  const sidebar = document.querySelector("#sidebar");

  hamburgerMenu.addEventListener("click", () => {
    const currentState = hamburgerMenu.getAttribute("data-state");

    if (!currentState || currentState === "closed") {
      hamburgerMenu.setAttribute("data-state", "opened");
      hamburgerMenu.setAttribute("aria-expanded", "true");
      sidebar.style.translate = "0%";
    } else {
      hamburgerMenu.setAttribute("data-state", "closed");
      hamburgerMenu.setAttribute("aria-expanded", "false");
      sidebar.style.translate = "100%";
    }
  });
};
