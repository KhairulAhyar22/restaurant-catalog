import TheRestaurantSource from '../../data/therestaurant-source';
import { createRestaurantTemplate } from '../templates/template-creator';

const RestorantList = {
  async render() {
    return `
        <section class="heros">
          <picture tabindex="0" class="picture">
            <source media="(max-width: 600px)" srcset="./images/hero-image_4-small.jpg">
              <img 
                  src='./images/hero-image_4-large.jpg' 
                  alt="hero"></img>
          </picture>
        </section>
        <div class="hero_inner">
          <h1 tabindex="0" class="hero_title">Nikmati Hidangan Kami dengan Hidangan Kelas Dunia</h1>
        </div>

        <section class="content">
          <div class="content_inner">
            <h1 tabindex="0"class="content_label">Daftar Restoran</h1>
            <hr>
              <div class="list-posts">
                  <div class="restaurants"></div>
              </div>  
          </div>
        </section>
        `;
  },

  async afterRender() {
    const restaurants = await TheRestaurantSource.fetchRestaurantList();
    const restaurantsContainer = document.querySelector('.restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantTemplate(restaurant);
    });
    console.log(restaurants);
  },
};

export default RestorantList;
