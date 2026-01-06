// Popup close functionality
document.getElementById("close-pop-up-btn").addEventListener("click", function () {
    document.getElementById("divpopup").style.display = "none";
});

  document.addEventListener("DOMContentLoaded", function () {
        function t() {
            window.scrollTo({ top: 0, behavior: "smooth" });
            let t = document.getElementById("submit-btn");
            t && t.click();
            let n = document.getElementById("email");
            n && n.focus();
        }
        ["btn-1", "btn-2", "btn-3", "btn-4", "btn-5", "btn-6", "btn-7", "btn-8, btn-9"].forEach((n) => {
            let l = document.getElementById(n);
            l && l.addEventListener("click", t);
        });
    }),

// Accordion functionality
document.addEventListener("DOMContentLoaded", function () {
    let accordionCheckboxes = document.querySelectorAll(".accordion .checkbox");
    accordionCheckboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", function () {
            if (this.checked) {
                accordionCheckboxes.forEach((cb) => {
                    if (cb !== this) cb.checked = false;
                });
            }
        });
    });
});

// Counter animations
document.addEventListener("DOMContentLoaded", function () {
    // Counter 1
    let counter1 = document.getElementById("counter");
    let observer1 = new IntersectionObserver(
        function (entries) {
            let count, interval;
            if (entries[0].isIntersecting) {
                count = 0;
                interval = setInterval(function () {
                    count++;
                    counter1.textContent = count + "+";
                    if (count >= 15) clearInterval(interval);
                }, 100);
                observer1.disconnect();
            }
        },
        { threshold: 0.5 }
    );
    counter1 && observer1.observe(counter1);

    // Counter 2
    let counter2 = document.getElementById("counter1");
    let observer2 = new IntersectionObserver(
        function (entries) {
            let count, interval;
            if (entries[0].isIntersecting) {
                count = 0;
                interval = setInterval(function () {
                    count++;
                    counter2.textContent = count + "+";
                    if (count >= 20) clearInterval(interval);
                }, 100);
                observer2.disconnect();
            }
        },
        { threshold: 0.5 }
    );
    counter2 && observer2.observe(counter2);

    // Counter 3
    let counter3 = document.getElementById("counter2");
    let observer3 = new IntersectionObserver(
        function (entries) {
            let count, interval;
            if (entries[0].isIntersecting) {
                count = 100;
                interval = setInterval(function () {
                    count++;
                    counter3.textContent = count + "+";
                    if (count >= 200) clearInterval(interval);
                }, 20);
                observer3.disconnect();
            }
        },
        { threshold: 0.5 }
    );
    counter3 && observer3.observe(counter3);

    // Counter 4
    let counter4 = document.getElementById("counter3");
    let observer4 = new IntersectionObserver(
        function (entries) {
            let count, interval;
            if (entries[0].isIntersecting) {
                count = 0;
                interval = setInterval(function () {
                    count++;
                    counter4.innerHTML = count + "<span>/10</span>";
                    if (count >= 8) clearInterval(interval);
                }, 100);
                observer4.disconnect();
            }
        },
        { threshold: 0.5 }
    );
    counter4 && observer4.observe(counter4);
});

// Tab functionality
const tabs = document.querySelector(".tabs");
const btns = document.querySelectorAll(".button");
const articles = document.querySelectorAll(".content");

function openTab(tabId) {
    document.querySelectorAll(".tab-content").forEach((tab) => tab.classList.remove("active"));
    document.querySelectorAll(".tab-btn").forEach((btn) => btn.classList.remove("active"));
    document.getElementById(tabId).classList.add("active");
    event.currentTarget.classList.add("active");
}

tabs && tabs.addEventListener("click", function (event) {
    let tabId = event.target.dataset.id;
    if (tabId) {
        let tabNumber = tabId.split("p")[1];
        btns.forEach((btn) => btn.classList.remove("live"));
        btns[tabNumber - 1].classList.add("live");
        articles.forEach((article) => article.classList.remove("live"));
        document.getElementById(tabId).classList.add("live");
    }
});

// Gallery functionality - FIXED VERSION
document.addEventListener("DOMContentLoaded", function() {
    const galleryContainer = document.querySelector(".gallery-container");
    if (!galleryContainer) return;

    const gallery = document.querySelector(".gallery");
    const gallerySlides = Array.from(gallery.querySelectorAll(".a-div"));

    let currentIndex = 0;
    const galleryTotalSlides = gallerySlides.length;
    const visibleSlides = 3;
    let slideGap = 35;
    let gallerySlideWidth = gallerySlides[0].clientWidth;

    // Set container width
    galleryContainer.style.width = (3 * gallerySlideWidth + 2 * slideGap) + "px";

    // Clone first and last slides for infinite loop
    const galleryFirstClone = gallerySlides[0].cloneNode(true);
    const galleryLastClone = gallerySlides[galleryTotalSlides - 1].cloneNode(true);

    gallery.appendChild(galleryFirstClone);
    gallery.insertBefore(galleryLastClone, gallerySlides[0]);

    const updatedGallerySlides = Array.from(gallery.querySelectorAll(".a-div"));

    // Get the dots container
    const dotsContainer = document.getElementById("dots-container12");
    // Clear any existing dots
    dotsContainer.innerHTML = '';

    // Create dots
    for (let i = 0; i < galleryTotalSlides; i++) {
        let dot = document.createElement("span");
        dot.classList.add("dot");
        dot.setAttribute("data-index", i);
        dot.addEventListener("click", () => moveGalleryTo(i));
        dotsContainer.appendChild(dot);
    }

    // Update dots active state
    function updateDots() {
        const dots = document.querySelectorAll("#dots-container12 .dot");
        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentIndex);
        });
    }

    // Move gallery function
    function moveGallery(direction) {
        const maxIndex = galleryTotalSlides - 1;
        
        currentIndex += direction;
        
        if (currentIndex < 0) {
            currentIndex = maxIndex;
        } else if (currentIndex > maxIndex) {
            currentIndex = 0;
        }
        
        updatedGallerySlides.forEach((slide) => {
            slide.style.transform = `translateX(-${currentIndex * gallerySlideWidth + slideGap * currentIndex}px)`;
            slide.style.transition = "transform 0.5s ease-in-out";
        });
        
        updateDots();
    }

    // Move to specific slide
    function moveGalleryTo(index) {
        currentIndex = index;
        updatedGallerySlides.forEach((slide) => {
            slide.style.transform = `translateX(-${currentIndex * gallerySlideWidth + slideGap * currentIndex}px)`;
            slide.style.transition = "transform 0.5s ease-in-out";
        });
        updateDots();
    }

    // Initialize dots and gallery position
    updateDots();

    // Handle window resize
    window.addEventListener('resize', function() {
        gallerySlideWidth = gallerySlides[0].clientWidth;
        galleryContainer.style.width = (3 * gallerySlideWidth + 2 * slideGap) + "px";
        moveGalleryTo(currentIndex);
    });

    // Make moveGallery function globally available
    window.moveGallery = moveGallery;
});

// Tab section functionality
let tabss = document.querySelectorAll(".tab-sec8");
let containers = document.querySelectorAll(".logo-container");
let currentIndexx = 0;

function showTab(index) {
    tabss.forEach((tab, i) => {
        tab.classList.toggle("active", i === index);
        containers[i].classList.toggle("active", i === index);
    });
    currentIndexx = index;
}

tabss.forEach((tab, index) => {
    tab.addEventListener("click", () => showTab(index));
});

document.getElementById("prevBtn") && document.getElementById("prevBtn").addEventListener("click", () => {
    showTab((currentIndexx = currentIndexx === 0 ? tabss.length - 1 : currentIndexx - 1));
});

document.getElementById("nextBtn") && document.getElementById("nextBtn").addEventListener("click", () => {
    showTab((currentIndexx = currentIndexx === tabss.length - 1 ? 0 : currentIndexx + 1));
});

// Testimonial slider
(() => {
    let interval;
    const container = document.querySelector(".slider-container23");
    if (!container) return;

    const slider = container.querySelector(".testimonial-slider");
    const slides = container.querySelectorAll(".testimonial");
    const totalSlides = slides.length;

    let currentIndex = 0;

    // Clone first and last slides for seamless looping
    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[totalSlides - 1].cloneNode(true);
    slider.appendChild(firstClone);
    slider.insertBefore(lastClone, slides[0]);

    // Initial position
    if (window.innerWidth > 768) {
        slider.style.transform = `translateX(calc(-100% + 18px))`;
    } else {
        slider.style.transform = `translateX(calc(-100% + 36px))`;
    }

    // Create navigation dots
    const dotContainer = document.querySelector(".slider-dot-container");
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (i === 0) dot.classList.add("active");
        dot.addEventListener("click", () => goToSlide(i));
        dotContainer.appendChild(dot);
    }

    const updateDots = (index) => {
        const dots = container.querySelectorAll(".dot");
        dots.forEach(dot => dot.classList.remove("active"));
        dots[index].classList.add("active");
    };

    const goToSlide = (index) => {
        currentIndex = index;
        if(window.innerWidth < 768) {
            slider.style.transition = "transform .5s ease-in-out";
            slider.style.transform = `translateX(calc(${-(100 * (currentIndex + 1))}% + ${36 * (currentIndex + 1)}px))`;
        } else {
            slider.style.transition = "transform 1.5s ease-in-out";
            slider.style.transform = `translateX(calc(${-(100 * (currentIndex + 1))}% - ${4 * (currentIndex)}px))`;
        }
        updateDots(currentIndex);
    };

    // Left / Right buttons
    const leftBtn = container.querySelector("#slideLeft");
    const rightBtn = container.querySelector("#slideRight");

    leftBtn && leftBtn.addEventListener("click", () => {
        stopAutoSlide();
        const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        goToSlide(prevIndex);
    });

    rightBtn && rightBtn.addEventListener("click", () => {
        stopAutoSlide();
        const nextIndex = (currentIndex + 1) % totalSlides;
        goToSlide(nextIndex);
    });

    const startAutoSlide = () => {
        if (!interval) {
            interval = setInterval(() => {
                const nextIndex = (currentIndex + 1) % totalSlides;
                goToSlide(nextIndex);
            }, 5000);
        }
    };

    const stopAutoSlide = () => {
        if (interval) {
            clearInterval(interval);
            interval = null;
        }
    };

    // Pause on hover
    container.addEventListener("mouseenter", stopAutoSlide);
    container.addEventListener("mouseleave", startAutoSlide);

    // Start autoplay
    startAutoSlide();
})();

// Testing accordion
const testing_accordion = document.getElementById("testing-accordion");
const show_accordion_btn = document.getElementById("show-more-accordion");

if (testing_accordion && show_accordion_btn) {
    testing_accordion.style.height = "0px";
    show_accordion_btn.addEventListener("click", () => {
        testing_accordion.style.height = "auto";
        show_accordion_btn.style.display = "none";
    });
}

// Custom slider
document.addEventListener("DOMContentLoaded", function () {
    let customSlider = document.getElementById("custom-slider");
    if (!customSlider) return;

    let customBtns = customSlider.querySelectorAll(".cus-tab-btn");
    let customWrappers = customSlider.querySelectorAll(".cus-tab-wrapper");
    
    customBtns.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            customBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            customWrappers.forEach(wrapper => wrapper.classList.remove("active"));
            customWrappers[index].classList.add("active");
        });
    });
});

// Zoom slider functionality
const sliderPlay = (sliderElement, zoom = false, withButtons = false) => {
    if (!sliderElement) return;

    let mask = sliderElement.querySelector(".mask");
    let navigationBtns = sliderElement.querySelector(".navigation_btns");
    let slides = Array.from(mask.querySelectorAll(".zoom_slide"));
    let currentSlide = 0;
    let allSlides = Array.from(sliderElement.querySelectorAll(".zoom_slide"));

    if (withButtons) {
        let leftBtn = sliderElement.querySelector(".slider-btn.left");
        let rightBtn = sliderElement.querySelector(".slider-btn.right");

        leftBtn && leftBtn.addEventListener("click", () => {
            currentSlide > 0 && updateSlide(currentSlide - 1);
        });

        rightBtn && rightBtn.addEventListener("click", () => {
            currentSlide < slides.length - 1 && updateSlide(currentSlide + 1);
        });
    }

    let updateSlide = (index) => {
        currentSlide = index;
        let dots = Array.from(navigationBtns.querySelectorAll(".dot"));
        dots.forEach(dot => dot.classList.remove("active"));
        dots[index].classList.add("active");

        let offset = 32;
        allSlides.forEach((slide, i) => {
            slide.classList.remove("active");
            slide.style.transform = zoom ? 
                `translateX(calc( ${-100 * index}% - ${16 * index}px + ${offset}px )) scaleY(0.9)` : 
                `translateX(calc( ${-100 * index}% - ${16 * index}px + ${offset}px )) scaleY(1)`;
            slide.style.transition = "transform 0.5s ease-in-out";
        });

        allSlides[index].classList.add("active");
        allSlides[index].style.transform = `translateX(calc( ${-100 * index}% - ${16 * index}px + ${offset}px )) scaleY(1)`;
    };

    slides.forEach((slide, index) => {
        let dot = document.createElement("div");
        dot.classList.add("dot");
        if (slide.classList.contains("active")) dot.classList.add("active");
        dot.addEventListener("click", () => updateSlide(index));
        navigationBtns.appendChild(dot);
    });

    let touchStartX = 0;
    let touchEndX = 0;

    sliderElement.addEventListener("touchstart", function(event) {
        touchStartX = event.touches[0].clientX;
    });

    sliderElement.addEventListener("touchend", function(event) {
        touchEndX = event.changedTouches[0].clientX;
        if (touchEndX < touchStartX - 50 && currentSlide < slides.length - 1) {
            updateSlide(currentSlide + 1);
        } else if (touchEndX > touchStartX + 50 && currentSlide > 0) {
            updateSlide(currentSlide - 1);
        }
    });

    updateSlide(currentSlide);
    setInterval(() => {
        updateSlide((currentSlide + 1) % slides.length);
    }, 5000);
};

// Initialize sliders
document.addEventListener("DOMContentLoaded", () => {
    sliderPlay(document.querySelector("#zoom_slider"), true, true);
    sliderPlay(document.querySelector("#simpleSlider"), false, true);
});

// Popup functionality
const closePopupButton = document.getElementById("close-pop-up-btn");
closePopupButton && closePopupButton.addEventListener("click", () => {
    document.getElementById("divpopup").style.display = "none";
});

// CTA button functionality
// const ctaClickBtn = Array.from(document.querySelectorAll(".cta-click"));
// ctaClickBtn.forEach((btn) => {
//     btn.addEventListener("click", () => {
//         document.getElementById("firstname-2").focus();
//     });
// });


// YouTube lightbox
document.addEventListener("DOMContentLoaded", () => {
    Array.from(document.querySelectorAll(".youtube-light-box")).forEach((box) => {
        box.addEventListener("click", () => {
            let videoLink = box.getAttribute("data-link");
            let lightbox = document.querySelector(".lightbox-popup");
            let lightboxFrame = lightbox.querySelector(".lightbox-frame");
            let lightboxClose = lightbox.querySelector(".lightbox-close");

            lightbox.style.display = "flex";
            lightboxFrame.innerHTML = `<iframe width="600" height="337" src="${videoLink}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
            
            lightboxClose.addEventListener("click", () => {
                lightbox.style.display = "none";
            });
        });
    });
});

// YouTube slider
const sliderPlays = (sliderElement) => {
    if (!sliderElement) return;

    let mask = sliderElement.querySelector(".mask");
    let navigationBtns = sliderElement.querySelector(".navigation_btns");
    let slides = Array.from(mask.querySelectorAll(".youtube-slide"));
    let leftBtn = sliderElement.querySelector(".slider-btn.left");
    let rightBtn = sliderElement.querySelector(".slider-btn.right");
    let currentSlide = 0;

    let updateSlide = (index) => {
        currentSlide = index;
        let dots = Array.from(navigationBtns.querySelectorAll(".dot"));
        dots.forEach(dot => dot.classList.remove("active"));
        dots[currentSlide] && dots[currentSlide].classList.add("active");

        let translateX = -90 * currentSlide;
        mask.style.transform = `translateX(${translateX}%)`;
        mask.style.transition = "transform 0.5s ease-in-out";
    };

    function nextSlide() {
        updateSlide((currentSlide + 1) % slides.length);
    }

    function prevSlide() {
        updateSlide((currentSlide - 1 + slides.length) % slides.length);
    }

    slides.forEach((slide, index) => {
        let dot = document.createElement("div");
        dot.classList.add("dot");
        if (index === 0) dot.classList.add("active");
        dot.addEventListener("click", () => updateSlide(index));
        navigationBtns.appendChild(dot);
    });

    let touchStartX = 0;
    let touchEndX = 0;

    sliderElement.addEventListener("touchstart", (event) => {
        touchStartX = event.touches[0].clientX;
    });

    sliderElement.addEventListener("touchend", (event) => {
        touchEndX = event.changedTouches[0].clientX;
        if (touchEndX < touchStartX - 50) {
            nextSlide();
        } else if (touchEndX > touchStartX + 50) {
            prevSlide();
        }
    });

    leftBtn && leftBtn.addEventListener("click", prevSlide);
    rightBtn && rightBtn.addEventListener("click", nextSlide);

    setInterval(nextSlide, 5000);
};

document.addEventListener("DOMContentLoaded", () => {
    sliderPlays(document.querySelector(".youtube_slider"));
});

// Hamburger menu
const hamburgerBtn = document.getElementById("hamburger-btn");
const hamburgerIcon = document.getElementById("hamburger-icon");
const navMenu = document.querySelector(".nav1");

if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        navMenu.classList.contains("active") ? 
            (hamburgerIcon.innerHTML = "&times;") : 
            (hamburgerIcon.innerHTML = "&#9776;");
    });
}

// Tab 7 functionality
document.addEventListener("DOMContentLoaded", function () {
    let tabs7 = document.querySelectorAll(".tab7");
    let tabContents7 = document.querySelectorAll(".tab-content7");
    
    tabs7.forEach((tab) => {
        tab.addEventListener("click", function () {
            tabs7.forEach(t => t.classList.remove("active"));
            tabContents7.forEach(t => t.classList.remove("active"));
            this.classList.add("active");
            document.getElementById(this.getAttribute("data-tab")).classList.add("active");
        });
    });
});

// View more/less logos
document.addEventListener("DOMContentLoaded", function () {
    var btnMore = document.querySelector(".view-more-btn.more");
    var btnLess = document.querySelector(".view-more-btn.less");
    var set2 = document.querySelector(".logo-set2");

    if (btnMore && btnLess && set2) {
        set2.style.display = "none";
        btnLess.style.display = "none";

        btnMore.addEventListener("click", function () {
            set2.style.display = "grid";
            btnMore.style.display = "none";
            btnLess.style.display = "block";
        });

        btnLess.addEventListener("click", function () {
            set2.style.display = "none";
            btnMore.style.display = "block";
            btnLess.style.display = "none";
        });
    }
});

// Mobile slider dots
document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".slider765");
    if (!slider) return;

    const slides = Array.from(slider.querySelectorAll(".slide3242"));
    const dotsContainer = document.querySelector(".slider-dots-mobile");

    let currentIndex = 0;

    // Create dots
    slides.forEach((_, i) => {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (i === 0) dot.classList.add("active");
        dot.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            dot.blur();

            slider.scrollTo({
                left: slides[i].offsetLeft,
                behavior: "smooth"
            });
        });
        dotsContainer.appendChild(dot);
    });

    const dots = Array.from(dotsContainer.querySelectorAll(".dot"));

    // Intersection Observer to track which slide is visible
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    currentIndex = slides.indexOf(entry.target);
                    dots.forEach((dot, i) => dot.classList.toggle("active", i === currentIndex));
                }
            });
        },
        { root: slider, threshold: 0.6 }
    );

    slides.forEach((slide) => observer.observe(slide));
});

// Custom tab button centering
const tabContainer = document.querySelector(".cus-tab-btn-container");
const tabs1 = document.querySelectorAll(".cus-tab-btn");

if (tabContainer && tabs1.length > 0) {
    tabs1.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs1.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            const containerRect = tabContainer.getBoundingClientRect();
            const tabRect = tab.getBoundingClientRect();

            const offset = (tabRect.left + tabRect.width / 2) - (containerRect.left + containerRect.width / 2);

            tabContainer.scrollTo({
                left: tabContainer.scrollLeft + offset,
                behavior: "smooth"
            });
        });
    });
}

// Section 5 slider dots
document.addEventListener("DOMContentLoaded", () => {
    const section5Slider = document.querySelector(".no-mobile .slider");
    const dotsContainer = document.querySelector(".slider-dots-section5");
    
    // Exit if either element doesn't exist
    if (!section5Slider || !dotsContainer) return;

    const slides = Array.from(section5Slider.querySelectorAll(".slide"));

    let currentIndex = 0;

    // Create dots
    slides.forEach((_, i) => {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (i === 0) dot.classList.add("active");
        dot.addEventListener("click", () => goToSlide(i));
        dotsContainer.appendChild(dot);
    });

    const dots = Array.from(dotsContainer.querySelectorAll(".dot"));

    function updateDots() {
        dots.forEach((d, i) => {
            d.classList.toggle("active", i === currentIndex);
        });
    }

    function goToSlide(index) {
        currentIndex = index;
        const offset = -section5Slider.clientWidth * index;
        section5Slider.style.transform = `translateX(${offset}px)`;
        updateDots();
    }

    // Resize Fix
    window.addEventListener("resize", () => {
        goToSlide(currentIndex);
    });
});

// Section 5 slider with proper button handling
let slideIndex = 0;
let isAnimating = false;

function moveSlide(direction) {
    if (isAnimating) return;
    isAnimating = true;

    const slider = document.querySelector('.section5 .slider');
    const slides = document.querySelectorAll('.section5 .slide');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    
    slideIndex += direction;
    
    // Infinite loop logic
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    } else if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    slider.style.transition = 'transform 0.5s ease-in-out';
    slider.style.transform = `translateX(-${100 * slideIndex}%)`;

    // Always show both buttons for infinite slider
    if (prevButton) prevButton.style.display = 'block';
    if (nextButton) nextButton.style.display = 'block';

    // Update dots if they exist
    const dotsContainer = document.querySelector('.slider-dots-section5');
    if (dotsContainer) {
        const dots = dotsContainer.querySelectorAll('.dot');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === slideIndex);
        });
    }

    setTimeout(() => {
        isAnimating = false;
    }, 500);
}

// Create section 5 dots
function createSection5Dots() {
    const section5 = document.querySelector('.section5');
    if (!section5) return;
    
    const slides = section5.querySelectorAll('.slide');
    const sliderContainer = section5.querySelector('.slider-container');
    
    // Remove existing dots
    const existingDots = section5.querySelector('.slider-dots-section5');
    if (existingDots) existingDots.remove();
    
    // Only create dots if there are slides
    if (slides.length === 0) return;
    
    // Create new dots
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'slider-dots-section5';
    
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            slideIndex = i;
            moveSlide(0);
        });
        dotsContainer.appendChild(dot);
    }
    
    sliderContainer.parentNode.insertBefore(dotsContainer, sliderContainer.nextSibling);
}

// Initialize buttons
function initializeButtons() {
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    
    if (prevButton) prevButton.style.display = 'block';
    if (nextButton) nextButton.style.display = 'block';
}

// Initialize on DOM load
document.addEventListener("DOMContentLoaded", function() {
    createSection5Dots();
    initializeButtons();
});

document.addEventListener("DOMContentLoaded", function () {

    const navLinks = document.querySelectorAll(".nav1 > a"); 
    const emailField = document.querySelector("#email10");
    const closeBtn = document.querySelector("#nav-email-close");
    const ctaBtn = document.querySelector("#submit-btn10");

    ctaBtn.addEventListener("click", function (e) {
        if (!emailField.classList.contains("open")) {
            e.preventDefault();

            emailField.classList.add("open");
            emailField.style.display = "block";

            navLinks.forEach(a => a.style.display = "none");

            closeBtn.style.display = "inline-block";
        }
    });

    closeBtn.addEventListener("click", function () {
        emailField.classList.remove("open");
        emailField.style.display = "none";

        navLinks.forEach(a => a.style.display = "inline-block");

        closeBtn.style.display = "none";
    });

});
