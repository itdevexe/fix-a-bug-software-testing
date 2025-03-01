document.addEventListener("DOMContentLoaded", function () {
    function e() {
        let e = (window.innerWidth, 0);
        window.scrollTo({ top: e, behavior: "smooth" }), document.getElementById("email").focus();
    }
    ["btn-1", "btn-2", "btn-3", "btn-4", "btn-5", "btn-6", "btn-7", "btn-8"].forEach((t) => {
        let l = document.getElementById(t);
        l && l.addEventListener("click", e);
    });
}),




document.addEventListener('DOMContentLoaded', function () {
    const accordions = document.querySelectorAll('.accordion .checkbox');

    accordions.forEach((accordion) => {
        accordion.addEventListener('change', function () {
            if (this.checked) {
                accordions.forEach((otherAccordion) => {
                    if (otherAccordion !== this) {
                        otherAccordion.checked = false;
                    }
                });
            }
        });
    });
});



    document.addEventListener("DOMContentLoaded", function () {
        let e = document.getElementById("counter"),
            t = new IntersectionObserver(
                function (l) {
                    let n, r;
                    l[0].isIntersecting &&
                        ((n = 0),
                        (r = setInterval(function () {
                            n++, (e.textContent = n + "+"), n >= 14 && clearInterval(r);
                        }, 100)),
                        t.disconnect());
                },
                { threshold: 0.5 }
            );
        t.observe(e);
    }),
    document.addEventListener("DOMContentLoaded", function () {
        let e = document.getElementById("counter1"),
            t = new IntersectionObserver(
                function (l) {
                    let n, r;
                    l[0].isIntersecting &&
                        ((n = 0),
                        (r = setInterval(function () {
                            n++, (e.textContent = n + "+"), n >= 20 && clearInterval(r);
                        }, 100)),
                        t.disconnect());
                },
                { threshold: 0.5 }
            );
        t.observe(e);
    }),
    document.addEventListener("DOMContentLoaded", function () {
        let e = document.getElementById("counter2"),
            t = new IntersectionObserver(
                function (l) {
                    let n, r;
                    l[0].isIntersecting &&
                        ((n = 100),
                        (r = setInterval(function () {
                            n++, (e.textContent = n + "+"), n >= 200 && clearInterval(r);
                        }, 20)),
                        t.disconnect());
                },
                { threshold: 0.5 }
            );
        t.observe(e);
    }),
    document.addEventListener("DOMContentLoaded", function () {
        let e = document.getElementById("counter3"),
            t = new IntersectionObserver(
                function (l) {
                    let n, r;
                    l[0].isIntersecting &&
                        ((n = 0),
                        (r = setInterval(function () {
                            n++, (e.innerHTML = n + "<span>/10</span>"), n >= 8 && clearInterval(r);
                        }, 100)),
                        t.disconnect());
                },
                { threshold: 0.5 }
            );
        t.observe(e);
    });
const tabs = document.querySelector(".tabs"),
    btns = document.querySelectorAll(".button"),
    articles = document.querySelectorAll(".content");
function openTab(e) {
    document.querySelectorAll(".tab-content").forEach((e) => e.classList.remove("active")),
        document.querySelectorAll(".tab-btn").forEach((e) => e.classList.remove("active")),
        document.getElementById(e).classList.add("active"),
        event.currentTarget.classList.add("active");
}
tabs.addEventListener("click", function (e) {
    let t = e.target.dataset.id,
        l = t.split("p")[1];
    if (t) {
        btns.forEach(function (e) {
            e.classList.remove("live");
        }),
            btns[l - 1].classList.add("live"),
            articles.forEach(function (e) {
                e.classList.remove("live");
            });
        let n = document.getElementById(t);
        n.classList.add("live");
    }
});
let index = 0;
const slides = document.querySelectorAll(".slide"),
    slider = document.querySelector(".slider"),
    prevButton = document.getElementById("prev"),
    nextButton = document.getElementById("next");
function moveSlide(e) {
    (index += e) <= 0 ? ((index = 0), (prevButton.style.display = "none")) : (prevButton.style.display = "block"),
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
galleryContainer.style.width = `${3 * gallerySlideWidth + 2 * slideGap}px`;
const galleryFirstClone = gallerySlides[0].cloneNode(!0),
    galleryLastClone = gallerySlides[galleryTotalSlides - 1].cloneNode(!0);
gallery.appendChild(galleryFirstClone), gallery.insertBefore(galleryLastClone, gallerySlides[0]);
const updatedGallerySlides = Array.from(gallery.querySelectorAll(".a-div")),
    dotsContainer = document.createElement("div");
dotsContainer.classList.add("dots-container12"), galleryContainer.appendChild(dotsContainer);
for (let i = 0; i < galleryTotalSlides; i++) {
    let e = document.createElement("span");
    e.classList.add("dot"), e.setAttribute("data-index", i), e.addEventListener("click", () => moveGalleryTo(i)), dotsContainer.appendChild(e);
}
function updateDots() {
    document.querySelectorAll(".dot").forEach((e, t) => {
        e.classList.toggle("active", t === currentIndex);
    });
}
function moveGallery(e) {
    let t = galleryTotalSlides - 1;
    (currentIndex += e) < 0 ? (currentIndex = t) : currentIndex > t && (currentIndex = 0),
        updatedGallerySlides.forEach((e) => (e.style.transform = `translateX(-${currentIndex * gallerySlideWidth + slideGap * currentIndex}px)`)),
        updateDots();
}
function moveGalleryTo(e) {
    (currentIndex = e), updatedGallerySlides.forEach((e) => (e.style.transform = `translateX(-${currentIndex * gallerySlideWidth + slideGap * currentIndex}px)`)), updateDots();
}
updateDots();
let tabss = document.querySelectorAll(".tab-sec8"),
    containers = document.querySelectorAll(".logo-container"),
    currentIndexx = 0;
function showTab(e) {
    tabss.forEach((t, l) => {
        t.classList.toggle("active", l === e), containers[l].classList.toggle("active", l === e);
    }),
        (currentIndexx = e);
}
tabss.forEach((e, t) => {
    e.addEventListener("click", () => showTab(t));
}),
    document.getElementById("prevBtn").addEventListener("click", () => {
        showTab((currentIndexx = 0 === currentIndexx ? tabss.length - 1 : currentIndexx - 1));
    }),
    document.getElementById("nextBtn").addEventListener("click", () => {
        showTab((currentIndexx = currentIndexx === tabss.length - 1 ? 0 : currentIndexx + 1));
    }),
    (() => {
        let e = document.querySelector(".slider-container23"),
            t = e.querySelector(".testimonial-slider"),
            l = e.querySelectorAll(".testimonial"),
            n = l.length,
            r = 0,
            o = 36,
            s = l[0].clientWidth,
            a,
            c = l[0].cloneNode(!0),
            d = l[n - 1].cloneNode(!0);
        t.appendChild(c), t.insertBefore(d, l[0]), (t.style.transform = `translateX(-${s + o}px)`);
        let u = document.querySelector(".slider-dot-container");
        for (let y = 0; y < n; y++) {
            let g = document.createElement("div");
            g.classList.add("dot"), 0 === y && g.classList.add("active"), g.addEventListener("click", () => $(y)), u.appendChild(g);
        }
        let h = (t) => {
                let l = Array.from(e.querySelectorAll(".dot"));
                l.forEach((e) => e.classList.remove("active")), l[t].classList.add("active");
            },
            $ = (e) => {
                (r = e), (t.style.transition = "transform 0.5s ease-in-out"), (t.style.transform = `translateX(-${s * (r + 1) + o * (r + 1)}px)`), h(e);
            },
            f = () => {
                a = setInterval(() => {
                    $((r = (r + 1) % n));
                }, 5e3);
            },
            v = 0,
            p = 0;
        function m() {
            clearInterval(a), p < v - 50 ? (console.log("Swiped Left", r), r < l.length - 1 && $(r + 1)) : p > v + 50 && (console.log("Swiped Right", r), r > 0 && $(r - 1));
        }
        e.addEventListener("touchstart", function (e) {
            v = e.touches[0].clientX;
        }),
            e.addEventListener("touchend", function (e) {
                (p = e.changedTouches[0].clientX), m();
            }),
            f();
    })();
const testing_accordion = document.getElementById("testing-accordion"),
    show_accordion_btn = document.getElementById("show-more-accordion");
(testing_accordion.style.height = "0px"),
    show_accordion_btn.addEventListener("click", () => {
        (testing_accordion.style.height = "auto"), (show_accordion_btn.style.display = "none");
    }),
    document.addEventListener("DOMContentLoaded", function () {
        let e = document.getElementById("custom-slider"),
            t = e.querySelectorAll(".cus-tab-btn"),
            l = e.querySelectorAll(".cus-tab-wrapper");
        t.forEach((e, n) => {
            e.addEventListener("click", () => {
                console.log("clicked"), t.forEach((e) => e.classList.remove("active")), e.classList.add("active"), l.forEach((e) => e.classList.remove("active")), l[n].classList.add("active");
            });
        });
    });
const sliderPlay = (e, t) => {
    let l = e.querySelector(".mask"),
        n = e.querySelector(".navigation_btns"),
        r = Array.from(l.querySelectorAll(".zoom_slide")),
        o = 0,
        s = Array.from(e.querySelectorAll(".zoom_slide"));
    console.log(s.length);
    let a = (e) => {
        o = e;
        let l = Array.from(n.querySelectorAll(".dot"));
        l.forEach((e) => e.classList.remove("active")), l[e].classList.add("active");
        let r = (18 * s[e].clientWidth) / 100;
        s.forEach((l) => {
            l.classList.remove("active"), t ? (l.style.transform = `translateX(calc( ${-100 * e}% - ${16 * e}px + ${r}px )) scaleY(0.9)`) : (l.style.transform = `translateX(calc( ${-100 * e}% - ${16 * e}px + ${r}px )) scaleY(1)`);
        }),
            s[e].classList.add("active"),
            (s[e].style.transform = `translateX(calc( ${-100 * e}% - ${16 * e}px + ${r}px )) scaleY(1)`);
    };
    r.forEach((e, t) => {
        let l = document.createElement("div");
        l.classList.add("dot"), !0 === e.classList.contains("active") && l.classList.add("active"), l.addEventListener("click", () => a(t)), n.appendChild(l);
    });
    let c = 0,
        d = 0;
    function u() {
        d < c - 50 ? o < r.length - 1 && a(o + 1) : d > c + 50 && o > 0 && a(o - 1);
    }
    e.addEventListener("touchstart", function (e) {
        c = e.touches[0].clientX;
    }),
        e.addEventListener("touchend", function (e) {
            (d = e.changedTouches[0].clientX), u();
        }),
        a(o);
};
document.addEventListener("DOMContentLoaded", () => {
    sliderPlay(document.querySelector("#zoom_slider"), (zoom = !0)), sliderPlay(document.querySelector("#simpleSlider"), (zoom = !1)), sliderPlay(document.querySelector("#testimonialSlider"), (zoom = !1));
});
const closePopupButton = document.getElementById("close-pop-up-btn");
closePopupButton.addEventListener("click", () => {
    document.getElementById("divpopup").style.display = "none";
});
const ctaClickBtn = Array.from(document.querySelectorAll(".cta-click"));
ctaClickBtn.forEach((e) => {
    e.addEventListener("click", () => {
        document.getElementById("firstname-2").focus();
    });
}),
    document.addEventListener("DOMContentLoaded", () => {
        let e = Array.from(document.querySelectorAll(".youtube-light-box"));
        e.forEach((e) => {
            e.addEventListener("click", () => {
                let t = e.getAttribute("data-link"),
                    l = document.querySelector(".lightbox-popup"),
                    n = l.querySelector(".lightbox-frame"),
                    r = l.querySelector(".lightbox-close");
                (l.style.display = "flex"),
                    (n.innerHTML = `<iframe width="600" height="337" src="${t}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`),
                    r.addEventListener("click", () => {
                        l.style.display = "none";
                    });
            });
        });
    });


