import { galleryItems } from './gallery-items';

console.log(galleryItems);

export const galleryEl = document.querySelector('.gallery');

export const imagesList = galleryItems.map(image =>
    `<a class="gallery__item" href="${image.original}">
  <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
</a>`
).join("");

