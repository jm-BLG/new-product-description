const productGrid = document.querySelectorAll(".js-prodDescGrid");
console.log(productGrid);
const productBtn = document.querySelectorAll(".js-prodDescBtn");

const toggleProdDesc = () => {
    productBtn.forEach(btn => {
        btn.addEventListener("click", () => {
            const gridId = btn.getAttribute("aria-controls");
            const grid = document.getElementById(gridId);

            const isExpanded = grid.classList.contains("expanded");


            // const isExpanded = grid.hasAttribute("open");
            // grid.toggleAttribute("open");
            // btn.toggleAttribute("open");

            grid.classList.toggle("expanded");
            btn.classList.toggle("expanded");

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

    // Test slider
    const swiperFeatures2 = new Swiper(".swiper-featured2", {
        updateOnWindowResize: true,
        grabCursor: true,
        preventClicksPropagation: false,
        preventClicks: false,
        noSwiping: false,
        nested: true,
        touchStartPreventDefault: false,
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



    // End

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

const videoPlay = () => {
    const videoGridRect = productGrid[0].getBoundingClientRect().top;
    const windowHeigh = window.innerHeight;
    const startPoint = windowHeigh - 150;

    if (videoGridRect < startPoint) {
        window.removeEventListener("scroll", videoPlay);
        const video = document.querySelectorAll(".js-featureVideo");
        const swiperFeatures = document.querySelector(".swiper-featured")?.swiper;

        const videoArray = Array.from(video);
        const playSequentially = (index) => {
            if (index >= videoArray.length) {
                // return;
                if (swiperFeatures) {
                    swiperFeatures.slideTo(0);
                }

                setTimeout(() => playSequentially(0), 500);
                return;
            }


            const currentVideo = videoArray[index];

            currentVideo.addEventListener("ended", () => {
                playSequentially(index + 1);
                // swiperFeatures.slideTo(index + 1);
                if (swiperFeatures && index < videoArray.length - 1) {
                    swiperFeatures.slideTo(index + 1);
                }
            }, { once: true });


            const intervalId = setInterval(() => {
                currentVideo.play()
                    .then(() => {
                        clearInterval(intervalId);
                    })
                    .catch(err => {
                        console.log("Failed to play video:", err);
                    });
            }, 300);
        }
        playSequentially(0);
    };
};

window.addEventListener("scroll", videoPlay);
videoPlay();


const videoPlayBtn = () => {
    const videoPlayBtn = document.querySelectorAll(".js-featureVideoBtn");
    const video = document.querySelectorAll(".js-featureVideo2");

    videoPlayBtn.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            video[index].play();
            // btn.style.display = "none";
            btn.classList.add("lo-prodDesc__videoBtn--hidden")

            video[index].addEventListener("ended", () => {
                // btn.style.display = "block";
                btn.classList.remove("lo-prodDesc__videoBtn--hidden")
            });
        });
    });
}

videoPlayBtn();

const player = Stream(document.getElementById('stream-player'));
player.addEventListener('play', () => {
    console.log('playing!');
});
player.play().catch(() => {
    console.log('playback failed, muting to try again');
    player.muted = true;
    player.play();
});

const videoPlayCF = () => {
    const playBtn = document.querySelectorAll(".js-videoPlayBtn2");
    playBtn.addEventListener("click", () => {
        player.play()
    })

}