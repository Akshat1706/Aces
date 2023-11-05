document.addEventListener("mousemove", parallax);
const wrapper = document.querySelector('.wrapper')
const loginlink = document.querySelector('.login-link')
const registerlink = document.querySelector('.register-link')
const btnPop = document.querySelector('.signup')
const btnPopclose = document.querySelector('.icon-close')
var timer;

function parallax(e) {
    // Clear any previous timeout
    clearTimeout(timer);

    document.querySelectorAll(".image-background").forEach(function(move){
        var moving_value = move.getAttribute("data-value");
        var x = e.clientX * moving_value / 20;
        var y = e.clientY * moving_value / 20;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });

    // Set a timeout to reset the parallax effect after a certain period of mouse inactivity (e.g., 500 milliseconds)
    timer = setTimeout(resetParallax, 500);
}

function resetParallax() {
    document.querySelectorAll(".image-background").forEach(function(move){
        // Reset the transform to its original state
        move.style.transform = "translateX(0) translateY(0) rotate(-8deg)";
        
    });
}

registerlink.addEventListener('click', ()=> {
    wrapper.classList.add('active')
})


loginlink.addEventListener('click', ()=> {
    wrapper.classList.remove('active')
})


btnPop.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup')
})

btnPopclose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup')
})

