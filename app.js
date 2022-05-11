// import { animals } from '../animal-detail/data.js';
import { getAnimals } from './fetch.utils.js';
import { renderListItem } from './utils.js';

// const main = document.getElementById('main');
async function loadData() {
    const animalDetails = document.getElementById('main');
    const animals = await getAnimals();
    // const main = document.querySelector('main');
    for (let animal of animals) {
        const animalDiv = renderListItem(animal);
        animalDetails.append(animalDiv);
    }
}

loadData();
