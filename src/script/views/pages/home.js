import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItem } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="latest">
        <h2 class="latesthead">Explore Any Restaurant</h2>
    </div>
    <div id="content" class="content"></div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.ListRestaurants();
    const restaurantsContainer = document.querySelector('#content');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItem(restaurant);
    });
  },
};

export default Home;
