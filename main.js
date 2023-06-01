const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const navItems = document.querySelector(".nav_items");

// open button
menuBtn.addEventListener("click", () => {
  navItems.style.display = "block";
  menuBtn.style.display = "none";
  closeBtn.style.display = "inline-block";
})

// close button
closeBtn.addEventListener("click", () => {
  navItems.style.display = "none";
  menuBtn.style.display = "inline-block";
  closeBtn.style.display = "none";
})

// FAQs toggler
const faqs = document.querySelectorAll(".faq");

faqs.forEach (faq => {
   faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    // transform icon
    const icon = faq.querySelector(".faq_icon i");
    if(icon.className === "uil uil-plus") {
      icon.className = "uil uil-minus";
    }else{
      icon.className = "uil uil-plus";
    }    
   })
})

// Styling the nav bar 
window.addEventListener("scroll", () => {
   document.querySelector("nav").classList.toggle("window-scroll", window.scrollY > 0);
})