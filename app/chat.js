export const chatToggle = () => {
  const toggle = document.querySelectorAll(".toggle-chat");
  const chatWindow = document.querySelector(".chat-window");
  const chatBubble = document.querySelector(".chat-bubble");
  const chatInput = document.querySelector("#chat-input");
  const chatLog = document.querySelector(".conversation-container");

  toggle.forEach((item) => {
    item.addEventListener("click", (e) => {
      chatWindow.classList.toggle("display-none");
      chatBubble.classList.toggle("display-none");
    });
  });

  chatInput?.addEventListener("submit", (e) => {
    e.preventDefault();
  });
};
