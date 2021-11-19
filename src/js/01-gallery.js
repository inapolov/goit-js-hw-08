// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import {galleryEl, imagesList} from './galery-const'


galleryEl.insertAdjacentHTML("beforeend", imagesList);

galleryEl.addEventListener('click', onImageClick);

function onImageClick(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains('gallery__image')) {
    return
    };
    
    var lightbox = new SimpleLightbox('.gallery a', { captionType:'attr', captionsData: 'alt', captionDelay:250, });   
    
}

