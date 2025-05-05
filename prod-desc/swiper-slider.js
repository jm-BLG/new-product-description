
const swipers = () => {
    const swiperCati4 = new Swiper(".category-slider-4item", {
        updateOnWindowResize: true,
        grabCursor: true,
        slidesPerView: 2,
        breakpoints: {
            694: {
                slidesPerView: 4,
                spaceBetween: 20,
                navigation: {
                    enabled: false,
                },
                pagination: {
                    enabled: false,
                },
            },
            538: {
                slidesPerView: 3,
                spaceBetween: 20,
                navigation: {
                    enabled: false,
                },
                pagination: {
                    enabled: true,
                },
            },
        },
        spaceBetween: 20,
        navigation: {
            enabled: false,
            nextEl: ".category-nav-btn-next",
            prevEl: ".category-nav-btn-prev",
            disabledClass: "category-nav-btn--disabled",
        },
        pagination: {
            enabled: true,
            el: ".swiper-pagination",
            type: "bullets",
            bulletActiveClass: "category-pagination--active",
        },
    });

    const swiperCati3 = new Swiper(".category-slider-3item", {
        updateOnWindowResize: true,
        grabCursor: true,
        slidesPerView: 2,
        breakpoints: {
            538: {
                slidesPerView: 3,
                spaceBetween: 20,
                navigation: {
                    enabled: false,
                },
                pagination: {
                    enabled: true,
                },
            },
        },
        spaceBetween: 20,
        navigation: {
            enabled: false,
            nextEl: ".category-nav-btn-next",
            prevEl: ".category-nav-btn-prev",
            disabledClass: "category-nav-btn--disabled",
        },
        pagination: {
            enabled: true,
            el: ".swiper-pagination",
            type: "bullets",
            bulletActiveClass: "category-pagination--active",
        },
    });

    const swiperBtsSeats = new Swiper(".swiper-bts-seats", {
        updateOnWindowResize: true,
        grabCursor: true,
        slidesPerView: 2,
        spaceBetween: 10,
        breakpoints: {
            1029: {
                slidesPerView: 6,
                navigation: {
                    enabled: false,
                },
            },
            969: {
                slidesPerView: 5,
                navigation: {
                    enabled: false,
                },
            },
            779: {
                slidesPerView: 4,
                navigation: {
                    enabled: false,
                },
            },
            569: {
                slidesPerView: 3,
                navigation: {
                    enabled: false,
                },
            },
            399: {
                slidesPerView: 2,
                navigation: {
                    enabled: false,
                },
            },
        },
        pagination: {
            enabled: true,
            el: ".swiper-pagination",
            type: "bullets",
            bulletActiveClass: "swiper-loschool-pagination-bullet",
        },
    });

    const swiperBtsStrollers = new Swiper(".swiper-bts-strollers", {
        updateOnWindowResize: true,
        grabCursor: true,
        slidesPerView: 1,
        spaceBetween: 15,
        breakpoints: {
            879: {
                slidesPerView: 3,
                navigation: {
                    enabled: false,
                },
            },
            429: {
                slidesPerView: 2,
                navigation: {
                    enabled: false,
                },
            },
        },
        pagination: {
            enabled: true,
            el: ".swiper-pagination",
            type: "bullets",
            bulletActiveClass: "swiper-loschool-pagination-bullet",
        },
    });

    const swiperBtsBeds = new Swiper(".swiper-bts-beds", {
        updateOnWindowResize: true,
        grabCursor: true,
        slidesPerView: 1,
        spaceBetween: 15,
        breakpoints: {
            879: {
                slidesPerView: 3,
                navigation: {
                    enabled: false,
                },
            },
            429: {
                slidesPerView: 2,
                navigation: {
                    enabled: false,
                },
            },
        },
        pagination: {
            enabled: true,
            el: ".swiper-pagination",
            type: "bullets",
            bulletActiveClass: "swiper-loschool-pagination-bullet",
        },
    });

    const swiperBtsBouncers = new Swiper(".swiper-bts-bouncers", {
        updateOnWindowResize: true,
        grabCursor: true,
        slidesPerView: 1,
        spaceBetween: 15,
        breakpoints: {
            879: {
                slidesPerView: 3,
                navigation: {
                    enabled: false,
                },
            },
            429: {
                slidesPerView: 2,
                navigation: {
                    enabled: false,
                },
            },
        },
        pagination: {
            enabled: true,
            el: ".swiper-pagination",
            type: "bullets",
            bulletActiveClass: "swiper-loschool-pagination-bullet",
        },
    });

    const swiperBtsVehicles = new Swiper(".swiper-bts-vehicles", {
        updateOnWindowResize: true,
        grabCursor: true,
        slidesPerView: 1,
        spaceBetween: 15,
        breakpoints: {
            879: {
                slidesPerView: 3,
                navigation: {
                    enabled: false,
                },
            },
            429: {
                slidesPerView: 2,
                navigation: {
                    enabled: false,
                },
            },
        },
        pagination: {
            enabled: true,
            el: ".swiper-pagination",
            type: "bullets",
            bulletActiveClass: "swiper-loschool-pagination-bullet",
        },
    });

    if (document.querySelector('.swiper-aboutAwards')) {
        const swiperAwardsText = new Swiper(".swiper-awardsText", {
            updateOnWindowResize: true,
            slidesPerView: 1,
            effect: "fade",
            fadeEffect: {
                crossFade: true
            },
            spaceBetween: 50,
            allowTouchMove: false,
            speed: 500,
        });

        const swiperAwards = new Swiper(".swiper-aboutAwards", {
            updateOnWindowResize: true,
            slidesPerView: 1,
            spaceBetween: 18,
            loop: true,
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

        let currentIndex = 0;
        const totalSlides = 6;

        const updateActiveSlide = (index) => {
            slides.forEach(slide => {
                slide.classList.remove('swiper-slide-active');
            });
            slides[index].classList.add('swiper-slide-active');
        };

        const nextBtn = document.querySelector('.lo-about-us-awards__navBtn--next');
        const prevBtn = document.querySelector('.lo-about-us-awards__navBtn--prev');
        const curentWidth = window.innerWidth;

        nextBtn.addEventListener('click', () => {
            if (1024 <= curentWidth) {
                currentIndex = (currentIndex + 1) % totalSlides;
                swiperAwards.slideTo(currentIndex);
                swiperAwardsText.slideTo(currentIndex);
                updateActiveSlide(currentIndex);
            } else {
                currentIndex = (currentIndex + 1) % totalSlides;
                swiperAwardsText.slideTo(currentIndex);
                updateActiveSlide(currentIndex);
            }
        });

        prevBtn.addEventListener('click', () => {
            if (1024 <= curentWidth) {
                currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
                swiperAwards.slideTo(currentIndex);
                swiperAwardsText.slideTo(currentIndex);
                updateActiveSlide(currentIndex);
            } else {
                currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
                swiperAwardsText.slideTo(currentIndex);
                updateActiveSlide(currentIndex);
            }
        });

        const slides = document.querySelectorAll('.swiper-aboutAwards .swiper-slide');
        slides.forEach((slide, index) => {
            slide.addEventListener('click', () => {
                currentIndex = index;
                swiperAwards.slideTo(currentIndex);
                swiperAwardsText.slideTo(currentIndex);
                updateActiveSlide(currentIndex);
            });
        });

        updateActiveSlide(0);

        const buttonsActive = () => {
            nextBtn.removeAttribute('disabled');
            prevBtn.removeAttribute('disabled');
        }

        buttonsActive();

        const swiperComments = new Swiper(".swiper-aboutComments", {
            updateOnWindowResize: true,
            grabCursor: true,
            slidesPerView: 1,
            spaceBetween: 10,
            navigation: {
                enabled: true,
                nextEl: ".lo-about-us-comments__navBtn--next",
                prevEl: ".lo-about-us-comments__navBtn--prev",
            },
            breakpoints: {
                769: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                    navigation: {
                        enabled: true,
                    },
                },
            },
        })

        const swiperExxperts = new Swiper(".swiper-experts", {
            updateOnWindowResize: true,
            grabCursor: true,
            slidesPerView: 1,
            spaceBetween: 20,
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

    // New products description
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
                    enabled: true,
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
            nextEl: ".lo-prodDesc-nav__navBtnDet--next",
            prevEl: ".lo-prodDesc-nav__navBtnDet--prev",
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
            nextEl: ".lo-prodDesc-nav__navBtnSets--next",
            prevEl: ".lo-prodDesc-nav__navBtnSets--prev",
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

    const swiperReference = new Swiper(".swiper-ref", {
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
            nextEl: ".lo-prodDesc-nav__navBtnRef--next",
            prevEl: ".lo-prodDesc-nav__navBtnRef--prev",
        },
        breakpoints: {
            769: {
                slidesPerView: 2,
                spaceBetween: 20,
                pagination: {
                    enabled: true,
                },
                navigation: {
                    enabled: true,
                },
            },
        },
    })


};

const initialSwipers = () => {
    const swiperDiv = document.querySelectorAll(".swiperLoader");
    const loaders = document.querySelectorAll(".js-loading");

    if (swiperDiv) {
        setTimeout(() => {
            for (const loader of loaders) {
                loader.style.display = "none"
            };

            for (const div of swiperDiv) {
                div.style.display = "block"
            };

            swipers();
        }, 1000);
    } else {
        swipers();
    }

};


initialSwipers();
