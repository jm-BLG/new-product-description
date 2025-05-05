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

    const referenceMore = () => {
        const referenceMore = document.querySelectorAll(".js-referenceMore");
        const referenceMoreBtn = document.querySelectorAll(".js-referenceBtn");
        const referenceMoreArrow = document.querySelectorAll(".js-referenceMoreArrow");
        const referenceBtnMoreTxt = document.querySelectorAll(".js-referenceMoreText")

        if (referenceMoreBtn.length === 0) {
            return;
        };

        let buttonTexts;
        const currentURL = window.location.href;

        for (let i = 0; i < referenceMoreBtn.length; i++) {
            referenceMoreBtn[i].addEventListener("click", () => {
                referenceMore[i].toggleAttribute("open");
                referenceMoreArrow[i].toggleAttribute("open");

                switch (true) {
                    case (currentURL.includes("lionelo.pl")):
                        buttonTexts = {
                            open: "Czytaj więcej",
                            close: "Zamknij",
                        }
                        break;
                    case (currentURL.includes("lionelo.de")):
                        buttonTexts = {
                            open: "Mehr lesen",
                            close: "Schließe es",
                        }
                        break;
                    case (currentURL.includes("en.lionelo.com")):
                        buttonTexts = {
                            open: "Read more",
                            close: "Close",
                        }
                        break;
                    case (currentURL.includes("cz.lionelo.com")):
                        buttonTexts = {
                            open: "Více",
                            close: "Zavřít",
                        }
                        break;
                    case (currentURL.includes("lionelo.fr")):
                        buttonTexts = {
                            open: "Lire la suite",
                            close: "Fermer",
                        }
                        break;
                    case (currentURL.includes("it.lionelo.com")):
                        buttonTexts = {
                            open: "Di più",
                            close: "Chiudere",
                        }
                        break;
                    case (currentURL.includes("es.lionelo.com")):
                        buttonTexts = {
                            open: "Leer más",
                            close: "Cerrar",
                        }
                        break;
                    case (currentURL.includes("sk.lionelo.com")):
                        buttonTexts = {
                            open: "Prečítajte si viac",
                            close: "Zavrieť",
                        }
                        break;
                }

                const timeoutId = setTimeout(() => {
                    referenceMore[i].hasAttribute("open") ?
                        referenceBtnMoreTxt[i].innerHTML = buttonTexts.close :
                        referenceBtnMoreTxt[i].innerHTML = buttonTexts.open;
                }, 680);

                return () => clearTimeout(timeoutId);
            })
        }
    };
    referenceMore();
}

prodDescription();