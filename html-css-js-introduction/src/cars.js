const detailsImageElement = document.querySelector(".details-image");
const detailsTitleElement = document.querySelector(".details-title");
const thumbnailsAnchors = document.querySelectorAll(".thumbnails-ancor");
for (let i = 0; i < thumbnailsAnchors.length; i++) {
    thumbnailsAnchors[i].addEventListener("click", function() {
        setDetails(i); 

})
}
function setDetails(indexAnchor) {
    detailsImageElement.src = thumbnailsAnchors[indexAnchor].getAttribute("data-details-image");
    detailsTitleElement.innerHTML = thumbnailsAnchors[indexAnchor].getAttribute("data-details-text");

}





