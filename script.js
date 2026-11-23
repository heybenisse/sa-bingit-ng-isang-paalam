
const openManuscript = document.getElementById("openManuscript");
const closeManuscript = document.getElementById("closeManuscript");
const manuscriptModal = document.getElementById("manuscriptModal");

openManuscript.addEventListener("click", () => {
    manuscriptModal.classList.add("show");
});

closeManuscript.addEventListener("click", () => {
    manuscriptModal.classList.remove("show");
});

manuscriptModal.addEventListener("click", (event) => {
    if (event.target === manuscriptModal) {
        manuscriptModal.classList.remove("show");
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        manuscriptModal.classList.remove("show");
    }
});


const timelineTriggers = document.querySelectorAll(".timeline-trigger");

timelineTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
        const currentEvent = trigger.closest(".timeline-event");
        const currentContent = currentEvent.querySelector(".timeline-content");
        const isAlreadyOpen = currentEvent.classList.contains("active");

        document.querySelectorAll(".timeline-event").forEach((event) => {
            event.classList.remove("active");

            const button = event.querySelector(".timeline-trigger");
            const content = event.querySelector(".timeline-content");

            button.setAttribute("aria-expanded", "false");
            content.hidden = true;
        });

        if (!isAlreadyOpen) {
            currentEvent.classList.add("active");
            trigger.setAttribute("aria-expanded", "true");
            currentContent.hidden = false;
        }
    });
});



const exhibitCards = document.querySelectorAll(".exhibit-card");
const exhibitGallery = document.querySelector(".exhibit-gallery");

const detailNumber = document.getElementById("detailNumber");
const detailDate = document.getElementById("detailDate");
const detailTitle = document.getElementById("detailTitle");
const detailDescription = document.getElementById("detailDescription");
const detailNote = document.getElementById("detailNote");

exhibitCards.forEach((card) => {
    card.addEventListener("click", () => {
        exhibitCards.forEach((item) => {
            item.classList.remove("active");
        });

        card.classList.add("active");

        detailNumber.textContent = "DISPLAY " + card.dataset.number;
        detailDate.textContent = card.dataset.category;
        detailTitle.textContent = card.dataset.title;
        detailDescription.textContent = card.dataset.description;
        detailNote.textContent = card.dataset.note;

        document.getElementById("exhibitDetail").scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });
    });
});

document.getElementById("galleryPrev").addEventListener("click", () => {
    exhibitGallery.scrollBy({
        left: -300,
        behavior: "smooth"
    });
});

document.getElementById("galleryNext").addEventListener("click", () => {
    exhibitGallery.scrollBy({
        left: 300,
        behavior: "smooth"
    });
});

const analysisPanels = document.querySelectorAll(".analysis-panel");

analysisPanels.forEach((panel) => {
    const trigger = panel.querySelector(".analysis-trigger");
    const content = panel.querySelector(".analysis-content");
    const arrow = panel.querySelector(".analysis-arrow");

    trigger.addEventListener("click", () => {
        const isOpen = trigger.getAttribute("aria-expanded") === "true";

        analysisPanels.forEach((item) => {
            const itemTrigger = item.querySelector(".analysis-trigger");
            const itemContent = item.querySelector(".analysis-content");
            const itemArrow = item.querySelector(".analysis-arrow");

            item.classList.remove("active");
            itemTrigger.setAttribute("aria-expanded", "false");
            itemContent.hidden = true;
            itemArrow.textContent = "+";
        });

        if (!isOpen) {
            panel.classList.add("active");
            trigger.setAttribute("aria-expanded", "true");
            content.hidden = false;
            arrow.textContent = "−";
        }
    });
});

const reflectionPosts = document.querySelectorAll(".reflection-post");

reflectionPosts.forEach((post) => {
    const button = post.querySelector(".post-read-more");

    button.addEventListener("click", () => {
        const expanded = post.classList.toggle("expanded");

        button.textContent = expanded ? "Show less" : "Read more";
    });
});
