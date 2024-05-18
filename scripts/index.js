// document.addEventListener("DOMContentLoaded", () => {
//     setTimeout(() => {
//       document.getElementById("modal").style.display = "none !important";
//     }, 3000);
// })

const modalClose = document.getElementById("modal-close");
modalClose.addEventListener("click", () => {
  document.getElementById("modal").style.display = "none";
})

function revealToSpan() {
  document.querySelectorAll(".reveal").forEach(function (elem) {
    let spanParent = document.createElement("span");
    let spanChild = document.createElement("span");

    spanParent.classList.add("parent");
    spanChild.classList.add("child");

    spanParent.appendChild(spanChild);

    spanChild.innerHTML = elem.innerHTML;

    elem.innerHTML = "";
    elem.appendChild(spanParent);
  });
}




revealToSpan();

let tl = gsap.timeline();


tl.from(".child span", {
  x: "100%",
  duration: 1,
  // delay: 1,
  stagger: 0.2,
  ease: Power3.easeInOut,
})
  .to(".parent .child", {
    y: "-100%",
    duration: 1,
    ease: Circ.easeInOut,
  })
  .to("#loader", {
    height: 0,
    duration: 1,
    delay: -0.7,
    ease: Circ.easeInOut,
  })
  .to("#green", {
    height: "100%",
    top: 0,
    duration: 1,
    ease: Circ.easeInOut,
  })
  .to("#green", {
    top: "0",
    height: 0,
    duration: 1,
    delay: -0.4,
    ease: Circ.easeInOut,
  })
  .to("#modal", {
    display: "block",
    top: 0, 
    right: 0, 
    bottom: 0, 
    left: 0,
    duration: 1, 
    delay: -0.8,
    scale: 1,
    ease: Circ.easeInOut,
  })
  .to("#content", {
    scale: 1,
    duration: 1,
    delay: -0.4,
    ease: Circ.easeInOut,
  })
