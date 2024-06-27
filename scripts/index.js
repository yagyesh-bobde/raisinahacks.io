// document.addEventListener("DOMContentLoaded", () => {
//     setTimeout(() => {
//       document.getElementById("modal").style.display = "none !important";
//     }, 3000);
// })
// document.onload = () => {
//   // document
//   // .getElementById("preregisterbtn")
//   // .addEventListener("click", submitForm);
  
// }


const modalClose = document.getElementById("modal-close");
modalClose.addEventListener("click", () => {
  document.getElementById("modal").style.display = "none";
  let t3 = gsap.timeline();
  t3.to("#content", {
    scale: 1,
    duration: 1,
    delay: -0.4,
    ease: Circ.easeInOut,
  }).to("#soon", {
    x: 0,
    duration: 0.5,
    delay: -0.5,
    ease: Circ.easeInOut,
  });
});


const closeModal = () => {
  document.getElementById("modal").style.display = "none";
  let t3 = gsap.timeline();
  t3.to("#content", {
    scale: 1,
    duration: 1,
    delay: -0.4,
    ease: Circ.easeInOut,
  }).to("#soon", {
    x: 0,
    duration: 0.5,
    delay: -0.5,
    ease: Circ.easeInOut,
  }).to("#socials", {
    scale: 1,
    duration: 0.1,
    delay: -1,
    ease: Circ.easeInOut,
  })
};


function submitForm() {
  let email = document.getElementById("email").value;
  console.log("alksdjf")
  if (email === "" || email === null || email === undefined || !email.toString().includes("@") || !email.toString().includes(".") ){
    // alert("Please enter your email address");
    document.getElementById("email").value = ""
    showToast("Please enter a valid email address");
    return;
  }
  // submit email to form
  const url =
    "https://docs.google.com/forms/d/e/1FAIpQLScn1KM92pTFLYJkrJHJ9_FSZ4kic-con2I4_VUwoZSd9H396g/formResponse?usp=pp_url&entry.1076367748=";

  showToast("Wohoo 🎉! You have joined the waitlist for raisina hacks.");
  fetch(url + email)
  document.getElementById("email").value = "";
  // modal.style.display = "none";
  return;
} 


function showToast(title) {
  let toast = document.getElementById("toast");
  let toastTitle = document.getElementById("toast-title");

  toastTitle.innerHTML = title;
  toast.style.display = "block";


  setTimeout(() => {
    toast.style.display = "none";
  }, 2000);
}



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
    duration: 0.01,
    delay: -1,
    scale: 1,
    ease: Circ.easeInOut,
  })
  .to("#modal-dialog", {
    opacity: 1, 
    duartion: 0.2,
    delay: -0.5,
    ease: Circ.easeInOut,
  })
  