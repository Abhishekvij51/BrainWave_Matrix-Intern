// Toggle login form
document.getElementById('login-btn').addEventListener('click', function() {
    document.getElementById('loginForm').classList.add('active');
});

document.getElementById('close-login-form').addEventListener('click', function() {
    document.getElementById('loginForm').classList.remove('active');
});


document.getElementById('menu-btn').addEventListener('click', function() {
    const navbar = document.querySelector('.header .navbar');
    this.classList.toggle('fa-times'); // Toggle between hamburger and close icon
    navbar.classList.toggle('active'); // Toggle menu visibility
});


// Parallax effect on mouse move
document.querySelector('.home').onmousemove = (e) => {
    document.querySelectorAll('.home-parallax').forEach(elm => {
        let speed = elm.getAttribute('data-speed');

        let x = (window.innerWidth - e.pageX * speed) / 90; 
        let y = (window.innerHeight - e.pageY * speed) / 90;

        elm.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
};

document.querySelector('.home').onmouseleave = () => {
    document.querySelectorAll('.home-parallax').forEach(elm => {

        elm.style.transform = `translateX(0px) translateY(0px)`;
    });
};

var swiper = new Swiper(".vehicles-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    grabCursor:true,
    centeredSlides:true,
    autoplay: {
        delay:9500,
        disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
   breakpoints:{
    0:{
        slidesPerView: 1,
    },
    768:{
        slidesPerView: 2, 
    },
    991:{
        slidesPerView: 3,
    },
    },
  });

  var swiper = new Swiper(".featured-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    grabCursor:true,
    centeredSlides:true,
    autoplay: {
        delay:9500,
        disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
   breakpoints:{
    0:{
        slidesPerView: 1,
    },
    768:{
        slidesPerView: 2, 
    },
    991:{
        slidesPerView: 3,
    },
    },
    
  });

  var swiper = new Swiper(".review-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    grabCursor:true,
    centeredSlides:true,
    autoplay: {
        delay:9500,
        disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
   breakpoints:{
    0:{
        slidesPerView: 1,
    },
    768:{
        slidesPerView: 2, 
    },
    991:{
        slidesPerView: 3,
    },
    },
  });


