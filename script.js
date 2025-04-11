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

    const swiperDetails = new Swiper(".swiper-details", {
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
                slidesPerView: 2,
                spaceBetween: 35,
                pagination: {
                    enabled: false,
                },
                navigation: {
                    enabled: false,
                },
                grid: {
                    fill: "row",
                    rows: 3,
                },
            },
            1185: {
                slidesPerView: 3,
                spaceBetween: 45,
                pagination: {
                    enabled: false,
                },
                navigation: {
                    enabled: false,
                },
                grid: {
                    fill: "row",
                    rows: 2,
                },
            },
        },
    })

    const swiperSets = new Swiper(".swiper-sets", {
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
                slidesPerView: 2,
                spaceBetween: 35,
                pagination: {
                    enabled: false,
                },
                navigation: {
                    enabled: false,
                },
                grid: {
                    fill: "row",
                    rows: 6,
                },
            },
            1185: {
                slidesPerView: 3,
                spaceBetween: 45,
                pagination: {
                    enabled: false,
                },
                navigation: {
                    enabled: false,
                },
                grid: {
                    fill: "row",
                    rows: 3,
                },
            },
        },
    })


}

swipers();