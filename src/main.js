import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { BASE_URL, API_KEY } from "./js/pixabay-api";

const form = document.querySelector('.js-search-form');
const gallery = document.querySelector('.gallery');

const showBox = new SimpleLightbox('.img-box a', {
        captions: true,
        captionsData: 'alt',
        captionsDelay: 250,
        overlayOpacity: 0.7,
        className: 'lightbox',
    });

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;

    const {
        searchValue: { value: query },
        } = form.elements;

    if (query === '') {
        iziToast.show({
            message: 'Please fill search input',
            position: 'topCenter',
            color: 'yellow',
        });
        return;
    }

    const options = {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true",
    };
    const params = new URLSearchParams(options);

    gallery.innerHTML = '';


    fetch(`${BASE_URL}?key=${API_KEY}&${params}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Something went wrong');
            }
            return response.json();
        })
        .then(photos => {
            if (!photos.hits || photos.hits.length === 0) {
                iziToast.show({
                    message: `'Sorry, there are no images matching your search query. Please try again!'`,
                    position: 'topCenter',
                    color: 'red',
                });
                return;
            }
            gallery.insertAdjacentHTML('beforeend', createGalleryMarkup(photos.hits));
            showBox.refresh();
        })
        .catch(error => {
            console.log(error);
        });
}

function createGalleryMarkup(gallery) {
    return gallery
        .map(photo => {
            return `<li class="li-gallery">
            <div class="img-box">
                <a class="gallery-link" href="${photo.largeImageURL}">
            <img
            class="gallery-image"
            src="${photo.webformatURL}"
            alt="${photo.tags}"
            title="${photo.tags}"
            /></a></div>
        <div class="description-box">
            <div class="param-boxes"><p class="parameters">Likes</p>
            <p class="values">${photo.likes}</p></div>
            <div class="param-boxes"><p class="parameters">Views</p>
            <p class="values">${photo.views}</p></div>
            <div class="param-boxes"><p class="parameters">Comments</p>
            <p class="values">${photo.comments}</p></div>
            <div class="param-boxes"><p class="parameters">Downloads</p>
            <p class="values">${photo.downloads}</p></div>
        </div>
        </li>`;
    })
    .join('');
}