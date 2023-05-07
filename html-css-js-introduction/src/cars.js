const detailsImageElement = document.querySelector(".details-image");
const detailsTitleElement = document.querySelector(".details-title");
const thumbnailsAnchors = document.querySelectorAll(".thumbnails-ancor");
const detailsSectionElement = document.querySelector(".details-section");

const mainSection = document.querySelector("main") 

const HIDDEN = "hidden";
const POINT_CLASS = "is-point";

for (let i = 0; i < thumbnailsAnchors.length; i++) {
    thumbnailsAnchors[i].addEventListener("click", function() {
        setDetails(i); 

})
}

function setDetails(indexAnchor) {
    showDetails();

    detailsImageElement.src = thumbnailsAnchors[indexAnchor].getAttribute("data-details-image");
    detailsTitleElement.innerHTML = thumbnailsAnchors[indexAnchor].getAttribute("data-details-text");

}


function showDetails() {
    mainSection.classList.remove(HIDDEN);
    detailsSectionElement.classList.add(POINT_CLASS);
    
    setTimeout(function() {
        detailsSectionElement.classList.remove(POINT_CLASS);


    })


}

function hideDetails() {
    mainSection.classList.add(HIDDEN);
}





