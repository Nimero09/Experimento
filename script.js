// Navigation bar effect on scroll
window.addEventListener("scroll", function(){
	const header = document.querySelector("header");
	header.classList.toggle("sticky", window.scrollY > 0);
})

// Services section - modal

const serviceModals = document.querySelectorAll(".service-modal");
const learnMoreBtn = document.querySelectorAll(".learn-more-btn");
const modalCloseBtn = document.querySelectorAll(".modal-close-btn");

var modal = function(modalClick) {
	serviceModals[modalClick].classList.add("active");
}

learnMoreBtn.forEach((learnMoreBtn, i) => {
	learnMoreBtn.addEventListener("click", () => {
		modal(i); 
	})
});

modalCloseBtn.forEach((modalCloseBtn) => {
	modalCloseBtn.addEventListener("click", () => {
		serviceModals.forEach((modalView) => {
			modalView.classList.remove("active");
		})
	})
})

// Portfolio section modal 

const portfolioModals = document.querySelectorAll(".portfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

var portModal = function(modalClick) {
	portfolioModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCards, i) => {
	imgCards.addEventListener("click", () => {
		portModal(i); 
	})
});

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
	portfolioCloseBtn.addEventListener("click", () => {
		portfolioModals.forEach((portfolioModalView) => {
			portfolioModalView.classList.remove("active");
		})
	})
})

// Website Dark/Light theme

const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
	document.body.classList.toggle("dark-theme");
	themeBtn.classList.toggle("sun");

	localStorage.setItem("saved-theme", getCurrentTheme());
	localStorage.setItem("saved-icon", getCurrentIcon());
})

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if(savedTheme) {
	document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
	themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun")
}

// Scroll to top button

const scrollTopBtn = document.querySelector(".scroll-btn");

window.addEventListener("scroll", function(){
	scrollTopBtn.classList.toggle("active", window.scrollY > 500);
})

scrollTopBtn.addEventListener("click", () => {
	window.scroll(0, 0);
})



// Navigation menu items active on page scroll **** My method ****
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".nav-items a")

window.addEventListener("scroll", () => {
	let current = ""
	sections.forEach( section => {
		const sectionTop = section.offsetTop - 50;
		const sectionHeight = section.offsetHeight;

		if(scrollY > sectionTop) {
			current = section.getAttribute("id");
		}
	})

	navLi.forEach( li => {
		li.classList.remove("active");
		if(li.classList.contains(current)) {
			li.classList.add("active");
		}
	})
})

// Resposive navigation menu toggle 
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");
const close = () => {
	navigation.classList.remove("active");
}

menuBtn.addEventListener("click", () => {
	navigation.classList.add("active");
})

closeBtn.addEventListener("click", close);

navItems.forEach((navItem) => {
	navItem.addEventListener("click", close);
})

// Scroll reveal animations
// Common reveal options to create reveal animations
ScrollReveal({
	// reset: true,
	distance: "60px",
	duration: 2500,
	delay: 100
});

// Target elements, and specify options to create reveal animations 

ScrollReveal().reveal(".home .info h2, .section-title-01, .section-title-02", {delay: 500, origin: "left"});
ScrollReveal().reveal(".home .info h3, .home .info p, .about-info .btn", { delay: 600, origin: "right" });
ScrollReveal().reveal(".home .info .btn", { delay: 700, origin: "bottom" });
ScrollReveal().reveal(".media-icons i, .contact-left li", { delay: 500, origin: "left", interval: 200 });
ScrollReveal().reveal(".home-img, .about-img", { delay: 500, origin: "bottom" });
ScrollReveal().reveal(".about .description, .contact-right", { delay: 600, origin: "right" });
ScrollReveal().reveal(".about .professional-list li, .copy-right", { delay: 500, origin: "right", interval: 200 });
ScrollReveal().reveal(".skills-description, .services-description, .contact-card, .contact-left h2", { delay: 700, origin: "left"});
ScrollReveal().reveal(".experience-card, .service-card, .education, .portfolio .img-card", { delay: 800, origin: "bottom", interval: 200});
ScrollReveal().reveal("footer .group", { delay: 500, origin: "top", interval: 200});


// Alternate nav-menu highlight when scrolling code

// window.addEventListener("scroll", () => {
// 	const sections = document.querySelectorAll("section");
// 	const scrollY = window.pageYOffSet;

// 	sections.forEach(current => {
// 		let sectionHeight = current.offsetHeight;
// 		let sectionTop = current.offsetTop - 50;
// 		let id = current.getAttribute("id");

// 		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
// 			document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active");
// 		}
// 		else {
// 			document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active")
// 		}
// 	})
// })