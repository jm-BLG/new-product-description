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