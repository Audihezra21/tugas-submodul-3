import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetail } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-presenter';
import addReview from '../../utils/add-review';

const Detail = {
  async render() {
    return `
        <div class="detail_container">
            <h2 class="detail_head">Detail Page</h2>
        </div>
        <div id="detail_content" class="detail_content"></div>
        <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const data = await RestaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#detail_content');

    restaurantContainer.innerHTML = createRestaurantDetail(data.restaurant);
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      data,
    });

    const addReviewContainer = document.querySelector('#inputReview');
    const inputName = addReviewContainer.querySelector('#inputName');
    const inputReview = addReviewContainer.querySelector('#inputReview');

    addReviewContainer.addEventListener('submit', (event) => {
      event.preventDefault();

      addReview({
        url: url.id,
        name: inputName.value,
        review: inputReview.value,
      });

      addReviewContainer.reset();
      window.location.reload(true);
    });

    console.log(data);
  },
};

export default Detail;
