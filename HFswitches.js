var but1=document.querySelector("#but1");
var email1=document.querySelector("#email1");
var but2=document.querySelector("#but2");
var email2=document.querySelector("#email2");
// button harpreet pressed action
but1.addEventListener("click",function(){
		email1.textContent="mailharpreet38@gmail.com";
	    email1.style.color="black";
    });	


// button rajnish pressed action
but2.addEventListener("click",function(){
		email2.textContent="rajnishsachar@gmail.com";
	    email2.style.color="black";

	});	


//navbar scrolling action
$(function () {
        $(document).scroll(function () {
            var $nav = $("#mainNavbar");
            var $links=$(".navbar-dark .navbar-nav .nav-link");
            var $brand=$(".navbar-dark .navbar-brand");
            $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
            $links.css("color","white",$(this).scrollTop() > $nav.height());
            $brand.css("color","white",$(this).scrollTop() > $nav.height());
        });
    });