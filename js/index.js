console.log("Built and designed by Ebun David-suberu");

document.querySelector(".mobile-hb").addEventListener("click", ()=>{
  document.querySelector(".mobile-hb").classList.add("remove-hb");
  document.querySelector(".mobile-hb").classList.remove("add-hb");
   document.querySelector(".mobile-close").classList.add("add-times");
   document.querySelector(".mobile-close").classList.remove("close-times");
  document.querySelector(".nav").classList.add("open");
  document.querySelector(".nav").classList.remove("close");
  document.querySelector(".back-drop").classList.add("fade-in");
})
 document.querySelector(".mobile-close").addEventListener("click", ()=>{
   console.log("you closed");
    document.querySelector(".mobile-hb").classList.add("add-hb");
   document.querySelector(".mobile-hb").classList.remove("remove-hb");
  document.querySelector(".mobile-close").classList.remove("add-times");
    document.querySelector(".mobile-close").classList.add("close-times");
   document.querySelector(".nav").classList.remove("open");
   document.querySelector(".nav").classList.add("close");
   document.querySelector(".back-drop").classList.remove("fade-in");
 })
