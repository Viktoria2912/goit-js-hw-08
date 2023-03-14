// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const listGallery = document.querySelector('.gallery');

const markup = galleryItems
  .map(item => {
    console.log(item.description);
    return `<a class="gallery__item" href=${item.original}>
  <img class="gallery__image" src=${item.preview} alt=${item.description} />
</a>`;
  })
  .join('');
console.log(markup);

listGallery.insertAdjacentHTML('beforeend', markup);

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  fadeSpeed: 250,
});
