

const btnHam = document.querySelector('.ham-btn');
const btnTImes = document.querySelector('.times-btn');
const navBar = document.getElementById('nav-bar');

btnHam.addEventListener('click', function(){
    if(btnHam.className !== "")
    {
        btnHam.style.display = "none"; 
        btnTImes.style.display = "block";
        navBar.classList.add("show-nav");
    }
})

btnTImes.addEventListener('click', function(){
    if(btnHam.className !=="") 
    {
        this.style.display = "none";
        navBar.classList.remove("show-nav");
    }
})