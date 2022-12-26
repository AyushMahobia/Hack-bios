
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