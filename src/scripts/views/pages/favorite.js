import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import { createRestaurantTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
        <div id="content"></div>
        <div id="content-null"></div>
        `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const container = document.querySelector('#content');
    const contentNull = document.getElementById('content-null');
    if (restaurants.length < 1) {
      contentNull.innerHTML += `
      <div id"message">
        <h2 tabindex="0" class="movie-item-not-found">No restaurant list here</h2>
      </div>
      `;

      container.innerHTML = '';
    } else if (restaurants.length >= 1) {
      container.innerHTML = `
          <h2 tabindex="0" class="content-heading">Favorite Restaurant</h2>
          <div class="content_inner">
              <div class="list-posts">
                  <div tabindex="0" class="restaurants"></div>
              </div>
          </div>
      `;
      const restaurantsContainer = document.querySelector('.restaurants');
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantTemplate(restaurant);
      });
      contentNull.innerHTML = '';
    }
  },
};

export default Favorite;
