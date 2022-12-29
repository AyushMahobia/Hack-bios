
const preventScroll = (e) => {
    e.preventDefault();
    e.stopPropagation();

    return false;
}
const menu_btn = document.querySelector('.menu-btn');
const navigation = document.querySelector('.navigation');
const navbar = document.querySelector('.navbar'); //just to prevent schroll behavior
let menuOpen = false;
menu_btn.addEventListener("click",()=>{
    if(!menuOpen){
        menu_btn.classList.add("open");
        navigation.classList.add("hamburger");
        navbar.addEventListener("wheel", preventScroll);
        menuOpen = true;
    }
    else{
        menu_btn.classList.remove("open");
        navigation.classList.remove("hamburger");
        menuOpen = false;
    }
});

navigation.addEventListener("click", () =>{
    menu_btn.classList.remove("open");
        navigation.classList.remove("hamburger");
        menuOpen = false;
})


// toggle accordian
const accOne = document.querySelector("#question1");
const ansOne = document.querySelector(".ans-one");
const plusOne = document.querySelector("#plus-one");
accOne.addEventListener("click", () =>{
    ansOne.classList.toggle('open-accordian');
    plusOne.classList.toggle('rotate-plus');
})

const accTwo = document.querySelector("#question2");
const ansTwo = document.querySelector(".ans-two");
const plusTwo = document.querySelector("#plus-two");
accTwo.addEventListener("click", () =>{
    ansTwo.classList.toggle('open-accordian');
    plusTwo.classList.toggle('rotate-plus');
})

const accThree = document.querySelector("#question3");
const ansThree = document.querySelector(".ans-three");
const plusThree = document.querySelector("#plus-three");
accThree.addEventListener("click", () =>{
    ansThree.classList.toggle('open-accordian');
    plusThree.classList.toggle('rotate-plus');
})

const accFour = document.querySelector("#question4");
const ansFour = document.querySelector(".ans-four");
const plusFour = document.querySelector("#plus-four");
accFour.addEventListener("click", () =>{
    ansFour.classList.toggle('open-accordian');
    plusFour.classList.toggle('rotate-plus');
})

const accFive = document.querySelector("#question5");
const ansFive = document.querySelector(".ans-five");
const plusFive = document.querySelector("#plus-five");
accFive.addEventListener("click", () =>{
    ansFive.classList.toggle('open-accordian');
    plusFive.classList.toggle('rotate-plus');
})

const accSix = document.querySelector("#question6");
const ansSix = document.querySelector(".ans-six");
const plusSix = document.querySelector("#plus-six");
accSix.addEventListener("click", () =>{
    ansSix.classList.toggle('open-accordian');
    plusSix.classList.toggle('rotate-plus');
})
