$(document).ready(function(){$(".nav-button").click(function(){$(".nav-button").toggleClass("change")});$(window).scroll(function(){540<=$(this).scrollTop()?$(".nav-menu").addClass("custom-navbar"):$(".nav-menu").removeClass("custom-navbar")})});var innerWidth=window.innerWidth;if(920>innerWidth){var navbar=document.querySelector(".navbar-nav");navbar.addEventListener("click",function(){document.getElementById("nav-button-hamburger").click()})};
