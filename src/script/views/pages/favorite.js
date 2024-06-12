import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItem } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <div class="latest">
        <h1 class="latesthead">Your Favorite Restaurant</h1>
    </div>
    <div id="content" class="content"></div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#content');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItem(restaurant);
    });
  },
};

export default Favorite;
