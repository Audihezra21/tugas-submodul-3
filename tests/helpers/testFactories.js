// helpers/testFactories.js
import LikeButtonInitiator from '../../src/script/utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../src/script/data/favorite-restaurant-idb';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  console.log('Creating like button for restaurant:', restaurant); // Logging restaurant
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    data: { restaurant }, // Pastikan properti data berisi restaurant
    favoriteRestaurants: FavoriteRestaurantIdb,
  });
};

// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonPresenterWithRestaurant };
