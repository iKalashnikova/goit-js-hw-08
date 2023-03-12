// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryList = document.querySelector('.gallery');

console.log(galleryList);

const galleryMarkup = handleGalleryMarkup(galleryItems)

function handleGalleryMarkup (items) {
    return items.map(item => `
    <li><a class = gallery__item href = "${item.original}"><img class = gallery__image src = "${item.preview}" alt = "${item.description}"></a></li>`).join('');

}
galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

// console.log(galleryMarkup);

galleryList.addEventListener('click', handleGalleryClick)



function handleGalleryClick(event) {
    event.preventDefault()

    const lightbox = new SimpleLightbox('.gallery a', {   
        captionPosition: 'bottom',
        captionsData: 'alt',
        captionDelay: 250});

    const imageLink = event.target.closest('.gallery__item').href;

    lightbox.open(imageLink)
}