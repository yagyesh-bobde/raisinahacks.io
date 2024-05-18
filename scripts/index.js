document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      document.getElementById("modal").style.display = "none !important";
    }, 3000);
})

const modalClose = document.getElementById("modal-close");

const closeModal = (e) => {
//   console.log("clicked");
  document.getElementById("modal").style.display = "none";
};
