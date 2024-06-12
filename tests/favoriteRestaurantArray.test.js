import { itActsAsFavoriteRestaurantModel } from './contracts/favoriteRestaurantContract';

let favoriteRestaurants = [];

const FavoriteRestaurantArray = {
  getRestaurant(id) {
    if (!id) {
      return;
    }

    // eslint-disable-next-line consistent-return, eqeqeq
    return favoriteRestaurants.find((restaurant) => restaurant.id == id);
  },

  getAllRestaurants() {
    return favoriteRestaurants;
  },

  putRestaurant(restaurant) {
    // eslint-disable-next-line no-prototype-builtins
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }

    // pastikan id ini belum ada dalam daftar favoriteRestaurants
    if (this.getRestaurant(restaurant.id)) {
      return;
    }

    favoriteRestaurants.push(restaurant);
  },

  deleteRestaurant(id) {
    // cara boros menghapus restoran dengan meng-copy restoran yang ada
    // kecuali restoran dengan id == id
    // eslint-disable-next-line eqeqeq
    favoriteRestaurants = favoriteRestaurants.filter(
      // eslint-disable-next-line eqeqeq
      (restaurant) => restaurant.id != id,
    );
  },

  // async searchRestaurants(query) {
  //   return (await this.getAllRestaurants()).filter((restaurant) => {
  //     const loweredCaseRestaurantName = (restaurant.name || '-').toLowerCase();
  //     const jammedRestaurantName = loweredCaseRestaurantName.replace(/\s/g, '');

  //     const loweredCaseQuery = query.toLowerCase();
  //     const jammedQuery = loweredCaseQuery.replace(/\s/g, '');

  //     // eslint-disable-next-line eqeqeq
  //     return jammedRestaurantName.indexOf(jammedQuery) != -1;
  //   });
  // },
};

// eslint-disable-next-line no-undef
describe('Favorite Restaurant Array Contract Test Implementation', () => {
  // eslint-disable-next-line no-undef
  afterEach(() => {
    favoriteRestaurants = [];
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantArray);
});
