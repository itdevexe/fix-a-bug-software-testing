document.getElementById("close-pop-up-btn").addEventListener("click", function () {
    document.getElementById("divpopup").style.display = "none";
}),
    document.addEventListener("DOMContentLoaded", function () {
        function t() {
            window.scrollTo({ top: 0, behavior: "smooth" });
            let t = document.getElementById("submit-btn");
            t && t.click();
            let n = document.getElementById("email");
            n && n.focus();
        }
        ["btn-1", "btn-2", "btn-3", "btn-4", "btn-5", "btn-6", "btn-7", "btn-8"].forEach((n) => {
            let l = document.getElementById(n);
            l && l.addEventListener("click", t);
        });
    }),
    document.addEventListener("DOMContentLoaded", function () {
        let t = document.querySelectorAll(".accordion .checkbox");
        t.forEach((n) => {
            n.addEventListener("change", function () {
                this.checked &&
                    t.forEach((t) => {
                        t !== this && (t.checked = !1);
                    });
            });
        });
    }),
    document.addEventListener("DOMContentLoaded", function () {
        let t = document.getElementById("counter"),
            n = new IntersectionObserver(
                function (l) {
                    let r, s;
                    l[0].isIntersecting &&
                        ((r = 0),
                        (s = setInterval(function () {
                            r++, (t.textContent = r + "+"), r >= 14 && clearInterval(s);
                        }, 100)),
                        n.disconnect());
                },
                { threshold: 0.5 }
            );
        n.observe(t);
    }),
    document.addEventListener("DOMContentLoaded", function () {
        let t = document.getElementById("counter1"),
            n = new IntersectionObserver(
                function (l) {
                    let r, s;
                    l[0].isIntersecting &&
                        ((r = 0),
                        (s = setInterval(function () {
                            r++, (t.textContent = r + "+"), r >= 20 && clearInterval(s);
                        }, 100)),
                        n.disconnect());
                },
                { threshold: 0.5 }
            );
        n.observe(t);
    }),
    document.addEventListener("DOMContentLoaded", function () {
        let t = document.getElementById("counter2"),
            n = new IntersectionObserver(
                function (l) {
                    let r, s;
                    l[0].isIntersecting &&
                        ((r = 100),
                        (s = setInterval(function () {
                            r++, (t.textContent = r + "+"), r >= 200 && clearInterval(s);
                        }, 20)),
                        n.disconnect());
                },
                { threshold: 0.5 }
            );
        n.observe(t);
    }),
    document.addEventListener("DOMContentLoaded", function () {
        let t = document.getElementById("counter3"),
            n = new IntersectionObserver(
                function (l) {
                    let r, s;
                    l[0].isIntersecting &&
                        ((r = 0),
                        (s = setInterval(function () {
                            r++, (t.innerHTML = r + "<span>/10</span>"), r >= 8 && clearInterval(s);
                        }, 100)),
                        n.disconnect());
                },
                { threshold: 0.5 }
            );
        n.observe(t);
    });
const tabs = document.querySelector(".tabs"),
    btns = document.querySelectorAll(".button"),
    articles = document.querySelectorAll(".content");
function openTab(t) {
    document.querySelectorAll(".tab-content").forEach((t) => t.classList.remove("active")),
        document.querySelectorAll(".tab-btn").forEach((t) => t.classList.remove("active")),
        document.getElementById(t).classList.add("active"),
        event.currentTarget.classList.add("active");
}
tabs.addEventListener("click", function (t) {
    let n = t.target.dataset.id,
        l = n.split("p")[1];
    n &&
        (btns.forEach(function (t) {
            t.classList.remove("live");
        }),
        btns[l - 1].classList.add("live"),
        articles.forEach(function (t) {
            t.classList.remove("live");
        }),
        document.getElementById(n).classList.add("live"));
});
let index = 0;
const slides = document.querySelectorAll(".slide"),
    slider = document.querySelector(".slider"),
    prevButton = document.getElementById("prev"),
    nextButton = document.getElementById("next");
function moveSlide(t) {
    (index += t) <= 0 ? ((index = 0), (prevButton.style.display = "none")) : (prevButton.style.display = "block"),
        index >= slides.length - 1 ? ((index = slides.length - 1), (nextButton.style.display = "none")) : (nextButton.style.display = "block"),
        (slider.style.transform = `translateX(-${100 * index}%)`);
}
const galleryContainer = document.querySelector(".gallery-container"),
    gallery = document.querySelector(".gallery"),
    gallerySlides = Array.from(gallery.querySelectorAll(".a-div"));
let currentIndex = 0;
const galleryTotalSlides = gallerySlides.length,
    visibleSlides = 3;
let slideGap = 35,
    gallerySlideWidth = gallerySlides[0].clientWidth;
galleryContainer.style.width = 3 * gallerySlideWidth + 2 * slideGap + "px";
const galleryFirstClone = gallerySlides[0].cloneNode(!0),
    galleryLastClone = gallerySlides[galleryTotalSlides - 1].cloneNode(!0);
gallery.appendChild(galleryFirstClone), gallery.insertBefore(galleryLastClone, gallerySlides[0]);
const updatedGallerySlides = Array.from(gallery.querySelectorAll(".a-div")),
    dotsContainer = document.createElement("div");
dotsContainer.classList.add("dots-container12"), galleryContainer.appendChild(dotsContainer);
for (let e = 0; e < galleryTotalSlides; e++) {
    let t = document.createElement("span");
    t.classList.add("dot"), t.setAttribute("data-index", e), t.addEventListener("click", () => moveGalleryTo(e)), dotsContainer.appendChild(t);
}
function updateDots() {
    document.querySelectorAll(".dot").forEach((t, n) => {
        t.classList.toggle("active", n === currentIndex);
    });
}
function moveGallery(t) {
    let n = galleryTotalSlides - 1;
    (currentIndex += t) < 0 ? (currentIndex = n) : currentIndex > n && (currentIndex = 0),
        updatedGallerySlides.forEach((t) => (t.style.transform = `translateX(-${currentIndex * gallerySlideWidth + slideGap * currentIndex}px)`)),
        updateDots();
}
function moveGalleryTo(t) {
    (currentIndex = t), updatedGallerySlides.forEach((t) => (t.style.transform = `translateX(-${currentIndex * gallerySlideWidth + slideGap * currentIndex}px)`)), updateDots();
}
updateDots();
let tabss = document.querySelectorAll(".tab-sec8"),
    containers = document.querySelectorAll(".logo-container"),
    currentIndexx = 0;
function showTab(t) {
    tabss.forEach((n, l) => {
        n.classList.toggle("active", l === t), containers[l].classList.toggle("active", l === t);
    }),
        (currentIndexx = t);
}
tabss.forEach((t, n) => {
    t.addEventListener("click", () => showTab(n));
}),
    document.getElementById("prevBtn").addEventListener("click", () => {
        showTab((currentIndexx = 0 === currentIndexx ? tabss.length - 1 : currentIndexx - 1));
    }),
    document.getElementById("nextBtn").addEventListener("click", () => {
        showTab((currentIndexx = currentIndexx === tabss.length - 1 ? 0 : currentIndexx + 1));
    }),
    (() => {
        let interval;
        const container = document.querySelector(".slider-container23");
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
        }
        else {
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
            }
            else{
                slider.style.transition = "transform 1.5s ease-in-out";
                slider.style.transform = `translateX(calc(${-(100 * (currentIndex + 1))}% - ${4 * (currentIndex)}px))`;
            }
            updateDots(currentIndex);
        };
        const startAutoSlide = () => {
            if (!interval) {
                interval = setInterval(() => {
                    const nextIndex = (currentIndex + 1) % totalSlides;
                    goToSlide(nextIndex);
                }, 5000); // Slide every 5 seconds
            }
        };
        const stopAutoSlide = () => {
            if (interval) {
                clearInterval(interval); // Stop the interval
                interval = null;
            }
        };
        // Touch swipe support
        let startX = 0;
        let endX = 0;
        container.addEventListener("touchstart", (e) => {
            startX = e.touches[0].clientX;
            stopAutoSlide();  // Stop sliding when touch starts
        });
        container.addEventListener("touchend", (e) => {
            endX = e.changedTouches[0].clientX;
            if (endX < startX - 50 && currentIndex < totalSlides - 1) {
                goToSlide(currentIndex + 1); // Swipe left
            } else if (endX > startX + 50 && currentIndex > 0) {
                goToSlide(currentIndex - 1); // Swipe right
            }
            startAutoSlide();  // Restart auto-slide when touch ends
        });
        // Pause on hover (mouseenter and mouseleave)
        container.addEventListener("mouseenter", stopAutoSlide);
        container.addEventListener("mouseleave", startAutoSlide);
        // Start autoplay initially
        startAutoSlide();
    })();
const testing_accordion = document.getElementById("testing-accordion"),
    show_accordion_btn = document.getElementById("show-more-accordion");
(testing_accordion.style.height = "0px"),
    show_accordion_btn.addEventListener("click", () => {
        (testing_accordion.style.height = "auto"), (show_accordion_btn.style.display = "none");
    }),
    document.addEventListener("DOMContentLoaded", function () {
        let t = document.getElementById("custom-slider"),
            n = t.querySelectorAll(".cus-tab-btn"),
            l = t.querySelectorAll(".cus-tab-wrapper");
        n.forEach((t, r) => {
            t.addEventListener("click", () => {
                console.log("clicked"), n.forEach((t) => t.classList.remove("active")), t.classList.add("active"), l.forEach((t) => t.classList.remove("active")), l[r].classList.add("active");
            });
        });
    });
const sliderPlay = (t, n, l = !1) => {
    let r = t.querySelector(".mask"),
        s = t.querySelector(".navigation_btns"),
        a = Array.from(r.querySelectorAll(".zoom_slide")),
        c = 0,
        o = Array.from(t.querySelectorAll(".zoom_slide"));
    if (l) {
        let i = t.querySelector(".slider-btn.left"),
            d = t.querySelector(".slider-btn.right");
        i?.addEventListener("click", () => {
            c > 0 && u(c - 1);
        }),
            d?.addEventListener("click", () => {
                c < a.length - 1 && u(c + 1);
            });
    }
    console.log(o.length);
    let u = (t) => {
        c = t;
        let l = Array.from(s.querySelectorAll(".dot"));
        l.forEach((t) => t.classList.remove("active")), l[t].classList.add("active");
        let r = 32;
        o.forEach((l) => {
            l.classList.remove("active"),
                (l.style.transform = n ? `translateX(calc( ${-100 * t}% - ${16 * t}px + ${r}px )) scaleY(0.9)` : `translateX(calc( ${-100 * t}% - ${16 * t}px + ${r}px )) scaleY(1)`),
                (l.style.transition = "transform 0.5s ease-in-out");
        }),
            o[t].classList.add("active"),
            (o[t].style.transform = `translateX(calc( ${-100 * t}% - ${16 * t}px + ${r}px )) scaleY(1)`);
    };
    a.forEach((t, n) => {
        let l = document.createElement("div");
        l.classList.add("dot"), !0 === t.classList.contains("active") && l.classList.add("active"), l.addEventListener("click", () => u(n)), s.appendChild(l);
    });
    let y = 0,
        g = 0;
    t.addEventListener("touchstart", function (t) {
        y = t.touches[0].clientX;
    }),
        t.addEventListener("touchend", function (t) {
            (g = t.changedTouches[0].clientX) < y - 50 ? c < a.length - 1 && u(c + 1) : g > y + 50 && c > 0 && u(c - 1);
        }),
        u(c),
        setInterval(() => {
            u((c = (c + 1) % a.length));
        }, 5e3);
};
document.addEventListener("DOMContentLoaded", () => {
    sliderPlay(document.querySelector("#zoom_slider"), (zoom = !0), !0), sliderPlay(document.querySelector("#simpleSlider"), (zoom = !1), !0);
});
const closePopupButton = document.getElementById("close-pop-up-btn");
closePopupButton.addEventListener("click", () => {
    document.getElementById("divpopup").style.display = "none";
});
const ctaClickBtn = Array.from(document.querySelectorAll(".cta-click"));
ctaClickBtn.forEach((t) => {
    t.addEventListener("click", () => {
        document.getElementById("firstname-2").focus();
    });
}),
    document.addEventListener("DOMContentLoaded", () => {
        Array.from(document.querySelectorAll(".youtube-light-box")).forEach((t) => {
            t.addEventListener("click", () => {
                let n = t.getAttribute("data-link"),
                    l = document.querySelector(".lightbox-popup"),
                    r = l.querySelector(".lightbox-frame"),
                    s = l.querySelector(".lightbox-close");
                (l.style.display = "flex"),
                    (r.innerHTML = `<iframe width="600" height="337" src="${n}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`),
                    s.addEventListener("click", () => {
                        l.style.display = "none";
                    });
            });
        });
    });
const sliderPlays = (t) => {
    let n = t.querySelector(".mask"),
        l = t.querySelector(".navigation_btns"),
        r = Array.from(n.querySelectorAll(".youtube-slide")),
        s = t.querySelector(".slider-btn.left"),
        a = t.querySelector(".slider-btn.right"),
        c = 0;
    console.log(r.length);
    let o = (t) => {
        c = t;
        let r = Array.from(l.querySelectorAll(".dot"));
        r.forEach((t) => t.classList.remove("active")), r[c] && r[c].classList.add("active");
        let s = -100 * c;
        (n.style.transform = `translateX(${s}%)`), (n.style.transition = "transform 0.5s ease-in-out");
    };
    function i() {
        o((c = (c + 1) % r.length));
    }
    function d() {
        o((c = (c - 1 + r.length) % r.length));
    }
    r.forEach((t, n) => {
        let r = document.createElement("div");
        r.classList.add("dot"), 0 === n && r.classList.add("active"), r.addEventListener("click", () => o(n)), l.appendChild(r);
    });
    let u = 0,
        y = 0;
    t.addEventListener("touchstart", (t) => {
        u = t.touches[0].clientX;
    }),
        t.addEventListener("touchend", (t) => {
            (y = t.changedTouches[0].clientX) < u - 50 ? i() : y > u + 50 && d();
        }),
        s && s.addEventListener("click", d),
        a && a.addEventListener("click", i),
        setInterval(i, 5e3);
};
document.addEventListener("DOMContentLoaded", () => {
    sliderPlays(document.querySelector(".youtube_slider"));
});
const hamburgerBtn = document.getElementById("hamburger-btn"),
    hamburgerIcon = document.getElementById("hamburger-icon"),
    navMenu = document.querySelector(".nav1");
hamburgerBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active"), navMenu.classList.contains("active") ? (hamburgerIcon.innerHTML = "&times;") : (hamburgerIcon.innerHTML = "&#9776;");
}),
    document.addEventListener("DOMContentLoaded", function () {
        let t = document.querySelectorAll(".tab7"),
            n = document.querySelectorAll(".tab-content7");
        t.forEach((l) => {
            l.addEventListener("click", function () {
                t.forEach((t) => t.classList.remove("active")), n.forEach((t) => t.classList.remove("active")), this.classList.add("active"), document.getElementById(this.getAttribute("data-tab")).classList.add("active");
            });
        });
    });
