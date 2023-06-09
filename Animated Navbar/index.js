const highlighter = document.createElement("div");
const nav =document.querySelector("nav");
const arrow = document.createElement("div");

nav.appendChild(highlighter);
nav.appendChild(arrow);

highlighter.classList.add("highlighter");
arrow.classList.add("arrow");

const a1 = document.getElementById("aa");
const a2 = document.getElementById("ab");
const a3 = document.getElementById("ac");
const a4 = document.getElementById("ad");
const a5 = document.getElementById("ae");

a1.addEventListener("mouseover",()=>{
    highlighter.style.transform="translateX(-28vmax)"
    arrow.style.transform="translateX(-28vmax)"
    a1.style.color="crimson";
    s2.style.color="black";
    s3.style.color="black";
    s4.style.color="black";
    s5.style.color="black";
})

a2.addEventListener("mouseover",()=>{
    highlighter.style.transform="translateX(-14vmax)"
    arrow.style.transform="translateX(-14vmax)"
    s1.style.color="black";
    a2.style.color="crimson";
    s3.style.color="black";
    s4.style.color="black";
    s5.style.color="black";
})

a3.addEventListener("mouseover",()=>{
    highlighter.style.transform="translateX(0)"
    arrow.style.transform="translateX(0vmax)"
    s1.style.color="black";
    s2.style.color="black";
    a3.style.color="crimson";
    s4.style.color="black";
    s5.style.color="black";
})

a4.addEventListener("mouseover",()=>{
    highlighter.style.transform="translateX(14vmax)"
    arrow.style.transform="translateX(14vmax)"
    s1.style.color="black";
    s2.style.color="black";
    s3.style.color="black";
    a4.style.color="crimson";
    s5.style.color="black";
})

a5.addEventListener("mouseover",()=>{
    highlighter.style.transform="translateX(28vmax)"
    arrow.style.transform="translateX(28vmax)"
    s1.style.color="black";
    s2.style.color="black";
    s3.style.color="black";
    s4.style.color="black";
    a5.style.color="crimson";
})