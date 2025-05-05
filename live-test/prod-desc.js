const prodDescription = () => {
    const productDescription = document.querySelector(".js-productDescription");
    if (!productDescription) {
        return;
    }

    const productBtn = document.querySelectorAll(".js-prodDescBtn");

    const toggleProdDesc = () => {
        productBtn.forEach(btn => {
            btn.addEventListener("click", () => {
                const gridId = btn.getAttribute("aria-controls");
                const grid = document.getElementById(gridId);

                const isExpanded = grid.classList.contains("expanded");

                grid.classList.toggle("expanded");
                btn.classList.toggle("expanded");

                btn.setAttribute("aria-expanded", !isExpanded);
                grid.setAttribute("aria-hidden", isExpanded);
            })
        })
    };

    toggleProdDesc();

    const sliderNavDekstop = document.querySelectorAll(".js-prodDescSliderNav");
    const prodDescVideoWrapper = document.querySelector(".js-prodDescVideoWrapper");

    const setNavHeight = () => {
        sliderNavDekstop.forEach(nav => {
            const wrapperHeight = prodDescVideoWrapper.offsetHeight;
            const navHeight = wrapperHeight + "px";
            nav.style.height = navHeight;
        })
    };

    document.addEventListener("DOMContentLoaded", () => {
        setTimeout(setNavHeight, 1000);
    });

    window.addEventListener("resize", setNavHeight);

    const slides = document.querySelectorAll(".swiper-featured .swiper-slide");

    slides.forEach(slide => {
        const videoOverlay = slide.querySelector(".video-drag-overlay");

        videoOverlay.addEventListener("click", () => {
            const iframeElement = slide.querySelector(".swiper-featured .lo-prodDesc__videoWrapper iframe");

            let videoDuration = 0;
            try {
                const player = new playerjs.Player(iframeElement);
                player.on('ready', () => {
                    player.getDuration(duration => {
                        videoDuration = duration;
                        console.log('Video duration:', videoDuration, 'seconds');
                    });
                });
            } catch (err) {
                console.error("Error initializing player for metadata:", err);
            };

            iframeElement.contentWindow.postMessage({
                type: 'playerCommand',
                command: 'play'
            }, '*');

            videoOverlay.style.display = 'none';
            videoOverlay.setAttribute("aria-hidden", true);

            const timeoutDuration = videoDuration > 0 ?
                (videoDuration * 1000) + 500 : 5000;

            setTimeout(() => {
                videoOverlay.style.display = 'block';
                videoOverlay.setAttribute("aria-hidden", false);
            }, timeoutDuration);
        });
    });
}

prodDescription();