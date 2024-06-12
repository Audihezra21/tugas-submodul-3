import CONFIG from '../../globals/config';

const createRestaurantDetail = (restaurant) => `
    <div id="contentdetail" class="contentdetail">
          <picture>
          <source media="(max-width: 600px)" data-srcset="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
          <img class="lazyload image_detail" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" title="${restaurant.name}" tabindex="0">
        </picture>
        <div class="restaurant_info_detail">
                <h2 class="detail_title">${restaurant.name}</h2>
            <div class="info_list">
                <h4>Kota</h4>
                <p class="info_city">${restaurant.city}<p>
                <h4>Alamat</h4>
                <p class="info_address">${restaurant.address}<p>
                <h4>Rating</h4>
                <p class="info_rate">⭐${restaurant.rating}/5<p>
                <h4>Deskripsi</h4>
                <p class="info_desc">${restaurant.description}</p>
            </div>
            <h2 class="detail_title">Menu</h2>
            <div class="restaurant_menu">
                <div class="foods_detail">
                <h4 class="menu_title">Foods</h4>
                <ul>
                    ${restaurant.menus.foods.map((food) => `<li class="list">${food.name}</li>`).join('')}
                </ul>
                </div>
                <div class="drinks_detail">
                <h4 class="menu_title">Drinks</h4>
                <ul>
                    ${restaurant.menus.drinks.map((drink) => `<li class="list">${drink.name}</li>`).join('')}</p>
                </ul>
                </div>
            </div>
            <div class="restaurant_review">
                <h3 class="review_header">Review</h3>
                <div class="review_item">
                ${restaurant.customerReviews.map((reviewer) => `
                    <h4>${reviewer.name} - ${reviewer.date}</h4>
                    <p>${reviewer.review}</p>`)}
                </div>
            </div>
        </div>
    

    <section class="input_section" id="addReview" tabindex="0">
    <div class="form_review">
      <h2>Add Review</h2>
      <form id="inputReview">
        <div class="input">
          <label for="inputName">Name</label>
          <input
            id="inputName"
            name="inputName"
            type="text"
            required
            placeholder="Name..."
          />
        </div>
        <div class="input">
          <label for="inputReview">Review</label>
          <textarea
            name="inputReview"
            id="inputReview"
            placeholder="Review..."
            required
          ></textarea>
        </div>
        <button id="ReviewSubmit" type="submit">Add Review</button>
      </form>
    </div>
  </section>
  </div>

    `;

const createRestaurantItem = (restaurant) => `
    <div class="card" id="list">
        <a href="/#/detail/${restaurant.id}">
        <picture>
        <source media="(max-width: 600px)" data-srcset="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
        <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" title="${restaurant.name}" tabindex="0">
      </picture>
            <div class="restaurant_info">
                <h2 class="info_title">${restaurant.name}</h2>
                <p class="info_city">${restaurant.city}<p>
                <p class="info_rates">Rating:⭐️ ${restaurant.rating}/5<p>
                <p class="info_desc">${restaurant.description.slice(0, 225)}</p>
                
            </div>
        </a>
    </div>`;

const createLikeButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
       <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
  `;

const createUnlikedButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
      <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
  `;

export {
  createRestaurantItem,
  createRestaurantDetail,
  createLikeButtonTemplate,
  createUnlikedButtonTemplate,
};
