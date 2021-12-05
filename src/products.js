(() => {
        const menuBtnRef = document.querySelector("[data-icecream-button]");
        const mobileMenuRef = document.querySelector("[data-icecream]");

        menuBtnRef.addEventListener("click", () => {
            const expanded =
                menuBtnRef.getAttribute("aria-expanded") === "true" || "false";
          
            menuBtnRef.classList.toggle("is-open");
            menuBtnRef.setAttribute("aria-expanded", !expanded);

            mobileMenuRef.classList.toggle("is-open");
        })
})();
    (() => {
        const menuBtnRef = document.querySelector("[data-coffe-button]");
        const mobileMenuRef = document.querySelector("[data-coffe]");

        menuBtnRef.addEventListener("click", () => {
            const expanded =
                menuBtnRef.getAttribute("aria-expanded") === "true" || "false";
          
            menuBtnRef.classList.toggle("is-open");
            menuBtnRef.setAttribute("aria-expanded", !expanded);

            mobileMenuRef.classList.toggle("is-open");
        })
    })();
    (() => {
        const menuBtnRef = document.querySelector("[data-milkshakes-button]");
        const mobileMenuRef = document.querySelector("[data-milkshakes]");

        menuBtnRef.addEventListener("click", () => {
            const expanded =
                menuBtnRef.getAttribute("aria-expanded") === "true" || "false";
          
            menuBtnRef.classList.toggle("is-open");
            menuBtnRef.setAttribute("aria-expanded", !expanded);

            mobileMenuRef.classList.toggle("is-open");
        })
    })();