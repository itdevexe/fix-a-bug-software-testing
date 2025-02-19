

document.addEventListener("DOMContentLoaded", function () {
    let counterElement = document.getElementById("counter");
    let observer = new IntersectionObserver(
        function (entries) {
            if (entries[0].isIntersecting) {
                startCounter();
                observer.disconnect(); // Stop observing after animation starts
            }
        },
        { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    observer.observe(counterElement);

    function startCounter() {
        let count = 0;
        let target = 14;
        let interval = setInterval(function () {
            count++;
            counterElement.textContent = count + "+";
            if (count >= target) {
                clearInterval(interval);
            }
        }, 100); // Adjust speed (100ms per increment)
    }
});


document.addEventListener("DOMContentLoaded", function () {
    let counterElement = document.getElementById("counter1");
    let observer = new IntersectionObserver(
        function (entries) {
            if (entries[0].isIntersecting) {
                startCounter();
                observer.disconnect(); // Stop observing after animation starts
            }
        },
        { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    observer.observe(counterElement);

    function startCounter() {
        let count = 0;
        let target = 20;
        let interval = setInterval(function () {
            count++;
            counterElement.textContent = count + "+";
            if (count >= target) {
                clearInterval(interval);
            }
        }, 100); // Adjust speed (100ms per increment)
    }
});


document.addEventListener("DOMContentLoaded", function () {
    let counterElement = document.getElementById("counter2");
    let observer = new IntersectionObserver(
        function (entries) {
            if (entries[0].isIntersecting) {
                startCounter();
                observer.disconnect();
            }
        },
        { threshold: 0.5 }
    );

    observer.observe(counterElement);

    function startCounter() {
        let count = 100;
        let target = 200;
        let interval = setInterval(function () {
            count++;
            counterElement.textContent = count + "+";
            if (count >= target) {
                clearInterval(interval);
            }
        }, 20);
    }
});


document.addEventListener("DOMContentLoaded", function () {
    let counterElement = document.getElementById("counter3");
    let observer = new IntersectionObserver(
        function (entries) {
            if (entries[0].isIntersecting) {
                startCounter();
                observer.disconnect();
            }
        },
        { threshold: 0.5 }
    );

    observer.observe(counterElement);

    function startCounter() {
        let count = 0;
        let target = 8;
        let interval = setInterval(function () {
            count++;
            counterElement.innerHTML = count + "<span>/10</span>";
            if (count >= target) {
                clearInterval(interval);
            }
        }, 100);
    }
});


// tab section

const tabs = document.querySelector(".tabs");
const btns = document.querySelectorAll(".button");
const articles = document.querySelectorAll(".content");
tabs.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    const idnum=id.split("p")[1]
    if (id) {

        btns.forEach(function (btn) {
            btn.classList.remove("live");
        });
        btns[idnum-1].classList.add("live");

        articles.forEach(function (article) {
            article.classList.remove("live");
        });
        const element = document.getElementById(id);
        element.classList.add("live");
    }
});


function openTab(tabId) {
    // Remove active class from all tab contents
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    // Remove active class from all buttons
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    // Add active class to the clicked tab content
    document.getElementById(tabId).classList.add('active');
    // Add active class to the clicked button
    event.currentTarget.classList.add('active');
}


let index = 0;
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

function moveSlide(direction) {
    index += direction;
    if (index <= 0) {
        index = 0;
        prevButton.style.display = 'none';
    } else {
        prevButton.style.display = 'block';
    }
    if (index >= slides.length - 1) {
        index = slides.length - 1;
        nextButton.style.display = 'none';
    } else {
        nextButton.style.display = 'block';
    }
    slider.style.transform = `translateX(-${index * 100}%)`;
}














// let currentIndex = 0;
// const totalSlides = 6;
// const visibleSlides = 3;
// const gallery = document.querySelector('.gallery');
// const prevSlide = document.getElementById('prev-slide');
// const nextSlide = document.getElementById('next-slide');

// function moveGallery(direction) {
//     const maxIndex = totalSlides - visibleSlides;
//     currentIndex += direction;
//     if (currentIndex <= 0) {
//         currentIndex = 0;
//         prevSlide.style.display = 'block';
//     } else {
//         prevSlide.style.display = 'block';
//     }
//     if (currentIndex >= maxIndex) {
//         currentIndex = maxIndex;
//         nextSlide.style.display = 'block';
//     } else {
//         nextSlide.style.display = 'block';
//     }
//     gallery.style.transform = `translateX(-${(currentIndex * 100) / visibleSlides}%)`;
// }








const galleryContainer = document.querySelector('.gallery-container');

const gallery = document.querySelector('.gallery');
const gallerySlides = Array.from(gallery.querySelectorAll('.a-div'));
let currentIndex = 0;
const galleryTotalSlides = gallerySlides.length;
const visibleSlides = 3;
let slideGap = 35;
let gallerySlideWidth = gallerySlides[0].clientWidth;

galleryContainer.style.width = `${(gallerySlideWidth*visibleSlides)+(slideGap*(visibleSlides-1))}px`;

const galleryFirstClone = gallerySlides[0].cloneNode(true);
const galleryLastClone = gallerySlides[galleryTotalSlides - 1].cloneNode(true);
gallery.appendChild(galleryFirstClone);
gallery.insertBefore(galleryLastClone, gallerySlides[0]);

const updatedGallerySlides= Array.from(gallery.querySelectorAll('.a-div'));

function moveGallery(direction) {
    const maxIndex = galleryTotalSlides-1;
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = maxIndex;
    } else if (currentIndex > maxIndex) {
        currentIndex = 0;
    }
    updatedGallerySlides.forEach(slide=>slide.style.transform = `translateX(-${(currentIndex * gallerySlideWidth) + slideGap*currentIndex}px)`)
    // gallery.style.transform = `translateX(-${(currentIndex * gallerySlideWidth) + slideGap*currentIndex}px)`;
}


// section8
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

document.getElementById("prevBtn").addEventListener("click", () => {
    currentIndexx = (currentIndexx === 0) ? tabss.length - 1 : currentIndexx - 1;
    showTab(currentIndexx);
});

document.getElementById("nextBtn").addEventListener("click", () => {
    currentIndexx = (currentIndexx === tabss.length - 1) ? 0 : currentIndexx + 1;
    showTab(currentIndexx);
});














// section9


(() => {
    const sliderWrapper = document.querySelector(".slider-container23");
    const mask = sliderWrapper.querySelector(".testimonial-slider");
    const slides = sliderWrapper.querySelectorAll(".testimonial");
    const totalSlides = slides.length;
    let currentSlide = 0;
    const autoSlideDuration = 5000;
    let startX = 0;
    let endX = 0;
    let gap = 36;
    const slideWidth = slides[0].clientWidth
    let autoSlideInterval;
    

    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[totalSlides - 1].cloneNode(true);
    mask.appendChild(firstClone);
    mask.insertBefore(lastClone, slides[0]);
    // Set initial position
    mask.style.transform = `translateX(-${slideWidth + gap}px)`;

    // Create navigation dots
    const dotContainer = document.querySelector(".slider-dot-container");
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (i === 0) dot.classList.add("active");
        dot.addEventListener("click", () => goToSlide(i));
        dotContainer.appendChild(dot);
    }

    const updateDots = (slide) => {
        const dots = Array.from(sliderWrapper.querySelectorAll(".dot"))
        dots.forEach(dot=>dot.classList.remove("active"));
        dots[slide].classList.add("active")
        
    };

    const goToSlide = (slide) => {
        currentSlide = slide;
        mask.style.transition = "transform 0.5s ease-in-out";
        mask.style.transform = `translateX(-${(slideWidth * (currentSlide+1)) + (gap * (currentSlide+1))}px)`;
        updateDots(slide);
    };

    const autoSlide = () => {
       autoSlideInterval =  setInterval(() => {
            currentSlide = (currentSlide + 1) % totalSlides;
            goToSlide(currentSlide);
        }, autoSlideDuration);
    };

    const slideToLeft = () => {
        currentSlide = (currentSlide > 1) ? currentSlide - 1 : totalSlides - 1;
        goToSlide(currentSlide);
    };

    const slideToRight = () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        goToSlide(currentSlide);
    };

    // // Add event listeners for drag/swipe gestures
    // mask.addEventListener("touchstart", (e) => startX = e.touches[0].clientX);
    // mask.addEventListener("touchend", (e) => {
    //     endX = e.changedTouches[0].clientX;
    //     if (startX > endX + 50) {
    //         slideToRight();
    //     } else if (startX < endX - 50) {
    //         slideToLeft();
    //     }
    // });

    // mask.addEventListener("mousedown", (e) => startX = e.clientX);
    // mask.addEventListener("mouseup", (e) => {
    //     endX = e.clientX;
    //     if (startX > endX + 50) {
    //         slideToRight();
    //     } else if (startX < endX - 50) {
    //         slideToLeft();
    //     }
    // });

    let touchStartX = 0;
    let touchEndX = 0;
    // sliderWrapper.addEventListener("click", function(){
    //     clearInterval(autoSlideInterval)
    // })
    sliderWrapper.addEventListener("touchstart", function (event) {
        
        touchStartX = event.touches[0].clientX;
    });

    sliderWrapper.addEventListener("touchend", function (event) {
        touchEndX = event.changedTouches[0].clientX;
        handleSwipe();
    });

    function handleSwipe() {
        clearInterval(autoSlideInterval)
        const swipeThreshold = 50; // Minimum distance to detect swipe

        if (touchEndX < touchStartX - swipeThreshold) {
            console.log("Swiped Left",currentSlide);
            // Call your function for swipeLeft
            if(currentSlide<slides.length-1) {
                goToSlide(currentSlide+1);
            }
        } else if (touchEndX > touchStartX + swipeThreshold) {
            console.log("Swiped Right",currentSlide);
            // Call your function for swipeRight
            if(currentSlide>0) {
                goToSlide(currentSlide - 1);
            }
            
        }
    }

    autoSlide();
})();









/*
const slider765 = document.getElementById("slider2323");
let isDown = false;
let startX;
let scrollLeft;

let maxSlide = slider765.clientWidth-400;
slider765.style.transform = `translateX(14px)`;

slider765.addEventListener("touchstart", (e) => {
    isDown = true;
    startX = e.touches[0].pageX - slider765.offsetLeft;
    scrollLeft = slider765.offsetLeft;
});

slider765.addEventListener("touchmove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.touches[0].pageX - slider765.offsetLeft;
    const walk = (x - startX) * 1;
    let transformValue = scrollLeft + walk
    if(transformValue >=14){
        transformValue =14;
    }
    if(transformValue<= -1*maxSlide){
        transformValue = -1*maxSlide
    }
    slider765.style.transform = `translateX(${transformValue}px)`;
    console.log(transformValue)
});

slider765.addEventListener("touchend", () => {
    isDown = false;
});
*/


//Section 12

const testing_accordion= document.getElementById("testing-accordion")
const show_accordion_btn = document.getElementById("show-more-accordion");
testing_accordion.style.height="0px";
show_accordion_btn.addEventListener("click",()=>{
    testing_accordion.style.height="auto"
    show_accordion_btn.style.display="none"
})

document.addEventListener("DOMContentLoaded", function () {
    const custom_tab = document.getElementById("custom-slider")
    const custom_tab_btn = custom_tab.querySelectorAll(".cus-tab-btn")
    const custom_tab_tabs = custom_tab.querySelectorAll(".cus-tab-wrapper")

    custom_tab_btn.forEach((btn,index)=>{
        btn.addEventListener("click",()=>{
            console.log("clicked");
            
            custom_tab_btn.forEach(el=>el.classList.remove("active"))
            btn.classList.add("active")
            custom_tab_tabs.forEach(el=>el.classList.remove("active"))
            custom_tab_tabs[index].classList.add("active")
        })
    })
})

const sliderPlay=(Customslider,zoom)=>{
    const customMask = Customslider.querySelector('.mask')
    const navigationDOts = Customslider.querySelector('.navigation_btns');
    const slides = Array.from(customMask.querySelectorAll('.zoom_slide'));
    let currentSlideIndex = 0

    // const firstSlide = slides[0].cloneNode(true);
    // firstSlide.classList.remove("active")
    // const LastSlide = slides[slides.length-1].cloneNode(true)
    // customMask.appendChild(firstSlide);
    // customMask.insertBefore(LastSlide, slides[0]);

    const updatedSlides= Array.from(Customslider.querySelectorAll('.zoom_slide'))
    console.log(updatedSlides.length)

    const goToCusSlide =(index)=>{
        currentSlideIndex = index;
        const dots = Array.from(navigationDOts.querySelectorAll(".dot"))
        dots.forEach(dot=>dot.classList.remove("active"))
        dots[index].classList.add("active")
        const leftSpace = (updatedSlides[index].clientWidth * 18)/100;
        // console.log(leftSpace);
        
        updatedSlides.forEach(slide=>{
            slide.classList.remove("active")
            if(zoom){
                slide.style.transform=`translateX(calc( ${-100*(index)}% - ${16*(index)}px + ${leftSpace}px )) scaleY(0.9)`;
            }
            else{
                slide.style.transform=`translateX(calc( ${-100*(index)}% - ${16*(index)}px + ${leftSpace}px )) scaleY(1)`;
            }
        })
        updatedSlides[index].classList.add("active")
        updatedSlides[index].style.transform=`translateX(calc( ${-100*(index)}% - ${16*(index)}px + ${leftSpace}px )) scaleY(1)`
    }


    slides.forEach((slide,index)=>{
        const dot = document.createElement("div");
        // console.log("hello")
        dot.classList.add("dot");
        if (slide.classList.contains("active") === true) dot.classList.add("active");
        dot.addEventListener("click", () => goToCusSlide(index));
        navigationDOts.appendChild(dot);
    })

    let touchStartX = 0;
    let touchEndX = 0;

    Customslider.addEventListener("touchstart", function (event) {
        touchStartX = event.touches[0].clientX;
    });

    Customslider.addEventListener("touchend", function (event) {
        touchEndX = event.changedTouches[0].clientX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50; // Minimum distance to detect swipe

        if (touchEndX < touchStartX - swipeThreshold) {
            // console.log("Swiped Left",currentSlideIndex);
            // Call your function for swipeLeft
            if(currentSlideIndex<slides.length-1) {
                goToCusSlide(currentSlideIndex+1);
            }
        } else if (touchEndX > touchStartX + swipeThreshold) {
            // console.log("Swiped Right",currentIndex);
            // Call your function for swipeRight
            if(currentSlideIndex>0) {
                goToCusSlide(currentSlideIndex - 1);
            }
            
        }
    }
    
    goToCusSlide(currentSlideIndex)
}

document.addEventListener("DOMContentLoaded",()=>{
    sliderPlay(document.querySelector('#zoom_slider'),zoom=true)
    sliderPlay(document.querySelector('#simpleSlider'),zoom=false)
    sliderPlay(document.querySelector('#testimonialSlider'),zoom=false)
})




const closePopupButton = document.getElementById('close-pop-up-btn')
closePopupButton.addEventListener('click', () => {
    document.getElementById('divpopup').style.display = 'none';
});
const ctaClickBtn = Array.from(document.querySelectorAll('.cta-click'))
ctaClickBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        document.getElementById('firstname-2').focus();
    });
});

document.addEventListener("DOMContentLoaded",()=>{
    const youtubeLightboxs = Array.from(document.querySelectorAll('.youtube-light-box'));
    youtubeLightboxs.forEach(youtubeLightbox=>{
        youtubeLightbox.addEventListener('click', () => {
            let ylink = youtubeLightbox.getAttribute('data-link');
            const lightboxPopup = document.querySelector('.lightbox-popup');
            const lightboxFrame = lightboxPopup.querySelector('.lightbox-frame');
            const lightboxClose = lightboxPopup.querySelector('.lightbox-close');
            
            lightboxPopup.style.display="flex";
            lightboxFrame.innerHTML = `<iframe width="600" height="337" src="${ylink}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;

            lightboxClose.addEventListener('click', () => {
                lightboxPopup.style.display = 'none';
            });
        })
    })
})