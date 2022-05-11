import { getAnimalById } from '../fetch.utils.js';
// import { animals } from './data.js';

const animalNameElem = document.getElementById('animal-name');
const animalImage = document.getElementById('animal-image');
const animalSays = document.getElementById('animal-says');

async function loadData() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const animal = await getAnimalById(id);
    animalNameElem.textContent = animal.name;
    animalImage.src = animal.image;
    animalSays.textContent = animal.says;
}

loadData();