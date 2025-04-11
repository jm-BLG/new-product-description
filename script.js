const productGrid = document.querySelectorAll(".js-prodDescGrid");
const productBtn = document.querySelectorAll(".js-prodDescBtn");


const toggleProdDesc = () => {
    productBtn.forEach(btn => {
        btn.addEventListener("click", () => {
            const gridId = btn.getAttribute("aria-controls");
            const grid = document.getElementById(gridId);

            const isExpanded = grid.hasAttribute("open");

            grid.toggleAttribute("open");
            btn.toggleAttribute("open");

            btn.setAttribute("aria-expanded", !isExpanded);
            grid.setAttribute("aria-hidden", isExpanded);
        })
    })
};

toggleProdDesc();


const swipers = () => {
    const swiperAwardsText = new Swiper(".swiper-awardsText", {
        updateOnWindowResize: true,
        // grabCursor: true,
        slidesPerView: 1,
        effect: "fade",
        fadeEffect: {
            crossFade: true // Enable cross-fade
        },
        spaceBetween: 50,
        // loop: true,
        // loopedSlides: 5,
        allowTouchMove: false,
        speed: 500,
    });

    const swiperAwards = new Swiper(".swiper-aboutAwards", {
        updateOnWindowResize: true,
        // grabCursor: true,
        slidesPerView: 1,
        spaceBetween: 18,
        loop: true,
        // loopedSlides: 5,
        watchOverflow: false,
        speed: 500,
        navigation: {
            enabled: true,
            nextEl: ".lo-about-us-awards__navBtn--next",
            prevEl: ".lo-about-us-awards__navBtn--prev",
        },
        breakpoints: {
            499: {
                slidesPerView: 2,
                spaceBetween: 12,
                loop: true,
                navigation: {
                    enabled: true,
                },
            },
            579: {
                slidesPerView: 3,
                spaceBetween: 22,
                loop: true,
                navigation: {
                    enabled: true,
                },
            },
            769: {
                slidesPerView: 4,
                spaceBetween: 10,
                loop: true,
                navigation: {
                    enabled: true,
                },
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 10,
                loop: true,
                navigation: {
                    enabled: true,
                },
            },
        },
    })



    const swiperFeatures = new Swiper(".swiper-featured", {
        updateOnWindowResize: true,
        grabCursor: true,
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            enabled: true,
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
            bulletActiveClass: "lo-prodDesc-swiper-active-bullet",
        },
        navigation: {
            enabled: true,
            nextEl: ".lo-prodDesc-nav__navBtn--next",
            prevEl: ".lo-prodDesc-nav__navBtn--prev",
        },
        breakpoints: {
            579: {
                slidesPerView: 2,
                spaceBetween: 20,
                pagination: {
                    enabled: true,
                },
                navigation: {
                    enabled: true,
                },
            },
            769: {
                slidesPerView: 2.6,
                spaceBetween: 20,
                pagination: {
                    enabled: false,
                },
                navigation: {
                    enabled: false,
                },
            },
        },
    })

    const swiperExxperts = new Swiper(".swiper-experts", {

        updateOnWindowResize: true,
        grabCursor: true,
        slidesPerView: 1,
        spaceBetween: 20,
        // spaceBetween: 10,
        navigation: {
            enabled: true,
            nextEl: ".lo-about-us-experts__navBtn--next",
            prevEl: ".lo-about-us-experts__navBtn--prev",
        },
        breakpoints: {
            769: {
                slidesPerView: 1,
                spaceBetween: 0,
                navigation: {
                    enabled: false,
                },
                grid: {
                    fill: "row",
                    rows: 4,
                },
            },
        },

    })

}

swipers();