const open=document.querySelector("#open");
const close=document.querySelector("#close");
const nav=document.querySelector(".navigation");
const span=document.querySelector("#pannel");
const lists=document.querySelector("#nav_items");
const list=document.querySelectorAll(".nav_item");

open.addEventListener("click",(e)=>{
    open.classList.add("close");
    close.classList.remove("close");
    nav.classList.add("dock");
    span.classList.add("pannel");
    lists.classList.add("nav_items")
})
close.addEventListener("click",(e)=>{
    open.classList.remove("close");
    close.classList.add("close");
    nav.classList.remove("dock");
    span.classList.remove("pannel");
    lists.classList.remove("nav_items");
});

list.forEach((element)=>{
        element.addEventListener("click",()=>{
        open.classList.remove("close");
        close.classList.add("close");
        nav.classList.remove("dock");
        span.classList.remove("pannel");
        lists.classList.remove("nav_items");
    })
})